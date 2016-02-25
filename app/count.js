exports = (typeof window === 'undefined') ? global : window;

  	
exports.countAnswers =  {
	mythis:null,

	keepcounting:true,
	
	callback:function(val,end){
		console.log(val);	
		
		if((val < end) && mythis.keepcounting)
		{
			setTimeout(mythis.callback,100,val+1,end);
		}
	},

	cancel:function () {
		this.keepcounting = false;
	},

  	count : function (start, end) {
	  	var i = start;
	  	mythis = this;
	  	console.log(i);
	  	setTimeout(this.callback,100,i+1,end);

	  	return this;
  	}	
};