module.exports = {
	name: "say",
	execute: (args, Import) => {
		Import.StringUtils.apply();

		var CommandEvent = Import.Event;

		if (args.length == 1) {
			
			if (args[0].equalsIgnoreCase("hello")) {
				CommandEvent.reply("Hi!")
			} 
		}

	}
}
