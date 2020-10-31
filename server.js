
Lealena Befikadu
2:51 PM (0 minutes ago)

to me

// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';
import countries from './public/lab_6/countries.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// app.route('/api')
//   .get((req, res) => {
//     console.log('GET request detected');
//     res.send(`Lab 5 for ${process.env.NAME}`);
//   })
app.route('/api')
  .get(async(req, res) => {
    console.log('GET request detected');
    console.log('fetch request data', data);
  })

  .post(async(req, res) => {
    console.log('POST request detected');
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json();
    res.json(json);
  });

  // .post((req, res) => {
  //   res.json(countries);
  //   console.log('POST request detected');
  //   console.log('Form data in res.body', req.body);
  // });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});