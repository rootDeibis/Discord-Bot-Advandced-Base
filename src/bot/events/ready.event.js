const Colors = require('colors'); //# https://www.npmjs.com/package/colors

module.exports = {
	name: "ready",
	call: (Event, Import) => {
		
		console.clear();

		var Prefix = "[Discord-Bot] ".brightCyan;

		console.log(Prefix + "Bot is ready!");

	}
}
