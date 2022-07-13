const path = require("path");
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const pages = ['index'];


module.exports = merge (common, {
  
  mode: "development",
  output: {
  /* Without Multi-Entrypoint */
	/* filename: "main.js", */

  /* With Mulit-Entrypoint: */
  filename: "[name].js",
	path: path.resolve(__dirname, "dist"),
  assetModuleFilename: 'assets/[name][ext]'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  }
});
