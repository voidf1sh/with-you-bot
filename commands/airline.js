module.exports = {
	name: "airline",
	description: "What airline do you work for?",
	execute(message, args) {
		message.channel.send("I work for a US-Based airline but will not confirm nor deny which one it is.");
	}
}