const express = require('express');
const router = require('./routes.js');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/app', router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});