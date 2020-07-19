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

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.get('*', (req, res) => {
  res.status(404).send('Something broke!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// socket setup
const io = socketIO(server);

let players = 0;
io.on('connection', (socket) => {
  players++;
  console.log('New player connected - players:', players);

  socket.on('createParty', async (newPartyData) => {
    const { partyCode, partyName } = await newPartyData;

    socket.join(partyCode);
    io.in(partyCode).emit('partyCreated', { partyCode, partyName });
  });

  socket.on('disconnect', () => {
    players--;
    console.log('A player disconnected - players:', players);
  });
});
