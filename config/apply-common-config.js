const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const nodeSassGlobbing = require('node-sass-globbing');

function applyCssConfig(config, prod){
  const sassLoaders = [
    `css-loader${!prod ? '?sourceMap' : ''}`,
    'postcss-loader',
    `sass-loader${!prod ? '?sourceMap' : ''}`
  ];

  config.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
  });

  config.sassLoader = {
    includePaths: path.resolve(__dirname, '../src'),
    sourceMap: !prod,
    importer: nodeSassGlobbing
  };

  config.postcss = [
    autoprefixer(require('./autoprefixer.json'))
  ];
  
  config.plugins.push(new ExtractTextPlugin('[name].css'));
}


module.exports = function(config, prod = false){
  config.module.loaders.push({
    test: /\.(jpe?g|png|gif|svg|ico)$/i,
    //this embeds images less than 5kb as base64 in the js
    //change limit to 1 to not embed anything (or just switch to file loader)
    loader: 'url?limit=5000&name=img/[name].[ext]'
  });

  config.module.loaders.push({
    test: /\.(eot|ttf|woff|otf)$/i,
    //same thing as the img loader but for fonts
    loader: 'url?limit=5000&name=fonts/[name].[ext]'
  });


  config.resolve = {
    root: path.resolve(__dirname, '../src')
  };

  config.plugins.push(new webpack.ProvidePlugin({
    fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  }));

  applyCssConfig(config, prod);
}