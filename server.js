const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

const PORT = process.env.PORT || 8888;

//weback configs
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + '/dist'));

io.on('connection', (socket) => {
  console.log('user signed on');
  socket.on('disconnect', () => {
    console.log('user disconnected')
  });
});

http.listen(PORT, function() {
  console.log('listening on port', PORT);
});
