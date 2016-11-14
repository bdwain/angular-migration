const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require('path');

module.exports = function(config, prod = false){
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