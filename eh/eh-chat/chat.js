const username = prompt("Enter your EH name:");
const messagesDiv = document.getElementById("messages");

// CONNECT TO THE PUBLIC WEBSOCKET SERVER
const socket = new WebSocket("wss://ws.postman-echo.com/raw");

// When a message arrives
socket.onmessage = (event) => {
  const p = document.createElement("p");
  p.textContent = event.data;
  messagesDiv.appendChild(p);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

// Send message
function sendMessage() {
  const text = document.getElementById("msg").value;
  const full = `[${username}] ${text}`;
  socket.send(full);
  document.getElementById("msg").value = "";
}
