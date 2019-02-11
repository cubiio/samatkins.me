---
title: "Installing Tree on OSx"
date: "2016-09-19T10:15:16.408Z"
showDate: true
draft: false
tags: ["programming", "macOS", "linux", "command-line"]
---

This is how to install Tree on macOS in the Terminal.app. It assumes Homebrew is installed. [Homebrew](http://brew.sh/) is a package manager for OSx.

To install run this command using Homebrew: `brew install tree`

Now that it is installed, here's how to use it:

```bash
# Useful to run this to test it installed properly and displays help
tree --help

# Lists all files and directories
tree -a

# Shows the tree of specified directory
tree -a <directory name>

# Lists directories only in the pwd
tree -d
```

## Thoughts

An aside, previously I never really understood the power (and thrill) of using the command line. It's relatively simple to install and use this binary, and yet it gave me such satisfaction from discovering tree to instal/use. I think this is a sign that pursuing learning to code is the right thing for me.
