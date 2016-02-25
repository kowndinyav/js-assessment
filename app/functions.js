exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(undefined,arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    var fn1 = function(strArg){
      return str + ', ' + strArg;
    }

    return fn1;
  },

  createFunc:function(fn,arg){
    return function(){return fn(arg)};
  },

  makeClosures : function(arr, fn) {
    var fnArray = [];
    /*
      This is called loop closure problem - stackoverflow : http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
      Also looks like with ES6 the syntax 'let' would help solve the problem as the variable is scoped to only the loop, but not function
    */
    for(var i=0;i<arr.length;i++){
        fnArray.push(this.createFunc(fn,arr[i]));
    }

    return fnArray;

  },

  partial : function(fn, str1, str2) {
    var ff = function(punc){
      return fn(str1,str2,punc);
    };

    return ff;
  },

  useArguments : function() {
    var aa = arguments;

    var total = 0;
    for(var i=0;i<aa.length;i++){
      total += aa[i];
    }

    return total;

  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.splice(0,1);
    fn.apply(null,args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.splice(0,1);
    
    if(args.length == 0){
      return function(a,b,c){return fn(a,b,c);}
    }
    else if(args.length == 1){
      return function(b,c){return fn(args[0],b,c);}
    }
    else if(args.length == 2){
      return function(c){return fn(args[0],args[1],c);}
    }
    
    return function(){return fn(args[0],args[1],args[2]);}
  },

  curryIt : function(fn) {
    
    return function(a){/*functionsAnswers.curryIt(curryMe)(a);*/
        return function(b){/*functionsAnswers.curryIt(curryMe)(a)(b);*/
          return function(c){/*functionsAnswers.curryIt(curryMe)(a)(b)(c);*/
              return fn(a,b,c);        
            };
        };
    }


  }
};