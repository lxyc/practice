const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: resolve("dist"),
		clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  plugins: [new HtmlWebpackPlugin({ title: "Output Management" })],
};
