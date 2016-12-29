const webpack = require('webpack');
const path = require('path');

const babelSettings = {
  extends: path.join(__dirname, '/.babelrc')
};

let config = {
  entry: {
    app: ['./src/main.js', './src/index.html']
  },
  output: { //dir doesn't matter because it's all in memory
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [`babel?${JSON.stringify(babelSettings)}`, 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loaders: [
          'file-loader?name=[name].[ext]',
          'extract-loader',
          'html-loader?' + JSON.stringify({attrs: ['img:src', 'link:href']})
        ]
      }
    ]
  },
  eslint: {
    configFile: path.join(__dirname, './.eslintrc.json')
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      include: './src/**/*.js'
    })
  ]
};

require('./apply-common-config')(config);

module.exports = config;