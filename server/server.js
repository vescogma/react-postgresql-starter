const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const routes = require('./routes');
const webpack = require('./webpack');

// routing
app.use('/api/v1', routes);

// file path
const distPath = path.join(__dirname, '../dist');
const indexFileName = 'index.html';

// serve files (webpack for dev, dist for production)
if (process.env.NODE_ENV !== 'production') {
  const wpMiddleware = webpack.webpackDevConfig();
  app.use(wpMiddleware);
  app.use(webpack.webpackHotConfig());
  app.get('*', (req, res) => {
    res.write(wpMiddleware.fileSystem.readFileSync(path.join(distPath, indexFileName)));
    res.end();
  });
} else {
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, indexFileName))
  });
}

// start it up
app.listen(PORT, (err) => {
  if (err) {
    return;
  }
});
