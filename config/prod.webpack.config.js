let webpack = require('webpack');

let config = {
  entry: {
    app:[ './src/main.js'],
  },
  output: { 
    path: './dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
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

require('./apply-css-config.js')(config, true);

module.exports = config;