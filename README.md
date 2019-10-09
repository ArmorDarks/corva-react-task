# Task

<p>
  <a href='https://codecov.io/gh/ArmorDarks/corva-react-task'>
    <img src='https://img.shields.io/codecov/c/github/ArmorDarks/corva-react-task.svg' alt='Code coverage' />
  </a>
  <a href='https://circleci.com/gh/ArmorDarks/corva-react-task'>
    <img src='https://img.shields.io/circleci/build/gh/ArmorDarks/corva-react-task/master.svg?label=circle' alt='CircleCI Build Status' />
  </a>
  <a href='https://david-dm.org/ArmorDarks/corva-react-task'>
    <img src='https://img.shields.io/david/ArmorDarks/corva-react-task.svg' alt='Dependency Status' />
  </a>
  <a href='https://github.com/ArmorDarks/corva-react-task/search?l=typescript'>
    <img src='https://img.shields.io/github/languages/top/ArmorDarks/corva-react-task.svg' alt='Written in TypeScript' />
  </a>
</p>

_**Author's note:** there is no limit to perfection, and since the time is a constraint, that task implementation does not cover all cases, and could use some additional improvement. Due to the time limitations, I did not implement alerts on the threshold, and there are some other things I had to skip. Hopefully, what's been implemented would be enough to evaluate my experience._

_Thank you for your time!_

## Usage

1. Install Node.js.
2. Run `npm install` to install dependencies.
3. Add `.env` file to specify server port:

   ```
   URL=http://localhost
   PORT=3000
   ```

