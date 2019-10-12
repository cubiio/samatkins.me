+++
title = 'Converting a React App to TypeScript'
date = '2018-04-20'
showDate = true
draft = false
categories = ["Front End"]
tags = ['programming', 'react', 'typescript']
type = "post"
+++

![TypeScript](/images/i_heart_typescript.png)

Learning some TypeScript has been on my to do list for sometime. I finally found some time and started by reading the docs to get familiar with it. The next step to really help learn it was to actually use it for a project so I decided to convert an existing React app to use TypeScript. This blogpost is a guide on how I did exactly that.

First up: Wow, developing with TypeScript is amazing. Most definitely `#iHeartTypeScript` !

And now let's get started.

## First things first: React app with TypeScript configuration

To make things simpler I used `create-react-app` with TypeScript flags in order to scaffold a React app with a TypeScript config. My thought process was I could this config in my existing React app and it abstracts away the whole Webpack configuration (another thing on my learning list by the way).

This is the command to run to get a TypeScript React app:

```bash
npx create-react-app TypeScript-app --scripts-version=react-scripts-ts
```


This is basically a fork of `create-react-app`: https://github.com/wmonk/create-react-app-TypeScript

### Configuration

Now I had a TypeScript config, I used this in my existing React app as a first step to converting it.

First up I created a new git branch `git checkout -b convert-to-TypeScript`for my work. Now I could replace the React app config with the TypeScript config, and work through the errors until the app compiles:

- copy over all the ts files e.g. `tsconfig.json`
- copy over the scripts and dependencies into `package.json`

I can't live without Prettier code formatting so to get Prettier to live happily with TSLint formatting I will add the TSLint-Config-Prettier package like this`yarn add tslint-config-prettier --dev`

And add a `.prettierrc` file so Prettier formatting is aligned to TypeScript linting.

```yaml
// .prettierrc.yaml

parser: TypeScript
singleQuote: true
trailingComma: all
semi: true
```


And for complete sanity, I deleted the node modules then installed all dependencies again with `yarn install` to make sure everything is installed as it should be.

## Get the app to compile

With the config in place, it was time to try running the app and see what happened i.e. what errors I would get.

So `yarn start` and let the fun begin.

### Missing index.tsx

```
Failed to load tsconfig.json: Missing baseUrl in compilerOptions
Could not find a required file.
  Name: index.tsx
```

This was two different errors. The second about the "required file" was a simple fix. TypeScript was looking for a TypeScript file as an entry point i.e. file `index.tsx`. I changed the existing entry point `index.js` to `index.tsx`.

For the other error, it seems the config I copied over was not quite right so I added the missing baseurl in compiler options in `tsconfig.json` like this:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
  }
}
```


### No default export

The error read:

```
// path shortened for brevity purposes:
(3,8): Module '"... /myreads/node_modules/@types/react/index"' has no default export.
```

This was a common issue across multiple files. The fix was straightforward in terms of syntax:

`import React from 'react';` needs to be `import * as React from 'react';` and then fix how the class is declared `class BooksApp extends React.Component` instead of `class BooksApp extends Component`.

In addition, in the same file I had `import ReactDOM from 'react-dom';` which needs to be `import * as ReactDOM from 'react-dom';`

Now the harder part. Why was this an issue for TypeScript? And how did the fix work?

After some research, here's what I learned. The React package (and many other packages) don't actually have a default export. Instead they have named exports. So why doesn't this work with TypeScript? Basically it's a difference between how Babel and TypeScript handle this. Babel is used by `create-react-app` to compile the JavaScript and it creates a synthetic default export from all of the named exports, whereas TypeScript doesn't follow this approach.

So in TypeScript you need to import everything and then use the named export when required. For example, to use the React Component named export you would do this:

```javascript
import * as React from 'react';

class BooksApp extends React.Component {
  // ... snip
}
```


## Convert to Types

OK, good progress made because the app compiled but other than the config and the entry point `index.tsx` there was no TypeScript in sight. Next step then was to convert the next JavaScript file to a TypeScript file and after the entry point, the first component is `App.js`.

I changed the filename `App.js` to `App.tsx`, restarted my development server (`yarn start`) and started working on fixing the `type` errors.

A side note, as part of my development process, in `tsconfig.json` I sometimes toggled the setting `"noImplicitAny": false,` between true and false. This was to allow/disallow `any` types in order to check what needs type checking versus getting the App to compile. The aim is to have this set to `true` for complete type checking but it's sometimes useful to have the app compile and check how things are working before going back to check `any` types.

### Convert App.tsx

The first type error was the books array on my state object:

```javascript{numberLines: true}
... /myreads/src/App.tsx
(17,17): Parameter 'book' implicitly has an 'any' type.

