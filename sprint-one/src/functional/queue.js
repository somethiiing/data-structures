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
    if (size > 0) {
      var temp = storage[0];
      size--;
      for (var key in storage) {
        storage[key] = storage[Number(key) + 1];
        console.log(storage[0])
      }
      return temp;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
