const webpack = require('webpack');
const WebpackJasmineHtmlRunnerPlugin = require('webpack-jasmine-html-runner-plugin');

let config = {
  entry: WebpackJasmineHtmlRunnerPlugin.entry('./src/components/**/*-spec.js'),
  output: {
   path: '/',
   publicPath: '/',
   filename: '[name].bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
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
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      },
    }),
    new webpack.SourceMapDevToolPlugin( {
      filename: '[name].bundle.js.map',
      include: './src/components/**/*.js'
    }),
    new WebpackJasmineHtmlRunnerPlugin( {
      includePaths: ['./node_modules/jasmine-expect-jsx/dist/jasmine-expect-jsx.js'],
      fixupScripts: ['fixup-stacktraces', 'fixup-json-messages']
    })
  ]
};

require('../apply-css-config')(config);

module.exports = config;