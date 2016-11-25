const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const routes = require('./routes');
const webpackMiddleware = require('./webpack');

app.use('/api/v1', routes);

const distPath = path.join(__dirname, '../dist');
const indexFileName = 'index.html';

if (process.env.NODE_ENV !== 'production') {
  webpackMiddleware(app);
}

app.use(express.static(distPath));
app.get('*', (req, res) => res.sendFile(path.join(distPath, indexFileName)));

app.listen(PORT, (err) => {
  if (err) {
    return;
  }
});
