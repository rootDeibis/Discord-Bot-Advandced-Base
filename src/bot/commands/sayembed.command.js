module.exports = {
	name: "sayembed",
	execute: (args, Import) => {
		Import.StringUtils.apply();


		var CommandEvent = Import.Event;
		var Message = args.join(" ");

		var channel = Message.utilSearch("channel");

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

		if (channel == null) return CommandEvent.channel.send(BuildEmbed);

		channel = CommandEvent.guild.channels.cache.find(c => c.name == channel && c.type == 'text');

		if (!channel) return CommandEvent.channel.send("Channel not found or not a text channel.");

		channel.send(BuildEmbed);

		

	}
}
