/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const WebpackMonitor = require("webpack-monitor");
const PurifyCSSPlugin = require("purifycss-webpack");

const glob = require("glob");
const path = require("path");

const cssLoaders = require("./css-loaders");
const common = require("./common");

const { config, iP } = common;

const ExtractSASSConfig = {
  filename: "style.[hash].css",
};
const ExtractSASS = new ExtractTextPlugin(ExtractSASSConfig);

const webpackConfig = {
  entry: config.entry,

  output: config.output,
  resolve: config.resolve,

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
    new UglifyJSPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    ExtractSASS,
    new CopyWebpackPlugin([
      { context: "./static", from: "**/*", to: "./" },
    ]),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, "../src/js/**/*.js")),
    }),
  ],
};

if (process.env.MONITOR === "true") {
  webpackConfig.plugins.push(
    new WebpackMonitor({
      capture: true,
      target: "../monitor/stats.json",
      launch: true,
      port: 3030,
    }),
  );
}

module.exports = webpackConfig;
