const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = [
  {
    mode: "development",
    entry: "./src/index.ts",
    target: "node",
    devtool: "inline-source-map",
    externals : [webpackNodeExternals()],
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json",
            projectReferences: true
          },
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "index.js",
    },
  },
];
