module.exports = {
	name: "message",
	call: (Event, Import) => {

		const Commands = Import.Collections.commands;
		const Args = Event.content.split(" ");

		Import.Event = Event; 

		const Export = Import;


		var cmd = Commands.get(Args[0]); //# Load arguments after the command.
		
		if (!cmd) return;

		if (Event.author.bot) return; //# Check if the sender is a bot

		if (Event.channel.type === 'dm') return; //# If the channel type is 'DM' do not execute
		cmd.execute(Args.slice(1), Export);


	}
}
