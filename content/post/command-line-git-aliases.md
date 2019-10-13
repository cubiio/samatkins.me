+++
title = "Command Line Git Aliases"
description = "How to add git aliases to use in the command line"
author = "Sam Atkins"
date = 2019-02-11T19:39:18Z
categories = ["Productivity"]
tags = ['bash', 'command line', 'git', 'linux', 'macOS', 'programming', 'productivity']
draft = false
type = "post"
+++
Working with version control is a must for good software development. I use git personally and at work. The GUI in VS Code is good for some git work e.g. viewing diffs. However, for some tasks it is fast and productive to use the command line.

There are some commands that are very useful but are too long to type each time i.e. they are good candidates to save as an alias. For example:

```bash
# Command to switch to master branch, fetch and pull latest from remote
git checkout master && git fetch && git pull origin master

# Command to push all commits to remote from your local branch
git push origin $(git_current_branch)

# Command to fetch and pull all commits from remote to local for your current branch
git fetch && git pull origin $(git_current_branch)

# Pretty prints the git log. I typically use when I have merged a feature branch to master and want to find the commit as part of then tagging the release
git log --graph --pretty='\''%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'\'' --abbrev-commit --all
```

## Setting up aliases

There are several options to set these up as aliases. This is how I did it on a MacBook.

### bash profile

In your `.bash_profile` which is in your home directly i.e. `~/.bash_profile`add the aliases.

An example for git fetch and pull:

```bash
alias ggpull='git fetch && git pull origin $(git_current_branch)'
```

When I type the alias `ggpull` in the command line, the command `git fetch && git pull origin $(git_current_branch)` will run.

### zsh

If like me you use zsh, add the below to the to the bottom of `.zshrc`. This ensures all your git alias goodness in `.bash_profile` is available even if you use zsh.

```bash
if [ -f ~/.bash_profile ]; then
  . ~/.bash_profile;
fi
```

My preference is to keep all my aliases in `.bash_profile` for forward compatibility. If I were to stop using zsh or want to use these aliases on a Linux machine then I already have my bash profile file ready.

I hope this is helpful in setting up some of your own aliases and saving a few keystrokes each day.
