// One to one relationship between controllers and routers, but models could be used by many controllers and routers

const planets = require("../../models/planets.model");

function getAllPlanets(req, res) {
  console.log("hit");
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
};
