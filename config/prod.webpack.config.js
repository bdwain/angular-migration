const webpack = require('webpack');
const path = require('path');

let config = {
  entry: {
    app: ['./src/main.js', './src/index.html']
  },
  output: { 
    path: './dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          extends: path.join(__dirname, './.babelrc')
        }
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false,
      comments: false
    })
  ]
};

require('./apply-common-config.js')(config, true);

module.exports = config;