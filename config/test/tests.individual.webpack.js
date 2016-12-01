const webpack = require('webpack');
const WebpackJasmineHtmlRunnerPlugin = require('webpack-jasmine-html-runner-plugin');
const path = require('path');

let config = {
  entry: WebpackJasmineHtmlRunnerPlugin.entry('./src/**/*-spec.js'),
  output: {
   path: '/',
   publicPath: '/',
   filename: '[name].bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          extends: path.join(__dirname, '../.babelrc')
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
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"test"'
      },
    }),
    new webpack.SourceMapDevToolPlugin( {
      filename: '[name].bundle.js.map',
      include: './src/**/*.js',
      exclude: './src/*.js'
    }),
    new WebpackJasmineHtmlRunnerPlugin( {
      includePaths: ['./node_modules/jasmine-expect-jsx/dist/jasmine-expect-jsx.js',
                     './node_modules/babel-polyfill/dist/polyfill.js'
      ],
      fixupScripts: ['fixup-stacktraces', 'fixup-json-messages']
    })
  ]
};

require('../apply-common-config')(config);

module.exports = config;