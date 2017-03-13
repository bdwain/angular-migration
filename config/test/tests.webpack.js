const webpack = require('webpack');
const path = require('path');

let config = {
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            extends: path.join(__dirname, '../.babelrc'),
            plugins: [
              ["istanbul", {"include" : "src/**/!(*-spec).js"}]
            ]
          }
        }]
      }
    ]
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