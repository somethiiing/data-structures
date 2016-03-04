

// ------------------------
// Instantiate a new graph
var Graph = function() {
  //var this = Object.create(Graph.prototype);
  


  //return this;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {};
  this[node]['value'] = node;
  this[node]['edge'] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (this[key]['value'] === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this[fromNode]['edge'].length; i++) {
    if (this[fromNode]['edge'][i] === this[toNode]['value']) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode]['edge'].push(this[toNode]['value']);
  this[toNode]['edge'].push(this[fromNode]['value']);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var findAndRemoveEdge = function(nodeEdges, target) {
    for (var i = 0; i < nodeEdges.length; i++) {
      if (nodeEdges[i] === target) {
        nodeEdges.splice(i, 1);
      }
    }
  };

  findAndRemoveEdge(this[toNode]['edge'], fromNode);
  findAndRemoveEdge(this[fromNode]['edge'], toNode);

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this) {
    if (Number(node) >= 0) {
      cb(node);
    }
  }
};

var graph = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
 */


