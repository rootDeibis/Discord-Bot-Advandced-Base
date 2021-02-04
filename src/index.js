const Discord = require('discord.js'), 
	  Client = new Discord.Client(),
	  {AsyncFileSearcher, FileSearcher, FileRequirer} = require("./extends/FileTools"),
	  dir =  __dirname;
	  StringUtils = require("./extends/Strings"),
	  Config = require("./settings.json");
	  



//# Create Collectors

const Collections = { 
	commands: new Discord.Collection()
};


Client.login(Config.bot.token); //# Login Bot



//# Define Exports Parameters
const Export = {Discord, Client, Collections , StringUtils, Config, dir};




//# Load All Events
FileSearcher("event.js", dir + "\\bot\\events\\", events => {
	FileRequirer(events, event => {
		Client.on(event.name, event_props => event.call(event_props, Export));
	});
});




//# Load All Commands

FileSearcher("command.js", dir + "\\bot\\commands\\", Commands => {
	FileRequirer(Commands, command => {
		Collections.commands.set(Config.bot.prefix + command.name, command);
	});
});
