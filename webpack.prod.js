const path = require("path");
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge (common, {
  mode: "production",
  output: {
  /* Without Multi-Entrypoint: */
	/* filename: "main.[contenthash].js", */

  /* With Multi-Entrypoint: */
  filename: "[name].[contenthash].js",
	path: path.resolve(__dirname, "dist"),
  assetModuleFilename: 'assets/[name]-[hash][ext]'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
});
