var webpack = require('webpack');

let config = {
  entry: {
    app: './src/main.js',
    html: './src/index.html'
  },
  output: { //dir doesn't matter because it's all in memory
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      include: './src/components/**/*.js'
    })
  ]
};

require('./apply-css-config')(config);

module.exports = config;