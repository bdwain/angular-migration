let express = require('express'),
  morgan = require('morgan'),
  app = express(),
  backstreetProdApp = express();

app.appName = 'App name';
app.use(morgan('tiny'));
app.blanketPath = 'dist/';
app.use(express.static(app.blanketPath));
app.use('/dist', express.static('dist/'));
app.indexPath = './dist/index.html';

app.use((req, res, next) => {
  if (-1 === req.originalUrl.indexOf('.')) {
    res.sendFile(app.indexPath, {root: __dirname});
  } else {
    next();
  }
});

let port = 5101;
app.listen(port, () => {
  console.log(`App name ----> running on port ${port}`);
});
