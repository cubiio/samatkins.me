# Portfolio and blog

## Table of Contents

- [About](#about)
- [Built with](#built-with)
- [Development](#development)
- [Netlify hosting and deployment](#netlify-hosting-and-deployment)
- [Adding blogposts](#adding-blogposts)
- [Adding images](#adding-images)
- [Blogpost gotchas](#blogpost-gotchas)
- [Tests](#tests)

## About

This is my personal site, including my portfolio and my blog. 

### Built with

- Gatsby static site generator: [Docs](https://www.gatsbyjs.org/) and [GitHub repo](https://github.com/gatsbyjs/gatsby)
- [React.js](https://facebook.github.io/react/)
- [Styled Components](https://www.styled-components.com/docs)
- [Font Awesome](https://fontawesome.com/)
- [Jest](https://facebook.github.io/jest/)
- [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Development

The key commands are:

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

All commits/merges to master are auto-deployed (assuming the build passes).

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

TODO - add notes re Jest tests
