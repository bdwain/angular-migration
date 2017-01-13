let express = require('express'),
  morgan = require('morgan'),
  app = express(),
  backstreetProdApp = express(),
  argv = require('yargs').argv,
  open = require('open');

app.appName = 'App name';
app.use(morgan('tiny'));
app.blanketPath = 'dist/';
app.use(express.static(app.blanketPath));
app.indexPath = './dist/index.html';

app.use((req, res, next) => {
  if (-1 === req.originalUrl.indexOf('.')) {
    res.sendFile(app.indexPath, {root: __dirname});
  } else {
    next();
  }
});

if(argv.port && typeof argv.port !== 'number'){
  console.log('Invalid port');
  process.exit(1);
}

let port = argv.port || 8081;
app.listen(port, () => {
  console.log(`${app.appName} ----> running on port ${port}`);
  open(`http://localhost:${port}`)
});
