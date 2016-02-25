exports = (typeof window === 'undefined') ? global : window;

//var http = require('https');


exports.asyncAnswers = {
  
  mythis:null,

  async : function(value) {
  	var deferred = $.Deferred();

  	
  	setTimeout(function(){
  		console.log('entering into timeout code - ' + deferred.resolve);
  		deferred.resolve(value);
  	},500);


  	//deferred.resolve(value);

  	return deferred.promise();
  },

  decode_base64 : function (s)
{
    var e = {}, i, k, v = [], r = '', w = String.fromCharCode;
    var n = [[65, 91], [97, 123], [48, 58], [43, 44], [47, 48]];

    for (z in n)
    {
        for (i = n[z][0]; i < n[z][1]; i++)
        {
            v.push(w(i));
        }
    }
    for (i = 0; i < 64; i++)
    {
        e[v[i]] = i;
    }

    for (i = 0; i < s.length; i+=72)
    {
        var b = 0, c, x, l = 0, o = s.substring(i, i+72);
        for (x = 0; x < o.length; x++)
        {
            c = e[o.charAt(x)];
            b = (b << 6) + c;
            l += 6;
            while (l >= 8)
            {
                r += w((b >>> (l -= 8)) % 256);
            }
         }
    }
    return r;
},

  manipulateRemoteData : function(url) {
		var deferred = $.Deferred();
		mythis = this;
  		
  		//https://api.github.com/repos/{username}/{repositoryname}/contents/{path_to_resource}?ref={branch}
  		//https://api.github.com/repos/rmurphey/js-assessment/contents/data/testdata.json?ref=master

		$.ajax({
				  url: "https://api.github.com/repos/rmurphey/js-assessment/contents" + "/data/testdata.json" + "?ref=master",
				  //beforeSend: function (req) {req.setRequestHeader("User-Agent", "rmurphey");}
		}).done(function(str) {
			
			console.log('hello');
			//converting string into json
	 		var responseJson = str;

	 		//get the content part out of the json
			var base64EncodedBuffer = responseJson.content;

			//now the string is base64 encoded, so decode it
			var asciiString = atob(base64EncodedBuffer);
			
			
			//prepare json out of the decoded string
			var finalJson = JSON.parse(asciiString);

			//get the people key
			var people = finalJson.people;

			//iterate through array and prepare the final array and sort it
			var resArr = [];
			for (var i=0;i<people.length;i++)
			{
				resArr.push(people[i]["name"]);
			}
			resArr.sort();

			//finally resolve the promise
			deferred.resolve(resArr);
		});		

  		
		/*
		var options = {
  			host: 'api.github.com',
  			path: '/repos/rmurphey/js-assessment/contents'+ url + '?ref=master',
			method: 'GET',
			headers:{'User-Agent':'rmurphey'}
		};



		callback = function(response) {
  			var str = '';
			
			response.on('data', function (chunk) {
				str += chunk; 
			});

		 	response.on('end', function () {
		 		//converting string into json
		 		var responseJson = JSON.parse(str);

		 		//get the content part out of the json
				var base64EncodedBuffer = responseJson.content;

				//now the string is base64 encoded, so decode it
				var asciiString = new Buffer(base64EncodedBuffer, 'base64').toString('ascii');
				
				//prepare json out of the decoded string
				var finalJson = JSON.parse(asciiString);

				//get the people key
				var people = finalJson.people;

				//iterate through array and prepare the final array and sort it
				var resArr = [];
				for (var i=0;i<people.length;i++)
				{
					resArr.push(people[i]["name"]);
				}
				resArr.sort();

				//finally resolve the promise
				deferred.resolve(resArr);
		 	});
		}

		http.request(options, callback).end();
		*/
		return deferred.promise();
  }
};