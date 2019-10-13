+++
title = "Using Docker Commands with Aliases and Bash Functions"
description = "To aid productivity use aliases and bash functions for Docker commands"
author = "Sam Atkins"
date = 2019-10-13T07:06:45+01:00
categories = ["DevOps", "Productivity"]
tags = ["Docker", "bash", "command line", "DevOps", "productivity"]
draft = false
type = "post"
+++
![Containers on a ship](/images/container.jpg)
We use Docker at work and so I find myself running the same commands over and over. To save time I saved frequent `docker` and `docker-compose` commands as aliases and functions.

## Aliases

These aliases save a few key strokes for running often used commands:

```bash
# general compose aliases
alias dcb="docker-compose build"
alias dcu="docker-compose up"
alias dcub="docker-compose up --build"
alias dcs="docker-compose stop"

# list all running containers
alias dps="docker ps"

# stop all running containers
alias dsa="docker ps -q | awk '{print $1}' | xargs -o docker stop"

# list dangling images
alias dlist="docker volume ls -qf dangling=true"
```

## Functions

Some commands are better saved as functions.

When developing and writing unit tests, I will often want to get to the bash prompt in the test container. I saved this function as `dcbash.sh` and aliased it as `dcbash` to save a few keystrokes:

```bash
#!/bin/bash

# Run a bash shell in the specified container (with docker-compose)

# a simple help menu: if no arg is passed in, the function usage is printed
if [ $# -ne 1 ]; then
  echo "Usage: $FUNCNAME CONTAINER_NAME"
  return 1
fi

# this echo is optional but I like to maintain familiarity with the actual command
echo "CMD: docker-compose run --entrypoint="" $1 /bin/bash";
docker-compose run --entrypoint="" $1 /bin/bash
```

For example `dcbash pretend-service-test` runs `docker-compose run --entrypoint="" pretend-service-test /bin/bash`.

Images take up space and are not auto removed. I've encountered errors before about lack of space so a periodic tidy up of unused images and containers is recommended.

I saved this as `drmi.sh` and it removes dangling Docker images:

```bash
#!/bin/bash

# remove docker dangling images
docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
```

I saved this as `drmc.sh` and it removes all non-running containers:

```bash
#!/bin/bash

# removes all non-running containers
docker rm $(docker ps -q -a);
```

These aliases and functions help my productivity by saving a key strokes and saving time looking up the commands for a periodic tidy up of Docker images and containers. I hope they may prove useful to you too.
