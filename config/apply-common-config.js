const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

function applyCssConfig(config, prod){
  const sassLoaders = [
    `css-loader${!prod ? '?sourceMap' : ''}`,
    'postcss-loader',
    'sass-loader'
  ];

  config.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
  });

  config.sassLoader = {
    includePaths: path.resolve(__dirname, '../src'),
    sourceMap: !prod
  };

  config.postcss = [
    autoprefixer(require('./postcss.json'))
  ];
  
  config.plugins.push(new ExtractTextPlugin('[name].css'));
}


module.exports = function(config, prod = false){
  config.module.loaders.push({
    test: /\.(jpe?g|png|gif|svg|ico)$/i,
    loader: 'file?name=img/[name].[ext]'
  });

  config.resolve = {
    root: path.resolve(__dirname, '../src')
  };

  config.plugins.push(new webpack.ProvidePlugin({
    fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  }));

  applyCssConfig(config, prod);
}