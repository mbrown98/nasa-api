// One to one relationship between controllers and routers, but models could be used by many controllers and routers
const { planets, getAllPlanets } = require("../../models/planets.model");

function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
