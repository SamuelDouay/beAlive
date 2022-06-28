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
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json",
            projectReferences: true
          },
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "index.js",
    },
  },
];
