exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
  		
  		var modexports = {};

  		modexports.name = str2;
  		modexports.greeting = str1;
  		modexports.sayIt = function(){
  			return this.greeting + ', ' + this.name;
  		}

  		return modexports;

  }
};