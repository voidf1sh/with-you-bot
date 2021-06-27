module.exports = {
	name: 'birthday',
	description: 'Happy Birthday!',
	execute(message, args) {
		message.channel.send("No, it's not my birthday :(");
	}
}