var BinarySearchTree = function(value) {
  var binarySearchTree = createNode(value, binarySearchTreeMethods);

  return binarySearchTree;
};

var binarySearchTreeMethods = {
  
  insert: function(value) {
    var newNode = createNode(value, binarySearchTreeMethods);

    var placeNode = function(node) {
      if (this.value > node.value) {
        if (this.left === null) {
          this.left = newNode;
        } else {
          placeNode.call(this.left, node);
        }
      } else if (this.value < node.value) {
        if (this.right === null) {
          this.right = newNode;
        } else {
          placeNode.call(this.right, node);
        }
      }
    };

    placeNode.call(this, newNode);

  },
  contains: function(value) {
    //return a boolean
    
  },
  depthFirstLog: function(cb) {
    //maps callback to each value in tree
  },
  left: null,
  right: null
};

var createNode = function(value, inheritsFrom) {
  var instance = Object.create(inheritsFrom);
  instance.value = value;
  return instance;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
