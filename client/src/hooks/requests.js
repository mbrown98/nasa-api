const API_URL = "http://localhost:8000";

async function httpGetPlanets() {
  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/planets`);
  // Load planets and return as JSON.
  return await response.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      body: JSON.stringify(launch),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return { ok: false };
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
