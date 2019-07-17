const bodyParser = require('body-parser');
const apiRouter = require('./routes');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(apiRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
