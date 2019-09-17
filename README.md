# My Site: samatkins.me

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2d388ca4-8a57-44ce-b079-a6ae729c4e12/deploy-status)](https://app.netlify.com/sites/samatkinsme/deploys)

## Description

The code for my personal site and blog.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Develop](#develop)
  - [How to run](#how-to-run)
  - [Style Guide](#style-guide)
  - [Adding blogpost content](#adding-blogpost-content)
  - [Develop troubleshooting](#develop-troubleshooting)
- [Release](#release)
  - [Build](#build)
  - [Deploy](#deploy)

## Getting started

Prerequisites:

- [Gatsby.js](https://www.gatsbyjs.org/)
- Node.js
- [yarn](https://yarnpkg.com/en/) (commands here use yarn but npm is also an option)

### Installation

Follow instructions in the [Gatsby docs](https://www.gatsbyjs.org/docs/) to install Gatsby.

Git clone the repo into a local directory.

Install all dependencies:

```sh
yarn
```

## Develop

### How to run

To run a local development server:

```bash
gatsby develop
```

### Folder Structure

```bash
└── content
    ├── pages
    └── posts
└── static
    ├── admin
    └── media
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    ├── cms
    │   └── preview-templates
    ├── components
    │   ├── Feed
    │   ├── Icon
    │   ├── Layout
    │   ├── Page
    │   ├── Pagination
    │   ├── Post
    │   │   ├── Author
    │   │   ├── Comments
    │   │   ├── Content
    │   │   ├── Meta
    │   │   └── Tags
    │   └── Sidebar
    │       ├── Author
    │       ├── Contacts
    │       ├── Copyright
    │       └── Menu
    ├── constants
    ├── templates
    └── utils
```

### Style Guide

This repo uses [Prettier](https://github.com/prettier/prettier) formatting.

### Adding blogpost content

To add a new post, run `node ./scripts/create_post_template.js -t 'The Title'`. This will add a new file in `content/posts/` with the following metadata:

```markdown
---
title: "The Title"
date: ""
template: "post"
draft: false | true
slug: "post/the-title"
category: "programming"
tags:
  - "programming"
description: ""
socialImage: "/media/image.jpg"
```

Add images to `static/media/image-name.jpg` folder.

Link to the image like this in the markdown file: `![image text](/media/image.jpeg)`

Code blocks are added like this:

```python
def func():
    pass
```

### Develop troubleshooting

## Release

### Build

### Deploy

The site is hosted on Netlify. Netlify deploy config is in the `netlify.toml` file.

A push triggers a build on Netlify. If on a branch, it builds and deploys a preview.

A push to the main branch will trigger a new deploy to `production`.

This is why all development should take place on a feature branch, and only when ready, merge to master.

Refer to the [Netlify docs](https://www.netlify.com/docs/) for more info.
