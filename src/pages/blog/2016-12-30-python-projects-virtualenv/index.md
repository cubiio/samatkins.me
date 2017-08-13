---
path: "/python-project-virtualenv.html"
date: "2016-12-30T10:15:16.408Z"
title: "Managing Python projects with Virtualenv"
tags: ["programming", "python", "virtualenv"]
---


## Python 2 versus 3

To summarise the Python wiki: 

> “Python 2.x is legacy, Python 3.x is the present and future of the language.”

More info is available on the Python [wiki](https://wiki.python.org/moin/Python2orPython3).

### Why use Python 2?
Wherever possible, use Python 3. However, sometimes Python 2 may be necessary and per the Python wiki the two key reasons are likely to be:
deploying to an environment you don’t control so it may impose a specific version of Python
if you want to use a third party package or utility which does not have a Python 3 compatible version

## Running P2 and P3 on macOS
macOS comes with Python 2 pre-installed. I believe it is used in the Operating System. As a result of this, even if you want to use Python 3, you should not try to uninstall Python 2. At least this is my summary of some Stackoverflow articles and I’m not going to experiment to find out if they are right or wrong.
It is actually fairly straightforward to install Python 3. Downloads for Python 3 are available at Python.org. This downloads an installer with GUI instructions on how to install.

Another option is to use brew e.g.

```
$ brew install python3
```

Once Python 3 is installed, use which to check Python is installed correctly.

```
$ which python
/usr/local/bin/python
$ which python3
/usr/local/bin/python3
```

The results should show Python is in the above directories. If this is not the case, the installs may not be correct.

## Intro to Virtual Environments
I read more and more support is becoming available for Python 3 but for example the Udacity course I’m following is still using Python 2, and Google Cloud still requires Python 2 (at least from my beginner’s understanding so I might be wrong on this one).
Either way, how do you manage manage dependencies if you are switching between Python 2 and 3?


VirtualEnv to the rescue. Virtualenv is a tool to create isolated Python environments. It allows you to use packages and utilities within a virtual environment i.e. “has its own installation directories”

## My documentation
The documentation for using Python and virtualenv is dispersed across multiple sites, in particular regarding managing projects in Python 2 versus 3. The primary purpose of this blogpost is a consolidation of various things I’ve found for my own future reference.

### How to use virtualenv
The below refers to using Python 2. Separate Python 3 instructions follow after.

Start a project repo as per normal:

```
mkdir new-python-project
cd new-python-project
```

Once inside the project directory, run the command `virtualenv env`

`env` is the directory to place all the virtualenv good stuff. This name can be changed but I always leave this as the default so I know exactly what this is.
It also has the small advantage that env is already included in the Github Python .gitignore template, saving a few keystrokes to get your git repo up and running.


#### pip
To install package dependencies, you first need to activate the virtual environment.

The command is:

```
$ source env/bin/activate
```

This must be run from within the project directory.

To save some typing, I saved activate as an alias in my zsh alias config.

To deactivate, simply type the command `deactivate`.

#### Requirements.txt
Add a pip requirements.txt file to the root of your project directory.
To do this type the command `pip freeze pip freeze > requirements.txt`

This is similar to a package.json file for Gulp with all your packages and dependencies. It makes it possible to duplicate the project using the same dependencies. For example, by running pip install -r requirements.txt you would install the specific package dependencies.


## Python 3
To set-up a Python 3 amend the virtualenv command as below:

```
virtualenv -p python3 env
```

Activate and deactivate work as above. Make sure to activate the virtual env prior to installing any packages and utilities but also to ensure your code is executed correctly. Without the virtualenv being active, your system may look to run the default Python install i.e. Python 2 and your code may not execute.


---

Thanks for reading. As I mentioned, the main purpose of this is a consolidation of useful information I found in order to manage Python and virtual environments for my projects.
Should anyone else read this, and spot any improvements or corrections, please let me know. Otherwise, I hope it may also prove useful to other readers.
