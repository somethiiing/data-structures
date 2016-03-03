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
  }
};


