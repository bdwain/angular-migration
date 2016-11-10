var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {},
  output: {
    path: '../../dist/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /spec\.js$/],
        loader: 'isparta'
      }
    ]
  },
  isparta: {
    embedSource: true,
    noAutoWrap: true
  },
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    })
  ]
};