const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

if (dev) require('dotenv').config();

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: process.env.SENDGRID_API,
    },
  }),
);

const send = ({ email, text }) => {
  const from = email;
  const message = {
    from,
    to: 'uitspitss@gmail.com',
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

app.prepare().then(() => {
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

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Read on http://localhost:3000');
  });
});
