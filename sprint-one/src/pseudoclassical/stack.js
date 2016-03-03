  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var Stack = function() {
  this.index = 0;
};

Stack.prototype.size = function() {
  return this.index;
};

Stack.prototype.push = function(value) {
  this[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  if (this.index > 0) {
    this.index--;
    return this[this.index];
  }
};

var stack = new Stack();


