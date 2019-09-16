---
title: "Pipenv and Poetry package managers"
date: "2019-04-14T09:09:58+01:00"
template: "post"
draft: false
slug: "/post/pipenv-poetry/"
category: "programming"
tags:
  - "python"
  - "package managers"
description: "Overview of Pipenv and Poetry Python package managers"
---
Python is a wonderful language for beginners but I remember when starting out how Pip, the defacto package manager for Python (at least at the time) didn't seem as fully featured as others such as npm. Having to manually update `requirements.txt` or remember some other command to get it updated seemed an oversight. Add to that the need for virtual environments due to the whole Python 2 vs Python 3 thing and it can hinder new programmers from getting up and running with a Python project.

That's why the additions of [Pipenv](https://pipenv.readthedocs.io/en/latest/) and [Poetry](https://poetry.eustace.io) have been welcome. I've now used them for some of my own learning projects and am impressed with them both. Here's my quick overview of them.

## Pipenv

Brought to you by Kenneth Reitz, the same author as `requests`, Pipenv combines the functionality of Pip and a tool like virtualenv. Through a few simple and intuitive commands, you can create a new virtual environment, install packages and Pipenv handles creating and managing your requirements in `Pipfile` and `Pipfile.lock` files.

I use it for some scripts I've written and I'm a huge fan.

## Poetry

Poetry is used to help you manage libraries you are developing. It also has a few simple and intuitive commands to manage the dependencies in your project, including one to scaffold out a directory structure with starter files for your library.  However, you will still need to use something like virtualenv to manage the version of Python you are using. Poetry uses a `pyproject.toml` and `poetry.lock` for the dependencies. I like this file format and the real strength is the `pyproject.toml` file can be used instead of `setup.py` to manage the packaging of your library to PyPi - [Python Package Index](https://pypi.org).

I only have the one experience of creating a package available on PyPi but found using Poetry very useful during this process.

## Conclusion

Both are good additions to the Python ecosystem, and provide good alternatives to the Python programmer. It's important to remember the distinction in use cases for the two. As it says in Pipenv's documentation:

> There is a subtle but very important distinction to be made between applications and libraries. This is a very common source of confusion in the Python community.
> Libraries provide reusable functionality to other libraries and applications (let’s use the umbrella term projects here). They are required to work alongside other libraries, all with their own set of subdependencies. They define abstract dependencies.

Which should you use? To me that depends on the use case.

* Scripts: use Pipenv
* Libraries: use Poetry
* Applications: use Pipenv (or Docker)

In most cases when building an application as part of a learning project, using Docker makes most sense for me. I've had some issues with Pipenv working in Docker (some strange caching issues that I didn't have time to get to the bottom of), so when I'm using Docker I combine it with Pip and a `requirements.txt` file. It is entirely likely the Docker/Pipenv issues was something I set up incorrectly so using Pipenv and Docker might be a good combination for you.

To conclude, in my opinion Pipenv and Poetry are great tools and welcome additions to the Python ecosystem.
