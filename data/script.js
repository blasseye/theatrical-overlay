const socket = io();
const chat = document.getElementById('chat');

socket.on('chatMessage', ({ user, message }) => {
    const msgElement = document.createElement('div');
    msgElement.classList.add('message');
    msgElement.innerHTML = `<strong>${user}:</strong> ${message}`;
    chat.appendChild(msgElement);
    chat.scrollTop = chat.scrollHeight;
});