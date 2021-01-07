module.exports = {
	name: 'who',
	description: 'who tf is that',
	execute(message) {
        message.channel.send({
			files: ['./images/who.gif']
		});
	},
};