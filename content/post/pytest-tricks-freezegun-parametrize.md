---
title: "Pytest Tricks: Freezegun and Parametrize"
date: 2018-11-05T18:48:08Z
draft: true
---

I always try to work following Test Driven Development. I recently used Pytest to write some unit tests and discovered a couple of neat tricks from a work colleague.

## Context

I needed to write a function which determined if a user's account had been created within a specified time window. The function returns a boolean i.e. true if the account was created within the time window and false otherwise.

Here's a function I wrote (amended to remove any work sensitive information):

```python
from datetime import datetime, timedelta

TIME_WINDOW_DURATION = timedelta(minutes=30)


def _check_if_user_created_in_time_window(self, account_creation):
    """
    If the user's account creation time falls within this time window,
    return True

    Parameters
    ----------
        account_creation: timestamp
            Timestamp of when user's account was created

    Returns
    -------
    bool
        True if tag to be applied, False otherwise
    """
    account_creation_datetime = self._cast_datetime_string_to_datetime_type(
        account_creation)
    now = datetime.utcnow()
    user_gets_tag = (now - TIME_WINDOW_DURATION <=
                        account_creation_datetime <= now)
    return user_gets_tag
```

## Writing tests

Writing tests when you have to match against a timestamp is tricky because it could create fragile tests. In other words, a test that may or may not pass, and the pass or failure does not tell you if it is the code failing or because the timestamps do not match.

So the first tip is to use `freezegun`. This allows you to effectively set the date and time when the system is under test so you can make assertions against the function.

Here's an example of this in practice:

```python
@freeze_time("2018-09-07 16:35:00")
def test_user_created_in_time_window_returns_true(client):
    example_manager = Example()
    account_creation = "2018-09-07 16:05:01"

    user_gets_tag = example_manager._check_if_user_created_in_time_window(
        account_creation)
    assert user_gets_tag
```

The freeze_time decorator sets the system under test date time as `2018-09-07 16:35:00` so when we assert an account creation time of `2018-09-07 16:05:01` it falls within the time window of 30 minutes i.e. evaluates to true.

As you would expect, I wanted to make different assertions based on different frozen times and so wrote another test like the above but with a different date time passed in as the argument to the decorator. That's all well and good as it tests the code but it goes against the DRY (don't repeat yourself) principle.

So here's the second trick I learned:

```python
@pytest.mark.parametrize("account_creation",
                         ["2018-09-07 16:34:00", "2018-09-07 16:05:01"])
@freeze_time("2018-09-07 16:35:00")
def test_user_created_in_time_window_returns_true(client, account_creation):
    example_manager = Example()

    user_gets_tag = example_manager._check_if_user_created_in_time_window(
        account_creation)
    assert user_gets_tag
```

Pytest - per the [docs](https://docs.pytest.org/en/latest/parametrize.html#more-examples) - "enables parametrization of arguments for a test function". So how does this work?

Like freeze time, you wrap the unit test with a decorator which takes two arguments. The first is a string which is the name of the argument. This should also be passed in as an argument to the test function. The second argument is a list of the parameters. In the example above, I've added two different date time strings as parameters. This means when the test runs, it will run twice, using the first parameter and then the second. This keeps the code DRY whilst allowing multiple assertions. What's also neat is when you run the tests with verbosity `pytest -vv` the output displays the test being run along with the parameter used. The unit test above displays:

```bash
test_example.py::test_user_created_in_time_window_returns_true[2018-09-07 16:34:00] PASSED
test_example.py::test_user_created_in_time_window_returns_true[2018-09-07 16:05:01] PASSED
```

Two nice tips to help write good unit tests and keep the code DRY.
