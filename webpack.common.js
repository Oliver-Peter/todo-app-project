/* variables and code for Includes-Plugin: */
const path = require("path");
const fs = require("fs");
const includePreprocessor = (content, loaderContext) => {
  return content.replace(
    /<include src="(.+)"\s*\/?>(?:<\/include>)?/gi,
    (m, src) => {
      const filePath = path.resolve(loaderContext.context, src);
      loaderContext.dependency(filePath);
      return fs.readFileSync(filePath, 'utf8');
    }
  )
}

const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



const pages = ['index'];

const htmlWebpackPerPage = (page) => {
  return new HTMLWebpackPlugin({
    inject: true,
    template: `./src/${page}.html`,
    filename: `${page}.html`,
    chunks: [page],
  });
};


module.exports = {
  /* Without Multi-Entrypoint */
  /* entry: '/.js/index.js';*/

  /* With Multi-Entrypoint: */
  entry: pages.reduce((config, page) => {
    config[page] = `./src/js/${page}`;
    return config; 
  }, {}),
  plugins: [
    /* Without Multi-Entrypoint: */
/*  new HTMLWebpackPlugin({
    template: "./src/index.html"
  }),
    new CleanWebpackPlugin(),*/

    /* With Multi-Entrypoint: */
    
    new CleanWebpackPlugin()].concat(
      pages.map(htmlWebpackPerPage),
    ),
  module: {
    rules: [

      {
        test: /\.html$/,
        /* Without includes: */
        /* use: ['html-loader'] */

        /* With includes: */
        use: {
          loader: 'html-loader',
          options: {
            preprocessor: includePreprocessor
          },
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
};
