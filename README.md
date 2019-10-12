# My Site: samatkins.me

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2d388ca4-8a57-44ce-b079-a6ae729c4e12/deploy-status)](https://app.netlify.com/sites/samatkinsme/deploys)

## Description

The code for my personal site and blog.

## Table of Contents

- [My Site: samatkins.me](#my-site-samatkinsme)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Getting started](#getting-started)
    - [Installation](#installation)
  - [Develop](#develop)
    - [How to run](#how-to-run)
    - [Images](#images)
    - [Style Guide](#style-guide)
    - [Adding blogpost content](#adding-blogpost-content)
    - [Develop troubleshooting](#develop-troubleshooting)
  - [Release](#release)
    - [Build](#build)
    - [Deploy](#deploy)

## Getting started

Prerequisites:

- [Hugo](https://gohugo.io)

### Installation

Follow instructions in the [Hugo docs](https://gohugo.io/getting-started/quick-start/) to install Hugo.

Git clone the repo into a local directory.

## Develop

### How to run

To get the local Hugo dev server running:

```bash
hugo server -D
```

To check options:

```bash
hugo help
```

The `-D` flag serves all draft blog posts.

### Images

To process jpeg and png images, place the images in `src/images/pending` and run `gulp`.

### Style Guide

This repo uses [Prettier](https://github.com/prettier/prettier) formatting, where it is available for the language.

### Adding blogpost content

To add a new post:

```sh
hugo new post/new-blog-post.md
```

Navigate to the newly created file `content/post/new-blog-post.md` and update the template front matter:

```markdown
+++
title = "New Blog Post"
description = ""
author = ""
date = 2019-09-18T19:06:13+01:00
tags = []
draft = true
+++
```

Code blocks are added like this:

```python
def func():
    pass
```

### Develop troubleshooting

## Release

### Build

To build a production version locally, run:

```sh
hugo
```

### Deploy

The site is hosted on Netlify. Netlify deploy config is in the `netlify.toml` file.

A push triggers a build on Netlify. If on a branch, it builds and deploys a preview.

 A push to the master branch will trigger a new deploy to `production`.

 This is why all development should take place on a feature branch, and only when ready, merge to master.

Refer to the [Netlify docs](https://www.netlify.com/docs/) for more info.
