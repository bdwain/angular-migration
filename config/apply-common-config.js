const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const nodeSassGlobbing = require('node-sass-globbing');

function applyCssConfig(config, prod){
  config.module.rules.push({
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMaps: !prod,
            minimize: prod
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              autoprefixer(require('./autoprefixer.json'))
            ]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMaps: !prod,
            includePaths: [
              path.resolve(__dirname, '../src')
            ],
            importer: nodeSassGlobbing
          }
        }
      ]
    })
  });

  config.plugins.push(new ExtractTextPlugin('[name].css'));
}

module.exports = function(config, prod = false){
  config.module.rules.push({
    test: /\.(jpe?g|png|gif|svg|ico)$/i,
    exclude: /favicon\.ico$/,
    //this embeds images less than 5kb as base64 in the js
    //change limit to 1 to not embed anything (or just switch to file loader)
    use: [{
      loader: 'url-loader',
      options: {
        limit: 5000,
        name: 'img/[name].[ext]'
      }
    }]
  });

  config.module.rules.push({
    test: /favicon\.ico$/i,
    use: [{
      loader: 'file-loader',
      options: {
        name: 'img/favicon.ico'
      }
    }]
  });

  config.module.rules.push({
    test: /\.(eot|ttf|woff|otf)$/i,
    //same thing as the img loader but for fonts
    use: [{
      loader: 'url-loader',
      options: {
        limit: 5000,
        name: 'fonts/[name].[ext]'
      }
    }]
  });


  config.resolve = {
    modules: [path.resolve(__dirname, "../src"), "node_modules"]
  };

  applyCssConfig(config, prod);
}