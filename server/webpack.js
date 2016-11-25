const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.js');
const webpackCompile = webpack(webpackConfig);

function useWebpackMiddleware(app) {
  app.use(webpackDevMiddleware(webpackCompile, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false,
      'errors-only': true
    }
  }));
  app.use(webpackHotMiddleware(webpackCompile, {
    log: console.log
  }));

  return app;
}

module.exports = useWebpackMiddleware;
