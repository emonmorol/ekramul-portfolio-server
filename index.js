const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

app.use(cors());
app.use(express.json());

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const sendEmail = nodemailer.createTransport(mg(auth));

app.post("/email", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  sendEmail.sendMail(
    {
      from: email,
      to: "ekramulhasanmorol@gmail.com",
      subject: subject,
      text: message,
    },
    (err, info) => {
      if (err) {
        res.send(err);
      } else {
        res.send(info);
      }
    }
  );
});

app.get("/", (req, res) => {
  res.send("Hi , This is emon morol");
});

app.listen(port, () => {
  console.log(`Server Running @${port}`);
});
