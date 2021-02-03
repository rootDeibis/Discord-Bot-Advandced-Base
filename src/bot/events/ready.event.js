const Colors = require('colors'); //# https://www.npmjs.com/package/colors

module.exports = {
	name: "ready",
	call: (Event, Import) => {
		var ClientUser = Import.Client.user;
		
		console.clear(); //# Clear Console


		var Prefix = "[Discord-Bot] ".brightCyan;
		console.log(Prefix + "Bot is ready!");


		//# Change Bot Status

		//# List: online, idle, invisible, dnd 

		ClientUser.setStatus('idle') 
		.catch(console.log);



		//# Change Bot Activity

		ClientUser.setActivity('Example Discord Bot Advanced Base',{
				/*
					If type is 'STREAMING':
						url: 'STREAM URL YOUTUBE/TWICTH',
						type: 'STREAMING'
				*/
				type: "WATCHING" //# List: PLAYING, STREAMING, LISTENING, WATCHING, COMPETING

		}) 
		.catch(console.log);

		
		
	}
}
