module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	}
}

// module.exports = {
// 	name: '',
// 	description: '',
// 	execute(message, args) {
//
// 	}
// }