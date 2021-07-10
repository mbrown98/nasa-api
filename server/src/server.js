const http = require("http");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");
// FE on port 3000 ---- checks env port or defaults to 8000
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  //load all data first
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log("listening on port: ", PORT);
  });
}

startServer();
