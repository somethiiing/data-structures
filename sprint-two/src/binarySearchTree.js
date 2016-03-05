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
    var findValue = function (node) {
      if (node === null) {
        return false;
      } else if (node.value === value) {
        return true;
      } else if (value < node.value) {
        return findValue(node.left);
      } else if (value > node.value) {
        return findValue(node.right);
      }
    };
    return findValue(this);
  },
  depthFirstLog: function(cb) {
    
    var mapBinary = function(node) {
      if (node === null) {
        return;
      } else {
        cb(node.value);
      }

      mapBinary(node.left);
      mapBinary(node.right);
    };

    mapBinary(this);
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
