const webpack = require('webpack');
const path = require('path');

let config = {
  entry: {
    app: ['./src/main.js', './src/index.html']
  },
  output: { //dir doesn't matter because it's all in memory
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
            extends: path.join(__dirname, '/.babelrc')
          }
        }]        
      },
      {
        test: /index\.html$/,
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
      },
      {
        test: /\.html$/,
        exclude: /index.*\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'img:ng-src', 'object:data', 'link:href', 'a:href']
          }
        }]
      }
    ]
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ]
};

require('./apply-common-config')(config);

module.exports = config;