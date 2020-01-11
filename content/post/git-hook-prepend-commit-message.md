+++
title = "Git Hook Prepend Commit Message"
description = "Python script to prepend a Jira ID to commit messages"
author = "Sam Atkins"
date = 2020-01-11T16:37:34Z
categories = ["Productivity"]
tags = ["git", "productivity", "python", "script"]
draft = false
type = "post"
+++
At work we have to add the Jira issue number to each pull request, branch and commit. This is to help Management with planning. Unfortunately for me, adding the Jira ID to each commit often broke with my existing workflow or I often just simply forgot to do add it. To remove this as an issue, how about a script to automate prepending the git commit message with the Jira ticket ID?

## Git Hook Script

For the impatient, here's the script.

```python
#!/usr/bin/env python3

"""
Git hook to automatically prefix a git commit message with an issue number
(e.g. Jira ticket number) from the current branch name.
"""

import re
import sys
from subprocess import check_output


commit_msg_filepath = sys.argv[1]
branch = (
    check_output(["git", "symbolic-ref", "--short", "HEAD"]).decode("utf-8").strip()
)
regex = r"(chore|feature|fix|hotfix)\/(\w+-\d+)"

if re.match(regex, branch):
    issue_number = re.match(regex, branch).group(2)
    with open(commit_msg_filepath, "r+") as f:
        commit_msg = f.read()
        f.seek(0, 0)  # correctly positions issue_number when writing commit message
        f.write(f"[{issue_number}] {commit_msg}")
```

First up, the script has some prerequisites and makes some assumptions:

- Requires Python 3
- Git branches follow the convention of using chore, feature, fix or hotfix, a `/` followed by the Jira issue number (e.g. EX-100) and then the "branch name" e.g. `feature/EX-100-example-branch-name`.
- Assumes there are valid branches that do not require this script to run e.g. at work release branches do not contain a Jira ticket ID.

With that out the way, let's walk through the script and see what it does.

The shebang is important because we need to make sure this script executes using Python 3. Per the [Python docs](https://docs.python.org/3/using/unix.html?highlight=shebang#miscellaneous), "a good choice is usually `#!/usr/bin/env python3`".

Next is a docstring to remind myself several months later what this script does. Then the imports required for the script. All imports are from the standard library so no need to pip install anything.

The variable `commit_msg_filepath` is a system argument passed into the script. We use this later on, opening it as a file to write the commit message.

We find the branch name by using [`subprocess.check_output`](https://docs.python.org/3.8/library/subprocess.html#subprocess.check_output)

From the Python docs:

> Run command with arguments and return its output. By default, this function will return the data as encoded bytes.

It runs the git command `git symbolic-ref --short HEAD` and the return is decoded to a string and stripped of whitespace.

The regex pattern for the git branch naming convention is declared as the `regex` variable. This allows the script to extract the Jira ID. This script is lenient so if there is no match, it assumes there is a valid reason for the branch not having a Jira ID. If the regex has a match we enter the `if` block. This is the code which amends the commit message.

The Jira issue number is group 2 in the `match` regex. It opens the commit message as a file and reads in the contents of the file.

`seek()` is an interesting one. If writing a commit message in vim then `seek(0, 0)` places the Jira ID as the first part of the commit message placeholder. Comment out `seek(0, 0)` and you'll see the Jira ID half way down in the git commit message verbiage yet it will still get written as the first part of the commit message. That's because the final line writes the actually git commit message e.g. after you type it, save and exit Vim the message gets written as `[EX-100] example commit message`.

## Using the script

Finally, to make this script work there are two options.

Option one is to add to a single repo or to each repo you want this script to run. This wasn't an option for me as we have many micro-services which I might work on and didn't want to add the script to each repo.

Option two is to point global git config to a directory of your git hooks. This is what I went for and here's how to do it.

### Global Git Hooks

Save the script in a directory where you keep or plan to keep all your global git hooks. Make sure the script is executable `chmod +x prepare-commit-msg`.

Then run this to point the global hooks to your directory:

```bash
git config --global core.hooksPath /path/to/git_hooks
```

Run `cat .gitconfig` to check the output:

```
       │ File: .gitconfig
───────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   1   │ [user]
   2   │     name = Sam Atkins
   ...
   5   │ [core]
   6   │     hooksPath = /path-to/git_hooks
```

## Final thought

Here's a link to the script on [Github](https://github.com/sam-atkins/util-scripts/tree/main/git_hooks). Thanks for reading.
