const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser');

// app setup
const app = express();
const port = process.env.PORT || 3000;
const index = require('./routes/index');

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// socket setup
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New player connected');
  socket.on('disconnect', () => {
    console.log('A player disconnected');
  });
});

const party = io.of('/party');
party.on('connection', function(socket) {
  console.log('someone joined the party');
  party.emit('hi', 'everyone!');
});
