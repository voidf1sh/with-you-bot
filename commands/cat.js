module.exports = {
	name: 'cat',
	description: 'Who is the cat?',
	execute(message, args) {
		message.channel.send("Koios. He's a 6 yo tabby/tiger mix. Enjoys high spots and human flesh, but does not enjoy long walks on the beach.");
	}
}