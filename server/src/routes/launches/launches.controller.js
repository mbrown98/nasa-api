const {
  launches,
  getAllLaunches,
  addNewLaunch,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.destination
  ) {
    res.status(400).json({
      error: "Missing required launch property",
    });
  }

  if (NaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch date",
    });
  }

  launch.launchDate.toString() === "Invalid date";
  addNewLaunch(launch);
  return res.status(201).json(launch);
}
module.exports = { httpGetAllLaunches, httpAddNewLaunch };
