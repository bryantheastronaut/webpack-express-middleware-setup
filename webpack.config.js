const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: [
      path.join(__dirname,'app','index.js'),
      'webpack-hot-middleware/client',
      'webpack/hot/dev-server'
  ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname,'app'),
        loader:'babel-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/dist/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
