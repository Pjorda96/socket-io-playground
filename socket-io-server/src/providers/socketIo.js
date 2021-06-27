let io = { on: () => true }
let interval

export function startServer(socket) {
  return new Promise(resolve => {
    io = socket;
    resolve(true);
  })
}

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
  console.log('emit')
};

io.on('connection', (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

export default io
