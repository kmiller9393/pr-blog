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
    createdAt
  }
}
`;

const getPosts = async () => {
  const { posts } = await request(GRAPHCMS_ENDPOINT, query);

  return posts;
};

new CronJob.CronJob(
  '00 00 05 * * 1-5',
  // '* * * * * *',
  async () => {
    const newDate = new Date();

    checkPosts(await getPosts(), newDate); //run through posts and send email with updated post(s)
    console.log('ontick', new Date());
  },
  null,
  true,
  'America/Los_Angeles'
);

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
