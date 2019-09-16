---
title: "Neighbourhood Map Project"
date: "2017-02-18T10:15:16.408Z"
template: "post"
draft: false
slug: "post/building-map-project/"
category: "programming"
tags:
  - "programming"
  - "javascript"
  - "udacity"
  - "knockoutjs"
  - "api"
description: ""
---

![map project](/media/map_medium.png)

This post relates to a front-end JavaScript and Knockout.js MVVM project, using APIs from Google Maps and Foursquare. The GitHub repo is [here](https://github.com/sam-atkins/fsnd-neighbourhood-map), and a demo is live on [surge.sh](http://cubiio-map.surge.sh/).


## Context
I’m writing about my Neighbourhood Map project for one main reason. It has been a really hard project, and the best way to learn about it is to write about it.

Before I dive into the detail, this blog post is primarily aimed at present and future me. As I mentioned above, it is to help with my learning but also for me to look back on and see how I worked through this project.

If anyone else does read this post and notices any technical JavaScript errors or areas I could improve upon, please let me know. I am passionate about learning and would love to hear from you.


## Design

The key part of this project is to use the Model View ViewModel (MVVM) design paradigm. Part of the rubric stipulated using [Knockout.js](http://knockoutjs.com/), a JavaScript organisational library.

First I had to get my head around how the architecture of the app, using the MVVM paradigm. The rubric from Udacity for the project stated:

> Code is properly separated based upon Knockout best practices (follow an MVVM pattern, avoid updating the DOM manually with jQuery or JS, use observables rather than forcing refreshes manually, etc). **Knockout should not be used to handle the Google Map API.**

My emphasis on the final sentence. This is the part that threw me, although I interpreted it too literally. Knockout should be used to manage the View (UI) and connect to the Model via the ViewModel, but Google Maps API should be used to handle the actual aspects of the map.

My 1:1 session with the Udacity coach helped to put things in perspective, and at this stage, whilst planning is important, over analysis and designing too complex an architecture (for my skill level) is not good. Better to plan, build, get things working, then refactor later as appropriate.

I followed the MVVM design based on the lessons and the mini project (cat clicker) to get up and running.

Then I was into the challenge full on.


## Problems and solutions

This is not an exhaustive list but pulls out some of the key problems I faced and how I solved them.


### Managing Foursquare JSON responses
Resolving the issue where Foursquare does not always have the info for each venue e.g. one venue has a description and a price range, another venue does not. This caused the infowindows to throw errors and not open.

**Solution:**

- A forum post recommended using ‘hasOwnProperty` - [MDN: hasOwnProperty](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- For example:

```javascript
var venues = result.response.hasOwnProperty(“venues”) ? result.response.venues : “”;

if (venues !=  “”) {
  // do something
} else {
  // do something else
}
```


### Allowing a user to filter an array

Ideas and inspiration on how to solve this came from a few sources.

First of all, a blog post by Ryan Niemeyer on [Utility functions in KnockoutJS](http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html). This in particular was the idea behind options to filter an array, combined with `indexOf` (see this from [MDN re Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)).

Secondly, as the first options were not providing a completed solution, in the end, via one of the forum mentors, this link to a [KO Maps example](http://codepen.io/prather-mcs/pen/KpjbNN/left) provided the inspiration I needed.

This gave me ideas on how to solve not just this challenge but also creating a favourites list.  To fully understand it, I picked it apart, studied it, slept on it, and then developed a plan how I could make it work for a user filtered list and also for a favourites list.

#### Plan

In essence, the approach is to create an array, then an observable array based on the original array. The user filter input - from the data-bind `textInput()` - is used to filter the observable array. In short, this is how to create a list which can be filtered by user input but which shows as complete (i.e. has the contents of the original array) if no user input is detected.

The next challenge is to link the filtered list to the rendering of the location markers. The Google Maps API includes `setVisible(bool)` for the location markers. So the logic which determines what is in the observable array then also needs to switch the location marker to `setVisible(true)`.

#### Implementation

I stepped through trying to get my plan to work and encountered a few errors along the way:

**Issue 1: Cannot locate the markers**

Error: `Uncaught TypeError: Cannot read property 'setVisible' of undefined`

So tried to add `this.marker = null;` to my Constructor as the marker was not part of my Model i.e. not in the constructor to add a property when instantiating an object.

**Issue 2: null ain’t it**

Error: `Uncaught TypeError: Cannot read property 'setVisible' of null`

Nope, that’s not quite it although thinking it through, I  still believe I need this object property.

**Issue 3: Need to refactor how I instantiate my objects**

Why? So `locationItem.marker` is available to my `runAttractionFilter` function.

This solved it. It works! 😀 👍

**Solution**

I split out the functions like this:

Create an array, instantiating `new` objects.

Add to this array of objects with further information, using separate functions, crucially without the keyword `new`. In other words, add to the existing objects, do not create “new” objects.

This allows the mirrored observable array to render the list in the html file (via `foreach: arrayName`) and it shows a complete list.

As soon as the user starts to search, the filter is applied via the `databind=“textinput: userFilter”`. In addition, a KO `keyup` event is added to the data-bind so the function managing the observable is run after each keyup.

```javascript
console.log('attractions are below');
console.log(self.attractions);

// search and filter an array based on user input

// set-up empty observable array for visible attractions
self.filteredAttractions = ko.observableArray();

// populate visible attractions array with objects from attractions array
self.attractions.forEach(function(locationItem) {
    self.filteredAttractions.push(locationItem);
});

console.log('filtered Attractions are below');
console.log(self.filteredAttractions());

// set user filter as ko observable
self.userFilter = ko.observable('');

// filter function: updates observableArray and
// sets visibility of location markers
self.runAttractionFilter = function() {
    var searchFilter = self.userFilter().toLowerCase();

    // 1. clear the array
    self.filteredAttractions.removeAll();

    // 2. run the filter and only add to the array if a match
    self.attractions.forEach(function(locationItem) {

        // set marker to false i.e. invisible
        locationItem.marker.setVisible(false);

        if(locationItem.name.toLowerCase().indexOf(searchFilter) !== -1) {
            self.filteredAttractions.push(locationItem);
        }
    });

    // for each item in the array, set visibility to true i.e. visible
    self.filteredAttractions().forEach(function(locationItem) {
        locationItem.marker.setVisible(true);
    });
};
```

### Favourite locations

#### Attempt 1: Using KO Observables

First, I need to plan how to set the object properties and observables.

Add `this.favourite` to my constructor, with a default value `false`.

HTML `data-binds`: In a similar way to the toggle functionality for my responsive menu, I plan to toggle the css styling for the favourite icon.

`this.toggleFav = ko.observable(false);`

When a user clicks on the favourite icon, this will call the function `manageFav()` which will switch `toggleFav` observable from false to true, or true to false.

It will also activate a CSS style to change the icon e.g. from black to yellow.

Then an observable array, originally based on the `attractions` array, will repopulate. Only `truthy` fav observables will be pushed into this new array.

This observable array with `truthy` properties will be used with a `data-bind foreach`to iterate a list in the `index.html` page.

**Issues**

HTML data binds must be in the html file, not in the JavaScript `contentString` used to render the contents of the infowindow.

This is my test. It worked as below but move the html snippet into Javascript i.e. the var `contentString` which informs the rendering of the marker’s infowindow and it doesn’t.

```html
// html file
  <div class="fav">
    <i data-bind="click: favouriteAttractions" class="fa fa-star" aria-hidden="true"></i>
  </div>
```

```javascript
// js file
this.favouriteAttractions = function( {
  console.log('You clicked on the star');
}
```

#### Attempt 2: Using Google Maps API for ‘rightclick’ on the marker

Let’s explore the Google Maps API docs for some insight.

[Google Maps JavaScript API V3 Reference  |  Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/3.exp/reference)

Second best option is to go for a `rightclick` event using the Google Maps API. I don’t like the UX of the right click, although it’s a lot less clunky than a double click which I also tried but it really didn’t work at all.

I ran this to test it:

```javascript
locationItem.marker.addListener('rightclick', function() {
  console.log('right click on marker ' + locationItem.name);
  self.favouriteAttractions(locationItem);

self.favouriteAttractions = function(locationItem) {
  console.log('You want to favourite ' + locationItem.name);
}
```

Then built up the code for a favourites list.

I added favourite to the Constructor with a `falsy` default:

```javascript
this.favourite = false;
```

Then an if statement to toggle truthy to falsy, and vice versa.

Then I built an observable array to store the favourites, which only pushed to this array if `locationItem.favourite == true`.

In the HTML `data-bind` I added a `foreach: favAttractions`.

After some backwards and forwards resolving console errors, I got it working but with one bug.

The array rendered as a list and it duplicated the entries e.g.

I like venue 1; renders venue 1.

Then I like venue 2; renders venue 1, venue 1, venue 2.

Hmmm…

After some experimenting, I realised I needed to clear the array before repopulating with venues where `locationItem = true`.

## Summary

That’s it. Project complete! It feels great to have built something which tested my skills so thoroughly.

My key takeaways from this project are:

1. Plan but do not over plan. Better to have a good plan, then build some code which can be refactored later.
2. Use the power of `console.log()`. It's an invaluable way of determining what is actually going on, if your code is doing what you think it is, and it really helped with my understanding of how my code behaves.
3. Try to keep things simple. Sometimes easier said than done but strive for it nevertheless.
4. Read the docs!
5. Try to solve the problem yourself but after a certain point, ask for help/guidance i.e. someone experienced to point you in the right direction.

Thanks for reading. I hope this proves useful (to future me) to see how I tackled a difficult project.
