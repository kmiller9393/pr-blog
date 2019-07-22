const mailgun = require('mailgun-js');

function sendEmail(from, to, subject, text) {
  const data = {
    from,
    to,
    subject,
    text
  };

  const mg = mailgun({
    apiKey: process.env.API_KEY,
    domain: process.env.DOMAIN
  });

  mg.messages().send(data, function(error, body) {
    if (error) console.log(error, error.message);
  });
}

module.exports = sendEmail;
