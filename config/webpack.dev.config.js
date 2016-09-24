'use strict';

const path = require('path');

module.exports = {
   entry: path.join(__dirname, '../app/app.js'),
   output: {
      path: path.join(__dirname, '../dist'),
      filename: 'bundle.js'
   },
   module: {
      loaders: [
         {
            test: /\.vue$/,
            loader: 'vue'
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         }
      ]
   },
   plugins: []
};
