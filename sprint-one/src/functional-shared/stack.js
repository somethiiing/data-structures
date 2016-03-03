  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var Stack = function() {
  var storage = {};
  storage.index = 0;

  _.extend(storage, stackMethods);

  return storage;
};

var stackMethods = {

  size: function() {
    return this.index;
    console.log(this);
  },

  push: function(value) {
    this[this.index] = value;
    this[this.index++];
  },

  pop: function() {
    this[this.index--];
    return this[this.index];
  }

};