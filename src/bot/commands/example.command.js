module.exports = {
	name: "say",
	execute: (args, Import) => {
		require(Import.dir + "\\extends\\Strings").Apply();

		var CommandEvent = Import.Event;

		if (args.length == 1) {
			
			if (args[0].equalsIgnoreCase("hello")) {
				CommandEvent.reply("Hi!")
			} 
		}

	}
}