4. Run `npm start` to launch in parallel the server and the app, `npm run storybook` to browser components, `npm test` to run tests.
5. Check [http://localhost:8080](http://localhost:8080) to see the app or [http://localhost:3000](http://localhost:3000) to access the server.

## Architecture

The project follows a mono repository approach which encloses _a server_ and _an application_.

Its structure is a combination of the layered and fractal organization methods.

It implements classical DDD-layered architecture:

![Project architecture](https://user-images.githubusercontent.com/4460311/66270580-092c9f80-e85e-11e9-8cf7-3661bac0c6b2.png)

Every layer can depend only on the lower layer. Dependency should never go in another way.

It's encouraged important to decouple layers as much a possible, and because of that, it's encouraged for layers to depend on abstractions rather on underlining layers directly. That makes testing much easier, as it provides isolated entities, while also helping to isolate the root of the errors if there are any.

Internally, layers could also be layered, but it's encouraged to use fractal structures whenever possible by combining entities not by its type, but rather by a feature they are part of.

### Server

The server is beyond the scope of this task. It was provided as it is and hasn't been changed.

However, it is strongly encouraged to gradually refactor it to use a layered architecture due to the mentioned above benefits.

Besides, because the server implements domain logic, which is the most crucial part of the service, it worth to transit the server into a strongly typed language, as it's easier to express and maintain domain models with it. Otherwise, dynamic validation solutions can be used like `io-ts` or `tcomb`.

### Application

Application's structure mostly dictated by the defined in React ecosystems standards.

It implements mostly classical Flux architecture:

![Application infrastructure](https://user-images.githubusercontent.com/4460311/66271053-527eee00-e862-11e9-9a36-0d07ec83b02b.png)

The store is central storage of the current state. Avoid putting any local state in it — use components state for it.

Common styles are exposed as a common layer due to its global nature. Avoid referencing it inside components. For that use additional, component-related style files.

Any communications with external services are considered infrastructural services and should be treated as a separate layer. Most commonly they should be accessed only through a store module's actions, however, there are rare exceptions when they indeed might belong only to the local state of a specific container. In the last case, ensure that component is depending on an abstract service while providing a real implementation inside containers, which use such components.

It's is strongly encouraged in future to group components, its styles, tests, stories and even related store modules by features, rather by its types. Model feature names following real business cases they solve. It will make a naturally understandable structure.

Each feature should form a standalone layer. As with all layers, avoid direct dependencies between those layers. If something is common, make sure to move it into a common (shared) layer.

### Contracts

Contracts are glue between server and application, the promise that certain entities will be modeled with specified data structures. Both should depend on the same contracts to lower the risks of discrepancies between server data structures and their usage by the application.

Do not rely on contracts as on a source of truth. They intend to help rather than guarantee that the application will always receive responses of the stated shape.

Note that the current server does not use any contracts internally, but it should in the future.

## Stack

That section explains used technical solutions and reasoning behind it. It's doesn't explain techs itself, but it worth adding in the future to make it easier for new developers which aren't that familiar with the JS ecosystem.

The project bootstrapped with a major portion of actual and crucial tech, but it's worth noting that there's good room for improvements.

For instance, it doesn't bootstrap common HTML tags and manifest for rich applications, doesn't add service worker, does nothing about images and other static assets on a premise that it's all beyond the scope of that testing task.

### Server

- `Express`

   Was enforced by the terms of the task

- `Sockets.io`

   Was enforced by the terms of the task

### App

#### Language

- `TypeScript`

   A better way to work with large JS-based codebase.

   Forces better architecture, serves as an effective instrument of expressing models, helps with code reliability, and significantly reduces the cognitive overload of the large and complex projects.

   It requires additional experience from new developers, but considering the complex domain of the company, coupled with large datasets, project complexity increase caused by the TypeScript will pay off in the future.

   The only alternative is Flow, which is safer, was not chosen because of the current state. A small ecosystem means hard to find new developers, and current API changes so often and still not that reliable.

#### Application

- `React`

   Was enforced by the terms of the task, but would be anyway considered as an option alongside with Angular and Vue.js.

   I've opted not to choose to use hooks because did not have enough experience with them yet. However, they should be used in the future because they greatly reduce components complexity.

- `Redux`

   Effective storage, implementing Flux architecture.

   It is reliable, provides exceptional flow control, works with TypeScript, and has an excellent ecosystem which means good community support and easier to find new developers.

   Personal preference and lack of experience with two other popular alternatives, MobX and RxJS, also affected the choice.

   Its worth note that Redux tends to be verbose and exploding into hard-to-maintain codebase within larger projects. To treat it, for now, a better, modules (read: features)-based architecture used.

   Besides, `immutable.js` or `immer` could be used to drastically decrease complexity of the large Reducers, however, that projects do not use them only because there are no such complex scenarios yet.

   In the future, when more complex selectors will appear, `reselect` should be used to treat the lack of any caching within `redux`. Due to the simple nature of the current selectors, it's not used yet.

- `redux-thunk`

   That task doesn't require support of the complex async action, so a primitive, but effective `redux-thunk` is well-enough.

   In fact, even within complex scenarios, it holds quite well in hands of experienced with Promises developers, or backed up by the `async`/`await`.

- `Sass`

   The most popular preprocessor for CSS.

   Sass effectively allows us to build maintainable and properly interlinked CSS and has an excellent ecosystem and thriving community, combined with the author's personal preference and large experience of using it.

   A good portion of its features can be replicated by using modern CSS variables and polyfilling not-well-supported ones with PostCSS, but it has it's own disadvantages: not polyfilled features like CSS variables puts unnecessary load on the Browser renderer, while usage of the PostCSS does not provide a common standard, which Sass encourages.

   The only drawback is the lack of true tree-shaking. In the future, it should be treated by adding `purgecss` PostCSS plugin, which will eliminate unused CSS parts.

   To consider the alternatives, `less` or `stylus` has problems with gaining enough community support, which makes it dangerous to use for the long-running project.

   Alternatively, a CSS-in-JS can be used, or a `css modules`, however, they do not provide many benefits in comparison with CSS + appropriate architecture and methodology.

- `BEM` methodology

   Not a technology itself, it effectively treats issues of bloated and unmaintainable CSS (Sass) by providing an effective way of the encapsulation and separation of concerns.

   `BEM` has many forms. This project uses the one which is mostly like an `ITCSS` methodology, which is based on a `BEM` with a combination of reasonable, decoupled layers.

- `Ekzo`

   A design-free framework that effectively deals with basic resets and provides a means for rapid prototype development.

   Personal preference, on a premise that basic CSS is beyond scope of that task.

- `socket.io-client`

   Enforced by the task constrains.

- `highcharts`

   Company already uses it, so it seems to be logical choice. There are few other popular alternatives, which might be considered too.

#### Code quality

- `Jest`

   The most popular testing library. Out of the box it provides all necessary means for the testing, including code coverage.

   Besides, being so popular and sharing the same API with Jasmine, it makes it easy to find developers who are already familiar with it.

   There are plenty of alternatives, but in truth, there is little reason not to use `Jest` for new projects, unless the team prefers other tests style. For that case, `AVA` or `TAPE` will be a better alternative.

- `Enzyme`

   The only effective way to test React components. Not much to choose from.

- `Storybook`

   Allows to effectively merge the process of the development with a process of design system and components library establishment, while also encouraging the development of isolated components.

- `Standard` (`eslint`)

   As it usually happens, code formatting is a hot topic for any project.

   `Standard` was selected only because it provides reasonable formatting in combination with a series of crucial non-styling checks, which are not covered by the `Prettier` and otherwise require additional setup.

   In a real situation, a formatting tool would be chosen based on a common agreement of the team, be it `standard` modern style, `Prettier`'s, or a conservative `Airbnb`-one.

   Note, that due to existing bug in Standard (eslint) + TypeScript integration every file has to have following statement, otherwise eslint improperly recognizes TypeScript types inside interfaces as unused:

    ```ts
    /* eslint no-unused-vars: "off" */
    /* eslint @typescript-eslint/no-unused-vars: "error" */
    ```

- `Stylelint`

   Today's standard for checking any form of the CSS. There're not alternatives.

- `CircleCI`

   Fast and easy to setup. Personal preference for this project.

#### Bundling

Not many options here, except `Parcel` (still not that popular), `Rollup` (nice, but dev experience not that great), `JSPM 2` (too young to use for production).

TypeScript compiler used in a combination with a Babel to allow adding crucial non-TypeScript futures in the future (like precompiling GraphQL queries).

PostCSS ensures that produced by the Sass code is compatible with all actual browsers (see `browserlist` in `package.json`) and minified. It should be at least improved by adding `purgecss` in the future, to eliminate all unused CSS classes.

- `Webpack`
- `TypeScript compiler`
- `Babel`
- `Autoprefixer` (`PostCSS`)
- `CCSO` (`PostCSS`)

## Development

* `npm start` — start the application and the server.

   Access application via [http://localhost:8080](http://localhost:8080) and the server via [http://localhost:3000](http://localhost:3000).

* `npm run storybook` — launch Storybook for exploring existing components.
* `npm run lint` — run scripts and styles linting.

   Note that it will try to fix all autofixable rules.

* `npm test` — run all tests and collect full coverage report.

   Explore test coverage results at [codecov](https://codecov.io/gh/ArmorDarks/corva-react-task).

   Note that as of right now `src/server` directory is excluded from test coverage because it's out of the scope of this task.

* `npm run test:watch` — run all tests and watch for changes.
* `npm run build` — build the app for the release.

### Requirements

Any additions should stay true to the defined above architecture and requirements.

Any logic should be tested by placing `*.test.ts` file alongside with it. In exceptional cases make sure to leave `it.todo()` inside test files to denote what needs to be tested.

Every component should have alongside with it a `*.test.tsx` file with at least rendering test, `*.stories.tsx` file with at least default state, and optional `*.scss` file with its styles.

Shared logic, or borader tests (like e2e), which do not belong to a specific file or a feature, should be placed into the layer's root `test` directory.
