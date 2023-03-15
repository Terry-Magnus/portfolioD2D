const app = require("./index");
const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
