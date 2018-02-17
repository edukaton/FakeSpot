# Preact boilerplate
This project is a boilerplate for my React (actually Preact) projects.<br>
(For non Preact boilerplate see https://github.com/bibixx/frontend-boilerplate)

## How to get it to work
### NPM
1. `npm install`
2. `npm start`

And that's it!<br>
There are also 3 more scripts to note:
* `npm run build` – builds your project to production (UglifyJS, PurifyCSS, etc.)
* `npm run monitor` – same as above but also launches [webpackmonitor](https://github.com/webpackmonitor/webpackmonitor)
* `npm run deploy` – deploys app to gh-pages (see: [#deployment](#deployment))

### File structure
```
┌── build        – here is where all webpack files are located
├── dist         – your output after build will be put here
├── src          – all your app files lay here
|   ├── js       – all actual JS lays here
|   ├── sass
|   |   ├── variables.sass – this file will be included into every other so you should (as filename says) put here only variables, mixins, etc.
|   ├── index.js – imports js/app.js (main JS file) and sets up Offline plugin
├── static       – all files from this folder will be copied 1 to 1 to dist folder after compilation
└── tailwind.js  – configuration of tailwind (almost default I have changed only colors to these from https://material.io/guidelines/style/color.html#color-color-palette)
```

## What is included
* Webpack for building
* Webpack-dev-server for development watching
* Preact (+preact-compat)
* Autoprefixer
* [Tailwind CSS](https://tailwindcss.com/)
* Webpack [offline plugin](https://github.com/NekR/offline-plugin) – makes your app work offline
* SASS
* Babel transpiling (stage-0)
* Linting for SASS ([sass-lint](https://github.com/sasstools/sass-lint)) and JS ([ESLint](https://eslint.org/)). Set up mostly according to [Airbnb Style Guide](https://github.com/airbnb/javascript) but with my small changes.
* Browserslist

## Config
In `package.json`:

### Html webpack template
`config` property specifies [html-webpack-template config](https://github.com/jaketrent/html-webpack-template#basic-usage)

### Deployment
To deploy to your repository change `repository` property to resemble your settings. Note the additional `ghbranch` property. It is a name of branch that script will force push every time you launch deploy script.

## Todo
* [ ] Redux
* [ ] More useful blank project
* [ ] Tests
