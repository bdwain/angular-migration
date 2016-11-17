const webpack = require('webpack');
const path = require('path');

let config = {
  entry: {},
  output: {
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          extends: path.join(__dirname, '../.babelrc'),
          plugins: [
            ["istanbul", {"include" : "src/**/!(*-spec).js"}]
          ]
        }
      }
    ],
    loaders: []
  },
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"test"'
      },
    })
  ]
};

require('../apply-common-config')(config);

module.exports = config;