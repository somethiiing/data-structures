  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var Queue = function() {
  this.index = 0;
};

Queue.prototype.size = function() {
  return this.index;
};

Queue.prototype.enqueue = function(value) {
  this[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
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
};

var queue = new Queue();


