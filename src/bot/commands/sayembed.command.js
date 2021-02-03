module.exports = {
	name: "sayembed",
	execute: (args, Import) => {
		require(Import.dir + "\\extends\\Strings").Apply();


		var CommandEvent = Import.Event;
		var Message = args.join(" ");

		var Embed = {
			title: Message.utilSearch("title"),
			description: Message.utilSearch("description"),
			thumbnail: Message.utilSearch("thumbnail"),
			image: Message.utilSearch("image"),
			color: Message.utilSearch("color")
		};

		var UsageMessage = 'Usage: sayembed title="Embed" description="Description here"';

		if ([Embed.title, Embed.description].some(s => s == null)) return CommandEvent.channel.send(UsageMessage);

		const BuildEmbed = new Import.Discord.MessageEmbed()
						   .setTitle(Embed.title)
						   .setDescription(Embed.description)
						   .setThumbnail(Embed.thumbnail)
						   .setImage(Embed.image)
						   .setColor(Embed.color);

		CommandEvent.channel.send(BuildEmbed);

	}
}
