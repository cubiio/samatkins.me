+++
title = "Hugo Pipes"
description = "Replacing webpack with Hugo Pipes to process Sass files"
author = "Sam Atkins"
date = 2019-09-28T13:47:05+01:00
tags = ["Hugo", "assetProcessing", "staticSiteGenerator"]
draft = true
+++
Hugo version 0.43 introduced [Hugo Pipes]([https://gohugo.io/hugo-pipes/introduction/](https://gohugo.io/hugo-pipes/introduction/)) which process assets e.g. save preprocessed Sass files to CSS files. I finally got round to adding this as part of adapting the Ghostwriter theme I use on my site (a forked Ghostwriter theme by [Juraj Bubniak]([https://github.com/jbub/ghostwriter](https://github.com/jbub/ghostwriter))).

## Why Hugo Pipes and not Webpack

The theme had a webpack build for the Sass files which could be replaced by Hugo Pipes. This was attractive as it simplified the build process for my static site and removed webpack and a whole load of dependencies I no longer need to worry about keeping up-to-date.

## How I added Hugo Pipes

The first step was to move the Sass files to a top level directory called `/assets`.

The second step was to add this pipeline:

```html
{{ $style := resources.Get "sass/main.scss" | resources.ToCSS | resources.Minify | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $style.Permalink }}">
```

For organisation, I added the above to a new partial called `layouts/partials/styles.html` and then included this partial into the `header.html` partial using `partialCached`.

```html
{{ partialCached "styles.html" . }}
```

Why use `partialCached`?

> allows for caching of partials that do not need to be re-rendered on every invocation

After some testing to check it worked, the final step for local development was the happy task of deleting the webpack config and associated files.

In terms of deploying, I use Netlify and there turned out to be one gotcha.

```bash
error: failed to transform resource: TOCSS: failed to transform "scss/main.scss" (text/x-scss): this feature is not available in your current Hugo version
```

The issue per this [post from Netlify](https://www.netlify.com/blog/2019/03/14/a-more-flexible-build-architecture-with-updated-linux/) is due to an older version of an Ubuntu image which was incompatible with the version of Hugo. In order to use Hugo Pipes you need to make sure you are using the new Ubuntu image. If you recently set up a Hugo site on Netlify this new Ubuntu image is the default. My site has been on Netlify for some time so I needed to go into the settings and select the new Ubuntu Xenial build image.

![Netlify Ubuntu Image](/images/netlify_build_image.png)

With that done, I re-deployed and this time the deploy went through and everything worked.
