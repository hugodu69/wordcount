function Words() {
  this.count = function(string) {
    var obj = {}
      string.split(' ').forEach(function(word){
        obj[word] = obj.hasOwnProperty(word) ? obj[word] +1 : 1;
      })
    return obj
  }
}

module.exports = Words;
