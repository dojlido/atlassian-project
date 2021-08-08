const path = require("path");

module.exports = {
  mode: "development",
  entry: "./app/js/main.js",
  output: {
    path: path.resolve(__dirname, "app/dist"),
    filename: "main.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/env",
                {
                  targets: {
                    browsers: ["last 2 versions"],
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      },
    ],
  },
  devtool: "cheap-source-map",
  stats: {
    colors: true,
  },
};
