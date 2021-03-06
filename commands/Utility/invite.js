const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, { description: 'Sends the invite link for the bot.' });
	}

	async run(msg) {
		return msg.send(`
Add me to your server with this link:
<https://discordapp.com/oauth2/authorize?client_id=${this.client.user.id}&scope=bot&permissions=281600>`);
	}

};
