/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */
const webpack = require("webpack");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const cssLoaders = require("./css-loaders");
const common = require("./common");

const { config, iP } = common;

const path = require("path");

module.exports = {
  entry: {
    ...config.entry,
    vendor: [
      // ...config.entry.vendor,
      "webpack/hot/only-dev-server",
      // "webpack-dev-server/client?http://192.168.92.212:8080",
      "webpack-dev-server/client?http://localhost:8080",
    ],
  },

  output: config.output,
  // resolve: config.resolve,

  resolve: {
    modules: [
      path.resolve("./src"),
      path.resolve("./node_modules"),
    ],
  },

  devServer: {
    hot: true,
    overlay: true,
    quiet: true,
    historyApiFallback: true,
    contentBase: `${__dirname}/../static`,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },

  devtool: "#cheap-module-eval-source-map",

  module: {
    rules: [...config.rules, {
      test: /\.s[ca]ss$/,
      use: [{
        loader: "style-loader",
        options: {
          sourceMap: true,
        },
      }].concat(cssLoaders(iP)),
    },
    {
      test: /\.css$/,
      use: [{
        loader: "css-loader",
        options: {
          sourceMap: !iP,
          modules: true,
          importLoaders: 2,
          localIdentName: "[name]__[local]__[hash:base64:5]",
        },
      }],
    }],
  },

  plugins: [
    ...config.plugins,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin(),
  ],
};
