const Colors = require('colors'); //# https://www.npmjs.com/package/colors

module.exports = {
	name: "ready",
	call: (Event, Import) => {
		var ClientSettings = Import.Config;
		var ClientUser = Import.Client.user;
		
		console.clear(); //# Clear Console


		var Prefix = "[Discord-Bot] ".brightCyan;
		console.log(Prefix + "Bot is ready!");


		//# Change Bot Status

		//# List: online, idle, invisible, dnd 

		ClientUser.setStatus(ClientSettings.bot.status) 
		.catch(console.log);



		//# Change Bot Activity

		ClientUser.setActivity(ClientSettings.bot.activity.content,{
				/*
					If type is 'STREAMING':
						url: 'STREAM URL YOUTUBE/TWICTH',
						type: 'STREAMING'
				*/
				type: ClientSettings.bot.activity.type //# List: PLAYING, STREAMING, LISTENING, WATCHING, COMPETING

		}) 
		.catch(console.log);

		
		
	}
}
