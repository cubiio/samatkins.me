---
title: "Why I'm using Hugo static site generator"
date: "2016-09-18T10:15:16.408Z"
showDate: true
draft: false
tags: ["programming", "blogging", "Hugo", "staticSiteGenerator"]
---

Encouraged by a conversation with Andy @ Udacity, I made the decision to start a technical coding blog with a focus on helping me to learn more and document my coding journey.

I did waver if this was the right thing to do but [this](https://medium.freecodecamp.com/new-contributors-to-open-source-please-blog-more-920af14cffd#.ecg8qppwg) and [this](https://emptysqua.re/blog/write-an-excellent-programming-blog/) helped convince me to go ahead.

The next decision was then how to set-up it all up.

## DIY
It was immediately clear to me I wanted a Do It Yourself option. I wanted a project to help develop my technical learning rather than just using Wordpress.com or Medium to share my views, opinions and learnings. (Although I think I may experiment with posting some blogs on these sites as well.)

Having blogged before using a self-hosted Wordpress.org site I didn't want to go down that route again. I'm a big fan of Wordpress, especially if your site is more than just a blog. **But** page load times, the admin of having to upgrade for security, was all too much for what I wanted to be just a simple blog site.

## Static site generators
Whilst on Github I noticed the option to set-up a GitHub Page, with their preferred option of Jekyll. This sounded really interesting.

To digress for a moment, [this](https://gohugo.io/overview/introduction/) is a good explanation of what a static site generator is.

I narrowed down my options to Pelican, Jekyll and Hugo. Let's take a look at each one in turn.

### Pelican
As a *codenewbie*, I liked the idea of Pelican as it uses Python. Python is to me a great language for a beginner. The syntax is really straightforward and easy to comprehend. This was a big plus for. Also, the documentation and quick start are both good for Pelican.

The downsides are the lack of themes. Of course I could develop my own but my focus has to be learning to code and having some kind of qualification and portfolio to show for it. For me, building a theme is someway down the *TODO* list.

I tried Pelican and managed to get a site up and running, but ran into some technical difficulties trying to switch between templates. My failing I know but this prompted me to try
another option.

### Jekyll
I plan at some stage to learn some Ruby. Initially I was put off by using something that used a different language but after my experience with Pelican I thought I would try it out.

I took on more than I could manage at this stage. The list of things to install is long, and Xcode itself took ages (4GB download and install took hours - be warned!).

The issue for me was I kept encountering all sorts of problems to install and set-up, from the versions of installed bundler, ruby and rubygems not being compatible, to receiving errors
when trying to build the site.

Whilst the community are really helpful, and I hate to quit, I had to admit defeat. I think if you are familiar with Ruby then Jekyll is a really good option. For me at this stage, it was too much of a challenge.

### Hugo
I was initially reluctant to try Hugo as again it was a different language from my initial focus list (html and css obviously, javascript and python). What swayed me was my experience with Pelican and Jekyll (primarily due to my lack of programming and technical knowledge it must be said), the [good selection of themes](http://themes.gohugo.io/) available for Hugo, and the
[excellent user documentation](http://gohugo.io/).

With Hugo I had zero difficulties with getting a simple site set-up. The documentation is really good in explaining how to install Hugo and get a site set-up.

I now have the satisfaction of having 'built' my own site, can learn more about configuring the site but it is also fairly light touch in maintaining it. (Now as light touch as Wordpress.com or Medium but this is a decision I knowingly took for good reason). I can use it as my blog as part of my journey to learn to code. I also plan to learn more about the Go language, and see how I can use Hugo to build a site.

As an added bonus, it has introduced me to the Go language and I've added to my learning list.

## Quick Guide to Hugo
This section is intended as a quick reference guide to the key aspects of installing Hugo.

First up, check out these links for really good explanations on installing and setting up Hugo:

* Installing Hugo on a [Mac](http://gohugo.io/tutorials/installing-on-mac/)
* Superb step by step guide to hosting on [GitHub Pages](http://gohugo.io/tutorials/github-pages-blog/#introduction)

Secondly, here are the key points and commands to consider in order to install and use Hugo:

```bash
# To install Hugo via Homebrew
brew install hugo

# Install Pygments for code syntax highlighting
pip install Pygments

# To check if Hugo is installed and display help
hugo help

# Check which version of Hugo is installed
hugo version

# Command to quickly scaffold a new site called exampleName.
hugo new site exampleName

# Hugo runs its own webserver to render the files, includes drafts
hugo server

# Hugo runs its own webserver to render the files, includes drafts
hugo server --buildDrafts

# If a theme is not specified in your config file, add `-t themeName` to the command

# Hugo builds your site into the public folder
hugo
```
