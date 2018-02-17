/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */
const autoprefixer = require("autoprefixer");

module.exports = iP => [
  {
    loader: "css-loader",
    options: {
      sourceMap: !iP,
    },
  }, {
    loader: "postcss-loader",
    options: {
      sourceMap: !iP,
      plugins: () => [
        autoprefixer(),
      ],
    },
  },
];
