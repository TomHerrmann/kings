const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
