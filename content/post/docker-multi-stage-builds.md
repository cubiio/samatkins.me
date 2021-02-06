+++
title = "Docker Multi-Stage Builds"
description = "Using Docker multi-stage builds for smaller images that are easier to maintain"
author = "Sam Atkins"
date = 2021-02-06T11:04:50Z
categories = ["DevOps"]
tags = ["programming", "Docker", "CI", "DevOps"]
draft = false
type = "post"
+++
At work, we're using Docker multi-stage builds to get smaller image sizes. I thought I'd try it out with a small learning project. The headline result is I reduced a Docker image from 305MB to 12.2MB.

```bash
# before
docker image ls
helloworldapi       latest       b24c966e9bgg   6 weeks ago     305MB

# after
docker image ls
helloworldapi       latest       f1f76e06146h   7 seconds ago    12.2MB
```

## Multi-Stage Builds

How do multi-stage builds work? Every instruction i.e. line in a Dockerfile adds a layer to the image. A common practice was to have a development version of your Dockerfile which included everything you needed and a slimmed down version used for production. With multi-stage builds you don't need to maintain two Dockerfiles. Instead you can use the syntax `FROM ... AS <NAME>` to name a stage, and then copy that named stage when you want want to use it. Only what is needed is brought across in this `COPY` and all the other layers are discarded. This results in smaller image sizes.

Here's an example from the learning [project](https://github.com/sam-atkins/helloworldapi) I mentioned earlier. This is the Dockerfile before without using multi-stage. The image size was 305MB.

```Dockerfile
FROM golang:1.15.5-alpine
WORKDIR /app
COPY . .
RUN go mod download
RUN go build -o main .
CMD ["/app/main"]
```

This is the Dockerfile using a multi-stage, named as `builder` and used like this `COPY --from=builder /app .` i.e. copy the named stage into the `/app` directory.

```Dockerfile
FROM golang:1.15.5-alpine AS builder
WORKDIR /app
COPY main.go .
RUN go build -o main .

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app .
CMD ["/app/main"]
```

As a result of using this multi-stage the image size is now 12.2MB.

## Named Stages

Stages are not named by default and you can refer to each stage by an integer starting at 0 for the first `FROM`. So if the Dockerfile read `FROM golang:1.15.5-alpine` we could copy it across like this `COPY --from=0 /app .`. I prefer to use names as it makes it more obvious what is happening in the Dockerfile.

## Target a Stage

How can you use multi-stage builds? When building an image you can target a stage. For example, a build stage named `dev` in a Dockerfile would be built like this:

```bash
docker build --target dev -t "${DOCKER_REGISTRY}"/${IMAGE_NAME}:"${IMAGE_TAG}-dev" .
```

The example above assumes variables are set for the Docker registry where the image is published, the image name and the image tag.

If the image is published then you can use this in Docker Compose:

```yaml
service-name:
  image: $DOCKER_REGISTRY/$IMAGE_NAME:$IMAGE_TAG-dev
```

Alternatively, if the Dockerfile and source code are available on your local machine, you can target it like this:

```yaml
service-name:
  build:
    context: path-to-service-name-source-code
    target: dev
```
