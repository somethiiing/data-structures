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
  // for (var key in this) {
  //   for (var i = 0; i < this[this.key].length; i++) {
  //     if (this[key][i] === target) {
  //       return true;
  //     }
  //   }
  // }
  // return false;

  for (var i = 0; i < this[this.key].length; i++) {
    for (var key in this[i][key]) {
      if (this[i][key] === target) {
        return true;
      }
    }
  }
  return false;
  // for (var i = 0; i < this.children.length; i++) {
  //   if (this.children[i].value === target) {
  //     return true;
  //   }
  //   return treeMethods.contains(target);
  // }
  // return false;
  // var initialize = false;
  // for (var i = 0; i < ...; i++) {
  //   if (this.children[i].value === target) {
  //     initialize = true;
  //   }
  // }

  // return initialize;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// var tree = Tree();