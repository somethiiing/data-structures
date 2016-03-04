var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];


  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var node = this;
  //recursive
  var initialize = false;
  var recursionSearch = function(target) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target) {
        initialize = true;
      } else if (this.children[i].children.length > 0) {
        var childNode = this.children[i];
        recursionSearch.call(childNode, target);
      }
    }
  };
  recursionSearch.call(node, target);
  return initialize;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// var tree = Tree();