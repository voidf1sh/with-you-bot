/* eslint-disable brace-style */
// Variable Assignment
const fs = require('fs');
const dotenv = require('dotenv');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const debug = false;
const config = require('./config.json');
const prefix = config.prefix;
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

dotenv.config();
const owner = process.env.ownerID;

client.once('ready', () => {
	console.log('Ready');
});

client.login(process.env.TOKEN);

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command.');
	}
});