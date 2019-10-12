+++
title = "Setting up ESLint and Prettier"
date = "2018-02-10"
showDate = true
draft = false
categories = ["Front End"]
tags = ["programming", "javascript", "eslint", "prettier", "linting"]
type = "post"
+++

![Prettier.io](/images/prettier.png)

Image: [Prettier.io](https://prettier.io/)

## Set-up ESLint and Prettier

I'm a big fan of linting and I love the configurability of ESLint with the auto formatting capabilities of Prettier. It's been a revelation. Learning best practices in terms of ESLint rules and formatting from Prettier, plus no more bikeshedding at work in pull requests on coding style. Let the machine take care of it for you.

Each time I set-up a new JavaScript project, I set-up this configuration in my editor of choice [Virtual Studio Code](#https://code.visualstudio.com/), so this blogpost is my step by step guide to remind myself how to implement ESLint and Prettier to work in VS Code.

### Specifics

Before diving into the detail, a few points:

* I install the config for each project locally as I prefer that level of control to fine tune for a project's specific needs.
* [Yarn](https://yarnpkg.com/en/) is used as the package manager but swop out the equivalent `npm` commands if preferred.
* As mentioned above, the final step includes VS Code configuration but check Prettier's docs for set-up with different editors.

### Install ESLint

Step one is to install ESLint with the AirBnB style guide config. In order to do this, follow the instructions from [AirBnB](https://www.npmjs.com/package/eslint-config-airbnb):


> If you use yarn, run npm info "eslint-config-airbnb@latest" peerDependencies to list the peer dependencies and versions, then run yarn add --dev <dependency>@<version> for each listed peer dependency.

For example:

```bash
➜ ~ npm info "eslint-config-airbnb@latest" peerDependencies

{ eslint: '^4.9.0',
  'eslint-plugin-import': '^2.7.0',
  'eslint-plugin-jsx-a11y': '^6.0.2',
  'eslint-plugin-react': '^7.4.0' }
```

Based on this info, the install command would look like.

```bash
yarn add --dev eslint babel-eslint eslint-plugin-import@^2.7.0 eslint-plugin-jsx-a11y@^6.0.2 eslint-plugin-react@^7.4.0
```

You'll notice the install of `eslint` and `babel-eslint` in addition to the AirBnB config.

Once complete, add a `.eslintrc.yml` to the root of your project and add the config from the [dotfiles template repo](https://github.com/sam-atkins/repo-dotfiles/blob/master/.eslintrc.yml).

### Install Prettier

Next up, install Prettier and some plugs so it all plays nicely together:

```bash
yarn add prettier --dev --exact
yarn add --dev prettier eslint-plugin-prettier eslint-config-prettier eslint-config-airbnb
```

This is important because both ESLint and Prettier will try to format code which we don't want. Instead we want Prettier to format the code based on the ESLint rules defined in the `.eslintrc.yml` file.

### VS Code extensions and settings

The final step is to configure the editor so it plays nicely with the project's ESLint and Prettier config.

These steps are specific for VS Code. First, install two extensions:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Second, add these user settings (CMD + , to open user settings):

```javascript
// My personal preference; set for JS only to avoid formatting other file types
  "[javascript]": {
    "editor.formatOnSave": true
  },

// This stops VS Code from trying to autoformat code
"javascript.format.enable": false,

// This one is obvious, right?
"prettier.eslintIntegration": true,
```

That's it. Your project is ready to be linted and formatted.
