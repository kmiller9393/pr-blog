const bodyParser = require('body-parser');
const apiRouter = require('./routes');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

let p = path.join(__dirname, '../../dist');

app.use(express.static(p));

app.use(bodyParser.json());

app.use(apiRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