// code:
state: = {
  books: [],
}
```

To fix this I added an interface to set the contract for state should look like. I set both the books and shelves array as optional i.e. `?` denotes optional. The reason for making this optional is the initial state is empty until the component has mounted, i.e. the API returns data.

```javascript{numberLines: true}
// file: /myreads/src/interfaces/stateProps.ts

export interface StateProps {
  books?: object[];
  shelves?: object[];
}
```

In addition, I created an interface for the book object:

```javascript{numberLines: true}
// file: /myreads/src/interfaces/bookObject.ts

export interface BookObject {
  allowAnonLogging: boolean;
  authors: string[];
  averageRating: number;
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  id: string;
  imageLinks: {
    smallThumbnail: string,
    thumbnail: string,
  };
  industryIdentifiers: [
    {
      type: string,
      identifier: string,
    },
    {
      type: string,
      identifier: string,
    },
  ];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary?: {
    containsEpubBubbles: boolean,
    containsImageBubbles: boolean,
  };
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  ratingsCount: number;
  readingModes: {
    text: boolean,
    image: boolean,
  };
  shelf: string;
  subtitle: string;
  title: string;
}
```

and used it like this:

```javascript{numberLines: true}
updateBook = (book: BookObject, shelf: string) => {
  // snip
};
```

The next compile error was this:

```javascript{numberLines: true}
/myreads/src/App.tsx
(72,11): Value must be set for boolean attributes
```

The `<Route />` component takes prop `exact` to match an exact url path. Before the return statement, I declared `exact` as a constant and set the type to a bool like this: `const exact: boolean = true;` and then as before pass in `exact={exact}` to the component.

The next error related to my method to update books and the args passed into it. Here's the error and how I fixed it:

```javascript{numberLines: true}
// error
/myreads/src/App.tsx
(74,30): Parameter 'shelf' implicitly has an 'any' type.

// Update code to fix the error
onUpdateBook={(shelf: string, book: BookObject) => {
  this.updateBook(book, shelf);
}}
```

💥 BOOM 💥

App.tsx fully converted to TypeScript! A small celebration and then I continued converting other files to TypeScript.

### Converting a .js to a .ts file

In other words, `utils/BooksAPI.js` to `utils/BooksAPI.ts`.

Next up I took on a straight JavaScript to TypeScript conversion with no JSX. Converting this file involved stating the types for the args to each of the functions. I also re-used the BookObject interface:

```javascript{numberLines: true}
// after
export const update = (book: BookObject, shelf: string) =>

export const update = (book: BookObject, shelf: string) =>

export const search = (query: string, maxResults: number) =>
```

### String or array of string types?

This demonstrates the usefulness of TypeScript.

The compile error was this:

```javascript{numberLines: true}
/myreads/src/containers/Book/Book.tsx
(15,31): Parameter 'writers' implicitly has an 'any' type.
```

OK, easy I thought and added a string type. Wrong! But the error messages are so helpful!

```javascript{numberLines: true}
index.js:2177 /myreads/src/containers/Book/Book.tsx
(19,42): Property 'join' does not exist on type 'string'.
```

So of course it's not a string, it's an array of string types. I corrected the code like this:

```javascript{numberLines: true}
const formattedAuthorStr = (writers: string[]) => {
  if (writers === undefined) {
    return writers;
  }
  return writers.length >= 2 ? writers.join(', ') : writers;
};
```

### Synthetic Events

Parameter 'e' implicitly has an 'any' type.

```javascript{numberLines: true}
const handleMoveBook = e => {
  const selectedBook = props.book;
  const selectedShelf = e.target.value;
  onUpdateBook(selectedBook, selectedShelf);
};
```

My solution:

```javascript{numberLines: true}
interface MoveBookEvent {
  target: {
    value: string,
  };
}

const handleMoveBook = (e: MoveBookEvent) => {};
```

And then two other interfaces to manage the props in the component. The first for what is passed into to the component, and the second for managing props which are passed back up to update a book when moving it between bookshelves.

```javascript{numberLines: true}
interface BookProps {
  authors: string[];
  shelf: string;
  title: string;
}

interface BookComponentProps {
  book: {
    authors: string[],
    shelf: string,
    title: string,
  };
  bookImgUrl?: string;
  onUpdateBook(book: BookProps, shelf: string): void;
}

// usage
const Book = (props: BookComponentProps) => {};
```

### SearchPage Component

This was an interesting compile error. This was the first Class I was dealing with and so it was a little different from some of the other stuff I'd looked at.

The TypeScript compile error was this:

```javascript{numberLines: true}
/myreads/src/App.tsx
(76,15): Property 'books' does not exist on type 'IntrinsicAttributes &
IntrinsicClassAttributes<SearchPage> & Readonly<{ children?: ReactNode; }> ...'.
```

After a bit of searching and docs reading I found a few things that helped to solve the issue.

First up, from the TypeScript docs re generics and generic classes:

> A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.

Next, a React class requires a generic class in the form of `<props, state>`. Within each of these generic classes, you state the types. In the end I used interfaces for props and state which I added next to the class like this `React.Component<SearchPageProps, SearchPageState>`

The full example is here:

```javascript{numberLines: true}
interface SearchPageProps {
  books: BookObject[];
  onUpdateBook(book: BookProps, shelf: string): void;
  onSelectSearchPage(): void;
}

