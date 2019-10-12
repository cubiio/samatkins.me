+++
title = "Udacity React NanoDegree reflections"
date = "2018-03-23"
showDate = true
draft = false
tags = ["programming", "learning", "udacity", "nanodegree", "react", "react-native"]
type = "post"
categories = "Career"
+++

![React.js](/images/react-nanodegree.png)

Image: [React.js Nanodegree](https://eu.udacity.com/course/react-nanodegree--nd019)

I completed my third Udacity Nanodegree in January 2018. This time the subject was React and React Native. It was a very rewarding yet demanding course. I'm glad I did it, learned a lot from completing it, but am glad it's over - I get my evenings and weekends back.

I find it helpful to reflect on what I learned, what worked well and what didn't, to help with my learning in the future. So here are some key reflections on the Nanodegree.

## Match the tool to a need

The first project was a Book reading app called [MyReads](https://github.com/sam-atkins/reactnd-myreads). The lessons and project deliberately specified using only React to manage the app's state. That's right: no Redux. 🙈

Why? To make you understand why you should use Redux, and why you shouldn't. In other words, when is a tool useful, what purpose does it serve? And will my use case be met by using this tool?

So the first project involved passing state down from component to component aka "prop drilling". For the most part, this wasn't an issue, with a couple of exceptions which were a bit painful. It also becomes clear if the app grew in complexity, then something like Redux would be a useful addition to the project's dependencies.

The second project was [Readable](https://github.com/sam-atkins/readable), a reddit type clone, built with React and Redux. This was a more complex app and the project reinforced the message in the lessons on the benefits that Redux would bring to the app.

Over the course of these two projects, the point was made about the benefits (and downsides) to using Redux. Applied more generally to programming, I think this is a useful lesson to make sure it is clear what the requirement is and then to search for the right way to fulfil it.

An important lesson: Learn to know when to use a tool and when not. If it doesn't fit your use case, then don't use it.

## Debugging

I was reading an old blogpost of mine and I read this statement:

> the power of using `console.log()`

Debugging is a skill that I still need to improve on. Bug fixes at work are a necessary part of the job and it's a great feeling when you find and fix a bug.

The React Nanodegree helped me to learn some far more powerful ways of debugging when developing:

* Using the debugger in Virtual Studio Code or Chrome devtools to add breaks in order to step through the code. Understanding the value of a variable at a certain point in time, seeing how and when different functions get called and with what values, is really powerful and an order of magnitude more powerful than the plain old `console.log()`

* Using Redux devtools and Redux logger to see exactly what is going on with the state of the app, when actions and reducers are getting called, and how state is being updated (but not mutated of course)

## Rubber ducking

The Nanodegree provides you with a mentor who is available for weekly check ins, and also ad-hoc questions in between. I found it very helpful to have a mentor. Most of the time I found my interactions with my mentor were rubber ducking.

Rubber duck debugging or rubber ducking is a phrase based on a story in the excellent book The Pragmatic Programmer in which a programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line-by-line, to the duck.

This was a powerful technique for me and really helped on numerous occasions. The process of explaining the issue helped me to understand it better and usually as a result of this I found a solution presented itself.

In addition to that I should add my mentor was extremely knowledgeable and helpful, as well as a good rubber duck listener.

## Learning style and approach

I like the combination of video explanations, complimented with text based learning, solidified by implementing what I've learned during the course lessons. The mentor plus code reviews make this broadly similar in some respects to working professionally as a web developer. I learned a lot and really enjoyed the course.

The downside to the course is it was very time intensive. Udacity are very upfront about the time requirements but with a full time job, and a family life outside of work, the need to study for about 10 hours per week is a large commitment. Now I've completed the course, I can say it was a worthwhile investment, however I will look to study in smaller, bite size chunks for the foreseeable future. 30 minutes a day reading a technical book, or practising with some new code, or building a new little project piece by piece is more manageable and over time should still prove effective.

## Summary

All in all, an excellent course and it has helped to improve my React and React Native skills considerably. In addition, I learned some important broader aspects to being a software engineer which I can apply regardless of the language / library.
