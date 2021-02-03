module.exports = {
	Apply: () => {
		String.prototype.equalsIgnoreCase = function(str){
			if (new String(this).toLowerCase() == str) {
              return true;
			} else {
			  return false;
			}
		};

		String.prototype.utilSearch = function(search) {
			var Regex = new RegExp(`${search}="(.*?)"`,'g');
			var array = new String(this).match(Regex);
			var Result = null;

			if (array == undefined) return Result;

			for(i = 0; i < array.length; i++) {
				var RegexR =  RegExp(/(["'])(?:(?=(\\?))\2.)*?\1/g,'g');
 				Result = array[i].match(RegexR, '')[0].replace(/"/g, '');
			}

			return Result;
		};
	}
}
