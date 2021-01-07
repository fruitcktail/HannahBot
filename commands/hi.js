module.exports = {
	name: 'hi',
	description: 'when will my pain end',
	execute(message) {
        message.channel.send({
			files: ['./images/hi.gif']
		});
	},
};