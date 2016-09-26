var fs = require('fs');

var parse = require('./../JSONConcat.js');

module.exports = (function(){

	var pathJSON = './result.json';

	var pathData = './mock';

	

	var readJSON = function (path){
		try {
            var result = fs.readFileSync(path, 'utf8');
            return JSON.parse(result);
        } catch (e) {   
        	console.log('cant read from file');
            return [];
        }
	}

	// var deepEquals = function (x, y){
	// 	if ((typeof x === 'function' && typeof y === 'function') ||
 //       (x instanceof Date && y instanceof Date) ||
 //       (x instanceof RegExp && y instanceof RegExp) ||
 //       (x instanceof String && y instanceof String) ||
 //       (x instanceof Number && y instanceof Number)) {
 //        return x.toString() === y.toString();
 //    	}
	// }



	var test = function (){
		var testObj = parse(pathData);
		
		var expectedObj = readJSON(pathJSON);		

		if ( JSON.stringify(expectedObj) === JSON.stringify(testObj) ) {
			console.log('success')			

		} else {
			console.log('fail')
			console.log(testObj);
			console.log(expectedObj);
		}


	}



	return {

		test:test		

	}

})();