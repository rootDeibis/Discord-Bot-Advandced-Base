const Discord = require('discord.js'), 
	  Client = new Discord.Client(),
	  {AsyncFileSearcher, FileSearcher, FileRequirer} = require("./extends/FileTools"),
	  Config = require("./settings.json"),
	  dir =  __dirname;


/* COLLECTORS */

const Collections = { 
	commands: new Discord.Collection()
};


Client.login(Config.bot.token);

/* ========== */

/* # DEFINE DISCORD EXPORTS  */

const Export = {Discord, Client, Collections , Config, dir};


/* LOAD EVENTS */

FileSearcher("event.js", dir + "\\bot\\events\\", events => {
	FileRequirer(events, event => {
		Client.on(event.name, event_props => event.call(event_props, Export));
	});
});

/* ========== */


/* LOAD COMMANDS */

FileSearcher("command.js", dir + "\\bot\\commands\\", Commands => {
	FileRequirer(Commands, command => {
		Collections.commands.set(Config.bot.prefix + command.name, command);
	});
});

/* ========== */
