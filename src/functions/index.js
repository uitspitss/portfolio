const functions = require('firebase-functions');
const next = require('next');

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' }});
const handle = app.getRequestHandler();

const config = functions.config();
const sgApikey = config.sendgrid.apikey;
const gmailEmail = config.gmail.email;
console.log(sgApikey);
console.log(gmailEmail);

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: sgApikey,
    },
  }),
);

const send = ({ email, text }) => {
  const from = email;
  const message = {
    from,
    to: gmailEmail,
    subject: `New message from ${from}`,
    text,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info),
    );
  });
};

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.get('*', (req, res) => {
  return handle(req, res);
});
server.post('/api/contact', (req, res) => {
  const { email, text } = req.body;
  console.log(req.body);
  send({ email, text });
  res.send('success');
});

exports.next = functions.https.onRequest(async (req, res) => {
  await app.prepare();
  return server(req, res);
});
