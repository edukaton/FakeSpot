/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const nested = require("postcss-nested");

module.exports = iP => [
  {
    loader: "css-loader",
    options: {
      sourceMap: !iP,
      modules: true,
      importLoaders: 2,
      localIdentName: "[name]__[local]__[hash:base64:5]",
    },
  }, {
    loader: "postcss-loader",
    options: {
      sourceMap: !iP,
      plugins: () => [
        autoprefixer(),
        tailwindcss("./tailwind.js"),
        nested,
      ],
    },
  }, {
    loader: "sass-loader",
    options: {
      sourceMap: !iP,
      data: "@import 'src/sass/variables'",
    },
  },
];
