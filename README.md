# Portfolio and blog

[![Greenkeeper badge](https://badges.greenkeeper.io/cubiio/samatkins.me.svg)](https://greenkeeper.io/)

## Table of Contents

- [About](#about)
- [Development](#development)
- [Netlify hosting and deployment](#netlify-hosting-and-deployment)
- [Adding blogposts](#adding-blogposts)
- [Adding images](#adding-images)
- [Blogpost gotchas](#blogpost-gotchas)
- [Tests](#tests)
- [TODOs](#todos)

## About

This is my personal site, including my portfolio and blog.

### Technology Colophon

- Gatsby static site generator: [Docs](https://www.gatsbyjs.org/) and [GitHub repo](https://github.com/gatsbyjs/gatsby)
- [React.js](https://facebook.github.io/react/)
- [Styled Components](https://www.styled-components.com/docs)
- [Font Awesome](https://fontawesome.com/)
- [Jest](https://facebook.github.io/jest/)

### Style

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)


## Development

Key commands:

```bash
# nvm to set correct version of node, npm and yarn
nvm use stable
>> Now using node v8.1.2 (npm v4.6.1)

# to start a hot-reloading development environment accessible at localhost:8000
yarn start

# generate an optimised production build
yarn build

# local server for testing production build
yarn serve

# to run unit tests
yarn test
```

Development should be conducted on the `dev` branch, and then when ready merged to `master`.

## Netlify hosting and deployment

All commits/merges to master are auto-deployed (assuming the build passes). Refer to the [Netlify docs](https://www.netlify.com/docs/) for more info.

## Adding blogposts

Switch to the `dev` branch and add a new folder here:

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

### Adding images
Add an `images` folder in the blogpost folder.  Then add the link in the `index.md`:

`![image text](./images/name.jpeg)`

### Blogpost gotchas

- Tags can't start with numbers as it causes an error when building the site.
- The pages are cached so changes may not update when the static site is generated. Clear the cache and rebuild the site.

## Tests
{placeholder}
