var webpack = require('webpack');

let config = {
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
    ],
    loaders: []
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
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      },
    })
  ]
};

require('../apply-css-config')(config);

module.exports = config;