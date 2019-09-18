+++
title = "Code Snippets in VS Code"
description = "Adding your own code snippets is a small but powerful way to increase your productivity"
author = "Sam Atkins"
date = 2019-03-17T17:17:10Z
tags = ["programming", "python", "vs-code", "productivity"]
draft = false
+++
Adding code snippets in your IDE are a great way of saving key strokes on code that you often use.

In Python specific IDEs such as PyCharm, enabling docstrings is built-in and available via preferences. I prefer using VS Code as I don't just code in Python and generally prefer it as my IDE. But you don't need to lose out on this small piece of functionality because that's where creating your own code snippets comes in.

For those who don't code in Python, and are asking what is a Python docstring? Here's the official definition:

> A docstring is a string literal that occurs as the first statement in a module, function, class, or method definition

You can read more about docstrings [here](https://www.python.org/dev/peps/pep-0257/).

Here's how to set up a code snippet in VS Code, using the Google style of docstring as an example.

In the menu bar select: Code -> Preferences -> User Snippets

Select Python from the menu. This opens a file called `python.json`

In this file add the following:

```json
"Python docstring": {
  "prefix": "_docstring",
  "body": [
    "\"\"\"${1:description}\n\nArgs:\n\t${2:param name} (${3:param type}): ${4:describe the param} \n\nReturns: \n\t${5:type}: ${6:description}\n\"\"\""
  ],
  "description": "Python docstring - Google style"
}
```

This snippet example outputs the following:

```python
    """description

    Args:
        param name (param type): describe the param

    Returns:
        type: description
    """
```

What does the syntax in the actual snippet mean?

* The key `Python docstring` is the name of the snippet
* The `prefix` is what you type in order to trigger the snippet
* The `body` is the output of the snippet once triggered
* The description is displayed whilst typing and selecting a snippet

Within the body of the snippet the items with the syntax `${1}` are very helpful. The cursor will tab through each of these so you can overwrite the placeholders. In the example above, first of all "description" is highlighted and when you type you can overwrite this text. Hit tab and the cursor will move to "param name", tab again and "param type" and so on.

I find snippets a small but powerful way of increasing productivity and reducing my frustration. I hope this helps you to add snippets in VS Code and increase your productivity too.

## Update

The above example shows how to create a snippet but is actually not a good example. If you want to semi-automate creating Python docstrings in VS Code then I recommend the extension [Python Docstring Formatter](https://marketplace.visualstudio.com/items?itemName=iansan5653.format-python-docstrings).
