const sendEmail = require('./utils/sendEmail');
const express = require('express');

const router = express.Router();

router.post('/api/contact', async (req, res, next) => {
  try {
    await sendEmail(
      req.body.email,
      process.env.EMAIL_RECEIVER,
      req.body.subject,
      req.body.message
    );
    res.send('Email sent!');
  } catch (err) {
    console.log(err, err.message);
    res.status(500);
  }
});

module.exports = router;
