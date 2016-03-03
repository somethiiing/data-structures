  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.index = 0;

  return instance;
};

var stackMethods = {
  size: function() {
    return this.index;
  },
  push: function(value) {
    this[this.index] = value;
    this.index++;
  },
  pop: function() {
    if (this.index > 0) {
      this.index--;
      return this[this.index];
    }
  }
};


