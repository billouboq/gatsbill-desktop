'use strict';

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: path.join(__dirname, '../app/app.js'),
   output: {
      path: path.join(__dirname, '../dist'),
      filename: 'bundle.js'
   },
   module: {
      loaders: [{
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader'
      }]
   },
   plugins: [
      new htmlWebpackPlugin({
         inject: true,
         template: path.join(__dirname, '../app/app.html')
      })
   ]
};
