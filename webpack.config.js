var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    javascript: './src/main.js',
    html: './src/index.html'
  },
  output: { 
    path: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loaders: ['react-hot', 'babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};