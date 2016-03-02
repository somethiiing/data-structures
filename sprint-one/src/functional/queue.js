var Queue = function() {
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var temp = storage[0];
    for (var key in storage) {
      storage[key] = storage[key + 1];
    }
    size--;
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
