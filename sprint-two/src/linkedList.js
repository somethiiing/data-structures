var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var linkedListNode = Node(value);
    list[value] = linkedListNode;
    if (list.head === null) {
      list.head = linkedListNode;
    } else {
      list.tail.next = linkedListNode;
    }
    list.tail = linkedListNode;
  };

  list.removeHead = function() {
    var temp = list.head.value;
    delete list[temp];
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) {
    for (var key in list) {
      if (list[key].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
addToTail: O(1)
removeHead: O(1)
contains: 0(n) 
 */
