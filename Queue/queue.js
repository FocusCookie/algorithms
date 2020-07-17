function Queue() {
  this.elements = [];
}

Queue.prototype.enqueue = function (e) {
  this.elements.push(e);
};

Queue.prototype.dequeue = function (e) {
  return this.elements.shift();
};

Queue.prototype.isEmpty = function () {
  return this.elements.length == 0;
};

Queue.prototype.peek = function () {
  return !this.isEmpty() ? this.elements[0] : undefined;
};

Queue.prototype.length = function () {
  return this.elements.length;
};

// check if last char of a name is an m, than it is a mango dealer
function checkMangodealer(person) {
  return person.slice(-1) === "m" ? true : false;
}

const graph = new Map();
graph.set("you", ["alice", "bob", "claire"]);
graph.set("bob", ["anujm", "peggy"]);
graph.set("alice", ["peggy", "tomi"]);
graph.set("claire", ["tomi", "jonny"]);
graph.set("anujm", []);
graph.set("peggy", []);
graph.set("tomi", []);
graph.set("jonny", []);

function searchMangoDealer(name) {
  let searchQueue = new Queue();
  searchQueue.enqueue(name);
  if (graph.get(name).length > 0) {
    graph.get(name).forEach((element) => {
      searchQueue.enqueue(element);
    });
  }
  let searched = [];

  while (!searchQueue.isEmpty()) {
    const person = searchQueue.dequeue();
    if (!searched.includes(person)) {
      console.log(person);
      if (checkMangodealer(person)) {
        console.log(person, " is a mango dealer!");
        return true;
      } else {
        searchQueue.enqueue(person);
        if (graph.get(person).length > 0) {
          graph.get(person).forEach((element) => {
            searchQueue.enqueue(element);
          });
        }
        searched.push(person);
      }
    }
  }
  return false;
}

console.log(searchMangoDealer("you"));
