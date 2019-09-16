---
title: "Python Getters and Setters"
date: "2018-10-08T20:31:40+01:00"
template: "post"
draft: false
slug: "/post/python-getters-setters/"
category: "programming"
tags:
- "programming"
- "python"
description: ""
---
At work recently I had to add some getters and setters to enable user's responses to a question being persisted to the database. A few new things came up so to reinforce my learning, I decided to write this.

## Context

The issue arose when trying to handle a list of the user's answers to a question. Let's say the question was "What sports to do you like?" and the user can answer either one or several of "football, basketball, tennis, rugby, cycling" or just "none of the above".

If the user were to choose football and cycling, a Python list would be part of the client request to the  API.

```python
['football', 'cycling']
```

Trying to persist this list to the database led to an operational error:

```sh
OperationalError: (OperationalError) (1241, 'Operand should contain 1 column(s)')
```

The reason for this error is SQL databases cannot store lists. Relational databases are designed specifically to store one value per row/column combination.

Each value should be stored in its own database column. However due to various business and technical reasons, it was decided this was not the right option in this case.

So this is where getters and setters come in.

## What are getters and setters?

Getters and setters allow you to protect your data by controlling who can do what to the data. For each variable, a get method "gets" the value and the set method "sets" the value.

## Getters and setters example

For my use case, the getters and setters were actually fairly straightforward. Manipulating a string to a  list and back again.

Here's an illustrative example.

```python
class ExampleSportsQuestion(BaseModel):

    _sporting_interests = db.Column("sporting_interests", db.String(150))

    @property
    def sporting_interests(self):
        """
        Get sporting_interests
        """
        if self._sporting_interests is None:
            return []

        return list(self._sporting_interests().split(','))


    @sporting_interests.setter
    def sporting_interests(self, list_sporting_interests):
        """
        Set sporting_interests
        """
        sporting_interests_choices = [
            'football', 'basketball', 'tennis', 'rugby',
            'cycling', 'noneOfTheAbove'
        ]
        for interest in list_sporting_interests:
            if interest not in sporting_interests_choices:
                raise AttributeError(f'Invalid value {interest} for '
                                     '_sporting_interests property')

        string_sporting_interests = ','.join(list_sporting_interests)
        self._sporting_interests = string_sporting_interests
```

The getter in this example creates a list, splitting the string using a `,` comma as a delimiter.

```python
# starting point is this string which is the value persisted in the database column
"football,cycling"

# the getter transforms it to a list
['football', 'cycling']
```

If the database entry is None then defensively the getter returns an empty `[]` list.

The setter checks the user's answers are in the available choices and if not, raises an error. If the answers are all valid, the list is converted to a string with each answer separated by a `,` comma.

```python
# the setter does the reverse, it takes the list provided by the client
['football', 'cycling']

# and transforms to a string to be persisted in the database
"football,cycling"
```

And that's it. Along with some unit tests, this provided the solution and was ready for code review.

It was useful to go through the process of exploring this topic, reading about relationship databases and normalisation, possible use cases for getters and setters, and how to implement Python getters and setters. Writing this up in a blogpost has helped to solidify my learning, and I look forward to reading this again sometime in the future to see how much I've learned since this was written and how much I agree/disagree with it 😁.
