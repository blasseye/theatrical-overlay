const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const tmi = require('tmi.js');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Utiliser la variable d'environnement pour le nom du streamer
const twitchChannel = process.env.STREAMER_NAME || "twitch";

const client = new tmi.Client({
    connection: { reconnect: true },
    channels: [twitchChannel]
});

client.connect();
client.on('message', (channel, tags, message, self) => {
    if (self) return;
    io.emit('chatMessage', { user: tags['display-name'], message });
});

app.use(express.static('public'));

server.listen(3000, () => console.log('Serveur démarré sur http://localhost:3000'));