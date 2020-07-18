function findLowestCostNode(costs, processed) {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  for (const [key, value] of Object.entries(costs)) {
    const cost = value;
    const node = key;

    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }

  return lowestCostNode;
}

let costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};

const graph = {
  start: { a: 6, b: 2 },
  a: { fin: 1 },
  b: { a: 3, fin: 5 },
  fin: null,
};

let parents = {
  a: "start",
  b: "start",
  fin: null,
};

const processed = [];

let node = findLowestCostNode(costs, processed);

while (node !== null) {
  let cost = costs[node];
  let neighbors = graph[node];

  for (const key in neighbors) {
    let newCost = cost + neighbors[key];
    if (costs[key] > newCost) {
      costs[key] = newCost;
      parents[key] = node;
    }
  }

  processed.push(node);
  node = findLowestCostNode(costs, processed);
}

console.log(parents);
