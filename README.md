# Task

<p>
  <a href='https://codecov.io/gh/armordarks/corva-react-task'>
    <img src='https://img.shields.io/codecov/c/github/armordarks/corva-react-task.svg' alt='Code coverage' />
  </a>
  <a href='https://circleci.com/gh/armordarks/corva-react-task'>
    <img src='https://img.shields.io/circleci/build/gh/armordarks/corva-react-task/master.svg?label=circle' alt='CircleCI Build Status' />
  </a>
  <a href='https://david-dm.org/armordarks/corva-react-task'>
    <img src='https://img.shields.io/david/armordarks/corva-react-task.svg' alt='Dependency Status' />
  </a>
  <a href='https://github.com/armordarks/corva-react-task/search?l=typescript'>
    <img src='https://img.shields.io/github/languages/top/armordarks/corva-react-task.svg' alt='Written in TypeScript' />
  </a>
</p>

## Usage

1. Install Node.js.
2. Run `npm install` to install dependencies.
4. Add `.env` file to specify server port:

   ```
   PORT=3000
   ```

5. Run `npm start` to launch in parallel the server and the app.
6. Check [http://localhost:8080](http://localhost:8080) to see the app or [http://localhost:3000](http://localhost:3000) to access the server.

## Development

* `npm start` — start the application and the server.

   Access application via [http://localhost:8080](http://localhost:8080) and the server via [http://localhost:3000](http://localhost:3000).

* `npm run lint` — run scripts and styles linting.

   Note that it will try to fix all autofixable rules.

* `npm test` — run all tests and collect full coverage report.
* `npm run test:watch` — run all tests and watch for changes.
* `npm run build:app` — build the app for the release.
