# Task

## Usage

1. Install Node.js.
2. Run `npm install` to install dependencies.
4. Add `.env` file to specify server port:

   ```
   PORT=3000
   ```

5. Run `npm start` to launch in parallel the server and the app.
6. Check [http://localhost:8080/](http://localhost:8080/) to see the app or [http://localhost:8080/](http://localhost:3000/) to access the server.

## Development

* `npm start` — start the application and the server.

   Access application via [http://localhost:8080/](http://localhost:8080/) and the server via [http://localhost:8080/](http://localhost:3000/).

* `npm run lint` — run scripts and styles linting.

   Note that it will try to fix all autofixable rules.

* `npm test` — run all tests and collect full coverage report.
* `npm run test:watch` — run all tests and watch for changes.
* `npm run build:app` — build the app for the release.
