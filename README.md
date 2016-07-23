# HeartBank Web Application

[![Join the chat at https://gitter.im/heartbank/family.heartbank.org](https://badges.gitter.im/heartbank/family.heartbank.org.svg)](https://gitter.im/heartbank/family.heartbank.org?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [ ![Codeship Status for thonly/family.heartbank.org](https://codeship.com/projects/7d59b3e0-3187-0134-fa73-12b3bc903f34/status?branch=master)](https://codeship.com/projects/164475)

## Requirements

For development, you will only need Node.js installed on your environment.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v5.11.0

    $ npm --version
    3.8.8

---

## Install

    $ git clone https://github.com/HeartBank/family.heartbank.org.git
    $ cd family.heartbank.org
    $ npm install

### JavaScript

- [ESHint](http://eslint.org) is used to prevent JavaScript error.
- [Webpack](https://webpack.github.io) to handle bundling.
- [React](http://facebook.github.io/react) is used for UI.

### CSS

- [autoprefixer](https://github.com/postcss/autoprefixer) is used to write futureproof CSS for CSS vendor prefix under the hood).

### Static server with Hot Reload

The app embed for development a static connect server with hot module replacement plugged.
So each time you start the app, you get automatic component reload in the browser whenever you update a file.

### Redux DevTools
Inspect state, time travel through various actions. Enabled by default for development environments.
- Press `ctrl + h` to toggle DevTools visibility
- press `ctrl + q` to toggle positioning of DevTools

### Initializing the Development Environment
    $ npm startwp
Point to http://localhost:8080

### Initializing the Production Environment
    $ npm run prod
Point to http://localhost:8080

### Build
    $ npm run build
