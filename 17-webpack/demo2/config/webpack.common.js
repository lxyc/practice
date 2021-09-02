const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const paths = require("./paths");

module.exports = {
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js" || "[name].[contenthash].bundle.js",
    path: paths.appDist,
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: paths.appSrc,
        type: "asset/resource",
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        include: paths.appSrc,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        include: paths.appSrc,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.less$/,
        include: paths.appSrc,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        include: paths.appSrc,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              loader: "tsx",
              target: "es2015",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
    }),
    new ProgressBarPlugin({
      format: "  :msg [:bar] :percent (:elapsed s)",
    }),
  ],
};
