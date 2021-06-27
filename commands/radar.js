module.exports = {
	name: "radar",
	description: "What happens when two planes are too close?",
	execute(message, args) {
		message.channel.send("BEEP BEEP BOOP BEEP");
	}
}