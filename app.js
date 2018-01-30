const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const config = require('./config');

// routing
const cheeseRoutes = require('./routes/cheeses');

if (config.useMorgan) {
  const morgan = require('morgan');
  app.use(morgan('tiny'));
}

app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use('/cheeses', cheeseRoutes);
app.get('*', (req, res) => {
  res.send('404 not found');
});

app.listen(config.port, function () {
  console.log(`Server is listening on port: ${config.port}`);
});

module.exports = app;
