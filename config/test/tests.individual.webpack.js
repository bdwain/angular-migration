const path = require('path');
const webpack = require('webpack');
const WebpackJasmineHtmlRunnerPlugin = require('webpack-jasmine-html-runner-plugin');

//relative to main dir
module.exports = {
  entry: WebpackJasmineHtmlRunnerPlugin.entry('./src/components/**/*-spec.js'),
  output: {
   path: './spec-output',
   publicPath: '/test/',
   filename: '[name].bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
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
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
     new webpack.SourceMapDevToolPlugin( {
        filename: '[name].bundle.js.map',
        include: './src/components/**/*.js'
     } ),
     new WebpackJasmineHtmlRunnerPlugin( {
        includePaths: ['./node_modules/jasmine-expect-jsx/dist/jasmine-expect-jsx.js'],
        fixupScripts: ['fixup-stacktraces', 'fixup-json-messages']
     } )
  ]
};