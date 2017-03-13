const webpack = require('webpack');
const path = require('path');

let config = {
  entry: './src/**/*-spec.js',
  output: {
   path: '/',
   publicPath: '/',
   filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            extends: path.join(__dirname, '../.babelrc')
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
  sambac: {
    includePaths: ['./node_modules/jasmine-expect-jsx/dist/jasmine-expect-jsx.js',
                   './node_modules/babel-polyfill/dist/polyfill.min.js'
    ],
  },
  devtool: '#inline-source-map',
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