const express = require('express');
const data = require('./data');
const app = express();
const port = 3000;

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.get('/data', (_, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
