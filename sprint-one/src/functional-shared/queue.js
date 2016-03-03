  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var Queue = function() {
  var storage = {};
  storage.index = 0;

  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {
  size: function() {
    return this.index;
  },

  enqueue: function(value) {
    this[this.index] = value;
    this.index++;
  },

  dequeue: function() {
    if (this.index > 0) {
      var temp = this[0];
      for (var key in this) {
        if (Number(key)) {
          this[key] = this[Number(key) + 1];
        }
      }
      this.index--;
      return temp;
    }
  }
};


// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// expect(queue.size()).to.equal(1);