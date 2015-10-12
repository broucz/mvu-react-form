#mvu-react-form

A predictable form generator that uses **[React](https://facebook.github.io/react/index.html)** and the **Model-View-Update** architecture.

Using **only [stateless function components](https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components)** from React without other dependencies, the whole state of your form is stored in an object tree inside a single store, and lives at the top of your form application.

**This library is a work-in-progress**. Feedback / PR are welcome and encouraged. If you'd like to collaborate on this project, let me know.

[![npm version](https://img.shields.io/npm/v/mvu-react-form.svg?style=flat-square)](https://www.npmjs.com/package/mvu-react-form)

## Installation

To install the latest version:

```
npm install --save mvu-react-form
```

Most likely, you'll may also want to install [the developer tools](https://github.com/broucz/mvu-devtools) which acts as an application enhancer, and so far provides an action logger and a time travel solution.

```
npm install --save-dev mvu-devtools
```

A simple demo is up on [Github Pages](http://broucz.github.io/mvu-react-form-example/).

## Usage

```javascript
import {Form, start} from 'mvu-react-form';

// Define form fields models
const config = {
  fields: [
    {
      type: 'short_text',
      question: 'What is your postal code?',
      description: 'For sure there is something interesting around you!',
      validate: {
        expression: /\d{5}/,
        message: {
          advice: 'Spanish postal code is composed by 5 numbers',
          error: 'Try something like: 08002'
        }
      }
    }
  ]
};

// Create a new form
const form = new Form(config);

start(
  form,
  'root'    // DOM element id where the application will be mounted
);
```
With `mvu-devtools`:
```javascript
import {Form, start} from 'mvu-react-form';
import {devTools} from 'mvu-devtools';

// Define form fields models
const config = {/*...*/};

// Create a new form
const form = new Form(config);

start(
  devTools(form),
  'root'    // DOM element id where the application will be mounted
);
```

## API docs

Since this library is under construction and the current API is minimal, docs will come later when I'll enable additional features such as external modules, validations or style definitions.


**So far, only the `module -> type -> short_text` is available and validation uses JavaScript regex expressions.**

## Motivations

#### Model View Update ?

Popularized by Evan Czaplicki and known as [The Elm Architecture](https://github.com/evancz/elm-architecture-tutorial), the Model-View-Update pattern allows us to *enjoy* a full hierarchical composition that results in a fractal architecture.

Following the amazing job initialized by Dan Abramov with [Redux](https://github.com/rackt/redux) (a state container solution that takes cues from [Elm](elm-lang.org) concepts), I wanted to test this purely functional architecture in JavaScript using React components *(The MVU architecture could particulary fit well with React 0.14 stateless function components inside closed applications that involve user interaction, as a form could be)*.

> You can find a simple but great explanation about it and other unidirectional user interface architectures reading André Staltz [blog post](http://staltz.com/unidirectional-user-interface-architectures.html).

#### Microcomponentization ?

> **The following part is an excerpt of the Andrew Clark's [Recompose library documentation](https://github.com/acdlite/recompose#what-is-microcomponentization-all-about) that explains nicely our concern.**

React 0.14 introduces **[stateless function components](https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components)**, which allow you to express components as pure functions:

```js
const Greeting = props => (
  <p>
    Hello, {props.name}!
  </p>
);
```

Function components have several key advantages:

- They prevent abuse of the `setState()` API, favoring props instead.
- They're simpler, and therefore less error-prone.
- They encourage the smart vs. dumb component pattern.
- They encourage code that is more reusable and modular.
- They discourage giant, complicated components that do too many things.
- In the future, they will allow React to make performance optimizations by avoiding unnecessary checks and memory allocations.

We call the practice of writing small, pure, reusable components **microcomponentization**.

## Todo

...
