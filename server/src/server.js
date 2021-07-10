const http = require("http");
const app = require("./app");

// FE on port 3000 ---- checks env port or defaults to 8000
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});
