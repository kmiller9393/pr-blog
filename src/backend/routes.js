const express = require('express');
const mailgun = require('mailgun-js');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json('World');
});

function sendEmail(senderEmail, receiverEmail, subject, feedback) {
  const data = {
    from: senderEmail,
    to: receiverEmail,
    subject,
    text: feedback
  };

  const mg = mailgun({
    apiKey: 'ea4ee815b6abac63082a87b2319341c8-2b0eef4c-ba19fc6b',
    domain: 'sandboxe541cb548c3e41fe8ab3a7c16b600fdb.mailgun.org'
  });

  mg.messages().send(data, function(error, body) {
    console.log(body);

    if (error) console.log(error, error.message);
  });
}

router.post('/api/contact', async (req, res, next) => {
  try {
    await sendEmail(
      'kmiller9393@gmail.com',
      'kmiller9393@gmail.com',
      'HERE IS THE SUBJECT',
      'the body of text here'
    );
    res.send('Email sent!');
  } catch (err) {
    console.log(err, err.message);
    res.status(500);
  }
});

module.exports = router;
