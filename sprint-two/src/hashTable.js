

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    this._storage.set(index, [[k, v]]);
  }

//this._storage[index].push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.each(function(element, key, collection) {
    if(this._storage.get(index)[key][0] === k){
      return this._storage.get(index)[key][1];
    }
  });
  // return this._storage.get(index)[0][1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

var hashTable = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?
 */


//this._storage[index] = this._storage[index] || [];