exports = (typeof window === 'undefined') ? global : window;

//var $ = require('jquery')(require("jsdom").jsdom().parentWindow);

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    
    var total = 0;
    for(var i = 0; i < arr.length; i++)
    {
        total = total + arr[i];
    }

    return total;
  },

  remove : function(arr, item) {
    
    while(arr.indexOf(item) >= 0){
      arr.splice(arr.indexOf(item),1); 
    }

    return arr;
  },

  removeWithoutCopy : function(arr, item) {
  
    while(arr.indexOf(item) >= 0){
      arr.splice(arr.indexOf(item),1); 
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length-1,1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    var res = arr1.concat(arr2);
    return res;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
      
      var count = 0;
      for(var i = 0; i < arr.length; i++)
      {
          if(arr[i] == item)
            count++;
      }

      return count;

  },

  duplicates : function(arr) {
    var res = [];
    var dup = [];
      for(var i = 0; i < arr.length; i++)
      {
        if(res.indexOf(arr[i]) == -1){
          res.push(arr[i]);
        }
        else
        {
          
          if(dup.indexOf(arr[i]) == -1){
            dup.push(arr[i]);
          }
        }
          
      }

      return dup;
  },

  square : function(arr) {
    var res = [];

      for(var i = 0; i < arr.length; i++)
      {
          res.push(arr[i]*arr[i]);
      }

      return res;
  },

  findAllOccurrences : function(arr, target) {
    
    var si = 0;
    var res = [];

    si = arr.indexOf(target,0);

    while(si>=0){
      res.push(si);  
      si = arr.indexOf(target,si+1); 
    }

    return res;

  }
};