interface SearchPageState {
  error: boolean;
  userSearch: string;
  updatedSearchResults: string[];
}

class SearchPage extends React.Component<SearchPageProps, SearchPageState> {
  // snip
}
```

This resolved the type compile errors.

### Node Module React-Debounce-Input 'placeholder' text

This one puzzled me for a few hours late one evening. In the end, I shut down my laptop and went to bed. In the morning, a possible solution came to me whilst I was having breakfast.

Key lesson here: **don't code when tired**, take a break and get plenty of good sleep.

So the error that caused me so many problems was this:

```javascript{numberLines: true}
Property 'placeholder' does not exist on type 'IntrinsicAttributes &
IntrinsicClassAttributes<Component<ThemedOuterStyledProps<WithOptionalTheme...'.
```

It's on a node module `react-debounce-input` used as part of the search functionality. Here is the code as used in the `SearchPage.tsx` component.

```javascript{numberLines: true}
<Styles.SearchBooksBarInput
  minLength={2}
  debounceTimeout={300}
  onChange={e => handleUserSearch(e)}
  // the line below was causing the TypeScript error
  placeholder="Search by title or author"
  value={this.state.userSearch}
/>
```

The solution was to add to this line `readonly placeholder?: string | number;` in this file `node_modules/react-debounce-input/src/index.d.ts`:

```javascript{numberLines: true}
export type DebounceInputProps<
  WrappedComponent,
  WrappedComponentProps
> = WrappedComponentProps & {
  readonly element?:
    | string
    | React.ComponentType<PropConstraints<WrappedComponent>>;
  readonly type?: string;
  readonly onChange: React.ChangeEventHandler<WrappedComponent>;
  readonly onKeyDown?: React.KeyboardEventHandler<WrappedComponent>;
  readonly onBlur?: React.FocusEventHandler<WrappedComponent>;
  readonly value?: string | number;

  // new type added on the line below
  readonly placeholder?: string | number;

  readonly minLength?: number;
  readonly debounceTimeout?: number;
  readonly forceNotifyByEnter?: boolean;
  readonly forceNotifyOnBlur?: boolean;
  readonly inputRef?: React.Ref<WrappedComponent>;
};
```

This fixed the TypeScript compile error because previously TypeScript was looking for the property `placeholder` on the object and couldn't find it.

Having fixed it in the dependency, I wasn't then sure how to keep my changes. I found a good answer on Stack Overflow:

> 1.  Send a PR to the actual npm package, if the change is like a bug fix or enhancement that aligns with the actual packages goal.
> 2.  Fork the package repo, and make changes and use it in your project as a dependency, in case you are adding changes that does not align with the goals of the actual package
> 3.  Move the package code into your source code, and use it as source code rather than a package from npm

I decided to try out option 1 first and see what happened. I opened a PR to the repo... and it was quickly accepted and merged.

![PR merged](/images/pr_ts_debounce.png)

By the way, that was my first code contribution to an open source project. 🏆

## Other stuff

### Using console.log

As part of my development process, I wanted to use `console.log()` but this causes TypeScript to fail to compile due to a TSLint error. Rather than change the config and then potentially make git commits with console logs still in the code, I opted for this instead to temporarily disable TSLint:

```javascript{numberLines: true}
/* tslint:disable */
console.log(this.state);
/* tslint:enable */
```

### VS Code config

Finally, some thoughts on using VS Code with TypeScript.

One recommended config change is to set this setting to true in your user settings:

`"TypeScript.implementationsCodeLens.enabled": true,`

This means you'll see the number of implementation of your interfaces in your code e.g.

![VS Code and TypeScript integration example 1](/images/vs_code_ide_example1.png)
![VS Code and TypeScript integration example 2](/images/vs_code_ide_example2.png)

TypeScript and VS Code really play well together, as you would expect, I mean VS Code is written in TypeScript. VS Code becomes even more IDE like and it's really productive to work with TypeScript in VS Code. I'm a huge fan of both.

## Summary

To conclude, using TypeScript is a fantastic development experience and it achieves this by:

- boosting my developer productivity, and
- improving even further VS Code's capabilities

It was good fun converting my React app to using TypeScript. When I find time I will convert some other React apps to use TypeScript.

Next up, convincing the team at work to use TypeScript! 😏
