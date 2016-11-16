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
        exclude: /node_modules/,
        query: {
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