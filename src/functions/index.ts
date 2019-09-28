import * as functions from 'firebase-functions';
import next from 'next';

import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
const sgTransport = require('nodemailer-sendgrid-transport'); // FIXME: no types (ad hoc)

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } });
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

type MailPayload = {
  email: string;
  text: string;
};

const send = async ({ email, text }: MailPayload) => {
  const from = email;
  const message = {
    from,
    to: gmailEmail,
    subject: `New message from ${from}`,
    text,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(
      message,
      (error: Error | null, info: nodemailer.SentMessageInfo): void =>
        error ? reject(error) : resolve(info),
    );
  });
};

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.get('*', (req: Request, res: Response) => {
  return handle(req, res);
});

server.post('/api/contact', async (req: Request, res: Response) => {
  const { email, text } = req.body;
  const result = await send({ email, text });
  console.log(result);
  return res.sendStatus(200);
});

exports.next = functions
  .region('asia-northeast1')
  .https.onRequest(async (req: Request, res: Response) => {
    await app.prepare();
    return server(req, res);
  });
