---
path: "/atom-golang-setup.html"
date: "2016-09-22T10:15:16.408Z"
title: "Atom.io Golang Set-up"
tags: ["programming", "atom", "golang"]
---

This is my consolidated version of documents and videos on how to get the [Atom editor](https://atom.io/) set-up for Go on my Mac. Following these steps will get you a complete IDE environment which will make coding in Go much more pleasurable.

Before we move to Atom set-up, there are two key fundamentals required for Go programming regardless of choice of editor/IDE.

## Workspace
It is recommended to keep all your Go code in a single workspace. I created a directory in my projects folder called `go-workspace`. 

The workspace is a directory hierarchy with three directories:

- src contains Go source files,
- pkg contains package objects, and
- bin contains executable commands.

More info on [code organisation](https://golang.org/doc/code.html) can go found at the official GoLang site.

## Environment Variable
The environment variable needs to be set. This assumes you have already installed Go.

### What is an environment variable?

> A **environment variable** stores a path to a location on a computer. For example, if you run a package, it looks along the path variable to see if there is something there that knows how to run the package. 

> Specifically, the **GOPATH environment variable** specifies the location of your Golang workspace. 
> 

More info here on [Golang.org](https://golang.org/cmd/go/#hdr-GOPATH_environment_variable).

### How to set-up
These are the instructions for a Mac, I can't say if it will work on Windows.

Open up your Terminal.

```
nano .bash_profile
# opens up your .bash_profile in the nano editor
```

An alternative is to manage this in `.bashrc`, in which case: 

```
nano .bashrc
# opens up your .bashrc in the nano editor
```

Once in nano, add the following:

- A comment to make clear what this code is i.e. "For Go programming"
- GOROOT: this is where Go is installed on your machine
- GOPATH: this is the path to your Go workspace
- PATH: it is suggested to include the workspace's bin subdirectory 

```
# For Go programming
export GOROOT="/usr/local/go"
export GOPATH="$HOME/projects/go-workspace"
export PATH="$HOME/projects/go-workspace/bin:$PATH"
```

To save the changes `ctrl + X` and when prompted confirm the changes with `Y`.


## Atom Setup
In this section I include Command Line tools and plugins recommended as must haves for Go. 

### Command Line Tools
Open your Terminal

```
go get -u golang.org/x/tools/cmd/... 

# note the ... are required after cmd/
```

and then 

```
go get -u github.com/golang/lint
```

and then

```
go get -u github.com/nsf/gocode
```

### Plugins for Go
Open preferences in Atom 'CMD + comma' and go to the +install menu item. Search there for the packages.

* [go-config](https://atom.io/packages/go-config) - Detects installed go (golang) runtime(s), tools, and configuration, making them available for use by other packages

* [go-plus](https://github.com/joefitzgerald/go-plus) - adds various packages to give extra functionality and an "improved Go experience". Check the GitHub repo for more info on the packages

* [go-get](https://github.com/joefitzgerald/go-get) - An Atom Package For Managing Go Libraries And Executables. It will let you know if there is a more recent version of the library/package you are using

* [PlatformIO-IDE-Terminal](https://atom.io/packages/platformio-ide-terminal) - a terminal package for Atom

* [language-docker](https://atom.io/packages/language-docker) - Dockerfile syntax highlighting

* [dash](https://atom.io/packages/dash) - Dash documentation integration with Atom for Golang;

Stating the obvious, the Atom Dash package requires [Dash](https://kapeli.com/dash). Just my personal opinion but Dash is highly recommended, and not just for Golang.

Originally posted on my [GoLangTraining Wiki](https://github.com/cubiio/GoLangTraining/wiki/Getting-Atom-set-up-for-Go).
