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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            extends: path.join(__dirname, './.babelrc')
          }
        }]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href']
            }
          }
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
      sourceMap: false,
      comments: false
    })
  ]
};

require('./apply-common-config.js')(config, true);

module.exports = config;