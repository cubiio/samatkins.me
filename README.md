# samatkins.me

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![deploys by netlify](https://img.shields.io/badge/deploys%20by-netlify-00c7b7.svg)](https://www.netlify.com)

## Description

The code for my personal website, including portfolio and blog.

### Technology Colophon

- Gatsby static site generator: [Docs](https://www.gatsbyjs.org/) and [GitHub repo](https://github.com/gatsbyjs/gatsby)
- [React.js](https://facebook.github.io/react/)
- [Styled Components](https://www.styled-components.com/docs)

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

### Installation

Dependencies:
* Gatsby static site generator
* Yarn package manager

Git clone the repo into a local directory. To install all dependencies using yarn:

```sh
yarn install
```

## Develop

### How to run

To start a hot-reloading development environment accessible at localhost:8000

```bash
gatsby develop
```

### Style Guide

This repo uses [ESLint](https://eslint.org/) with [Prettier](https://github.com/prettier/prettier) formatting.

The ESLint config extends from AirBnB, with a few changes. Refer to the `.eslintrc.yml` file in the root of the repo for info on the changes.


### Adding blogpost content

Switch to the `<feature>` branch and add a new folder here:

`src/pages/blog/`

Name the folder with the date and add an `index.md` file in the folder:

`YYYY-MMM-DD-hello-world/index.md`

Add front matter to the `index.md` file:

```md
---
path: "/slug-name.html"
date: "2017-01-01T10:15:16.408Z"
title: "Blogpost Title"
tags: ["python", "programming", "javascript"]
---
```

Add an `images` folder in the blogpost folder.  Then add the link in the `index.md`:

`![image text](./images/image.jpeg)`

In summary, the tree would like this once the new content is added:

```
- src/pages/blog/
  - YYYY-MMM-DD-hello-world/
    - index.md
    - images/
      - image.jpeg
```

### Develop troubleshooting

#### Blogpost gotchas

- Tags can't start with numbers as it causes an error when building the site.
- The pages are cached so changes may not update when the static site is generated. Try restarting the development server. If this doesn't work, clear the cache (i.e. `/.cache`) and rebuild the site.

Development should be conducted on  `<feature>` branch, and then when ready merged to `master`.

## Release

### Build

```sh
# generate an optimised production build
gatsby build

# local server for testing production build
gatsby serve
```

### Deploy

The site is hosted on Netlify. A push to the master branch will trigger a new deploy to Netlify. This is why all development should take place on a feature branch, and only when ready, merge to master.

Refer to the [Netlify docs](https://www.netlify.com/docs/) for more info.
