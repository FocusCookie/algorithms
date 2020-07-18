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
  a: 2,
  b: 2,
  c: Infinity,
  fin: Infinity,
};

const graph = {
  start: { a: 2, b: 2 },
  a: { b: 2 },
  b: { fin: 2, c: 2 },
  c: { a: -1, fin: 2 },
  fin: null,
};

let parents = {
  a: "start",
  b: "start",
  c: null,
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
