const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.js');
const webpackCompile = webpack(webpackConfig);

const webpackDevConfig = () => webpackDevMiddleware(webpackCompile, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false,
    'errors-only': true
  }
});

const webpackHotConfig = () => webpackHotMiddleware(webpackCompile, {
  log: console.log
});

module.exports = { webpackDevConfig, webpackHotConfig };
