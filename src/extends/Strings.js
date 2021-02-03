module.exports = {
	Apply: () => {
		String.prototype.equalsIgnoreCase = function(str){
			if (new String(this).toLowerCase() == str) {
              return true;
			} else {
			  return false;
			}
		};
	}
}
