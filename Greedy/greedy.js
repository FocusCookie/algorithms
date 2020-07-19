let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {
  kone: ["id", "nv", "ut"],
  ktwo: ["wa", "id", "mt"],
  kthree: ["or", "nv", "ca"],
  kfour: ["nv", "ut"],
  kfive: ["ca", "az"],
};

let finalStations = new Set();

while (statesNeeded.size !== 0) {
  let bestStation = null;
  let statesCovered = new Set();

  for (const [station, states] of Object.entries(stations)) {
    // intersect can be simulated via
    let covered = new Set([...statesNeeded].filter((x) => states.includes(x)));
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  }

  statesNeeded = new Set(
    [...statesNeeded].filter((x) => !statesCovered.has(x))
  );
  finalStations.add(bestStation);
}

console.log(finalStations);
