// const webpack = require('webpack')
// const path = require('path')

module.exports = {
  entry: {
    app: ['./src/main.jsx']
  },
  output: {
    filename: 'static/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'es2015']
        }
      }
    }, {
      test: /\.scss$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.png$/,
      use: {
        loader: 'file-loader'
      }
    }]
  }
}
