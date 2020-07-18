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
  a: 5,
  b: Infinity,
  c: 2,
  d: Infinity,
  fin: Infinity,
};

const graph = {
  start: { a: 5, c: 2 },
  a: { b: 4, d: 2 },
  b: { d: 6, fin: 3 },
  c: { a: 8, d: 7 },
  d: { fin: 1 },
  fin: null,
};

let parents = {
  a: "start",
  b: "start",
  c: null,
  d: null,
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
