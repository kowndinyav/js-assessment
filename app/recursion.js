exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  
	process:function(dirObj,list){
		
		if(dirObj === undefined){
			return;
		}
		
		
		for (var i=0; i < dirObj.files.length; i++){
			
			var file = dirObj.files[i];

			console.log(file);

			if (typeof (file) === "string"){
				list.push(file);
			}
			else{
				this.process(file,list);
			}
		}
		
	},
	
	permuteimpl:function(partial_array_to_process,permuted_partial_arr,finalArr,LENGTH){

		if(permuted_partial_arr.length == LENGTH){
			finalArr.push(permuted_partial_arr);
			return;
		}

		for(var i=0;i<partial_array_to_process.length;i++)
		{
			var new_partial_array_to_process = partial_array_to_process.slice(0);
			var new_permuted_partial_arr = permuted_partial_arr.slice(0);
			new_permuted_partial_arr.push(partial_array_to_process[i]);
			new_partial_array_to_process.splice(i,1);
			this.permuteimpl(new_partial_array_to_process,new_permuted_partial_arr,finalArr,LENGTH);
		}

	},

  listFiles: function(data, dirName) {
  	var filelist = [];
  	this.process(data,filelist);
  	return filelist;
  },

  permute: function(arr) {
  	var finalArr = [];
  	this.permuteimpl(arr,[],finalArr,arr.length);
  	return finalArr;
  },

  fib:function(n){
  	if(n == 1 || n == 2)
  		return 1;

  	return this.fib(n-1) + this.fib(n-2);
  },

  fibonacci: function(n) {
  	return this.fib(n);
  },







  PAIRS:0,
  validStrArr:[],



  createNode:function(parent){
		node = {};
		node.data = '';
		node.left = null;
		node.right = null;
		node.parent = parent;
		node.str = '';
		return node;
	},
			
	createLeft:function(parent){
		node = this.createNode(parent);
		node.data = '(';
		node.str = parent.str + node.data;
		return node;
	},
	createRight:function(parent){
		node = this.createNode(parent);
		node.data = ')';
		node.str = parent.str + node.data;
		return node;
	},

	validLeft:function(p){
				
		var open = 0;

		while(p != null){
			if(p.data == '('){
				open++;
			}
			p = p.parent;
		}

		if(open == this.PAIRS){
			return false;
		}

		return true;
	},

	validRight:function(p){
		var open = 0;
		var close = 0;
		var origP = p;

		while(p != null){
			if(p.data == '('){
				open++;
			}
			else if(p.data == ')'){
				close++;
			}
			p = p.parent;
		}

		if((open <= close) &&(close != this.PAIRS)){
			return false;
		}

		if((close == this.PAIRS) && (close == open))
		{
			console.log(origP.str);
			this.validStrArr.push(origP.str);
			return false;
		}

		return true;
	},

	buildTree:function(node){

		if(node == null){
			node = this.createNode(null);
			node.data = '(';
			node.str = '(';
		}

		if(this.validLeft(node)){
			node.left = this.createLeft(node);
			this.buildTree(node.left);
		}
		if(this.validRight(node)){
			node.right = this.createRight(node);
			this.buildTree(node.right);
		}


		return node;
	},

	  validParentheses: function(n) {
	  		this.PAIRS = n;
	  		this.buildTree(null);
	  		return this.validStrArr;
	  }
};
