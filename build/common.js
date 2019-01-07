/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */
const packagejson = require("../package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTemplate = require("html-webpack-template");
// const OfflinePlugin = require("offline-plugin");

const path = require("path");
const webpack = require("webpack");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

const iP = process.env.NODE_ENV === "production";

const HtmlWebpackPluginConfig = {
  template: HtmlWebpackTemplate,
  inject: false,
  filename: "index.html",

  ...packagejson.config,
};

module.exports = {
  iP,
  config: {
    entry: {
      app: "./src/index.js",
      vendor: ["babel-polyfill", "react", "react-dom", "react-redux", "redux", "redux-thunk", "history", "offline-plugin/runtime"],
    },

    output: {
      path: path.join(__dirname, "../dist"),
      filename: "[name].[hash].js",
    },

    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },

    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images/",
              name: "[md5:hash:base64:6].[ext]",
            },
          },
        ],
      },
      {
        test: /\.txt$/,
        use: [
          {
            loader: "raw-loader",
          },
        ],
      },
    ],

    plugins: [
      new webpack.DefinePlugin({
        "process.env.VERSION": JSON.stringify(packagejson.version),
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
      new HtmlWebpackPlugin(HtmlWebpackPluginConfig),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
      }),
      // new OfflinePlugin(),
    ],
  },
};
