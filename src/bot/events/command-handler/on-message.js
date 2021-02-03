module.exports = {
	name: "message",
	call: (Event, Import) => {
		const Commands = Import.Collections.commands;
		const Args = Event.content.split(" ");

		Import.Event = Event;

		const Export = Import;


		var cmd = Commands.get(Args[0])
		if (cmd) {
			cmd.execute(Args.slice(1), Export);
		}

	}
}
