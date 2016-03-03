  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.index = 0;

  return instance;
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
    var temp = this[0];
    if (this.index > 0) {
      for (var key in this) {
        if (Number(key) >= 0) {
          this[key] = this[Number(key) + 1];
        }
      }
      this.index--;
    }
    return temp;
  }
};


