const checkPosts = require('../frontend/utils/checkPosts');
const { request } = require('graphql-request');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const CronJob = require('cron');

const GRAPHCMS_ENDPOINT =
  'https://api-uswest.graphcms.com/v1/cjvjziu5s627901ehblbcdtu9/master';

const query = `
{
  posts{
    id
    title
    content
  }
}
`;

const getPosts = async () => {
  const { posts } = await request(GRAPHCMS_ENDPOINT, query);

  return posts;
};

new CronJob.CronJob(
  '00 00 06 * * 1-5',
  () => {
    checkPosts(getPosts());
    console.log(`You will see this message every second ${Math.random()}`);
    console.log('ontick', new Date());
  },
  null,
  true,
  'America/Los_Angeles'
);

console.log('Before job instantiation');
const job = new CronJob('00 30 11 * * 1-5', function() {
  const d = new Date();
  console.log('onTick:', d);
});
console.log('After job instantiation');
job.start();

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
