//load node fs module and discord.js

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.commands = new Discord.Collection();

// readdirSync() Creates an array of all files in the "commands" directory, filter filters out non .js files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//sets prefix
prefix = config.prefix

// load commands
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`hannahbot online`);

    // loser music

    client.user.setActivity('hyperpop', { type: 'LISTENING' }); 
  });
client.on('message', message => {
    //new world order no more bots, only hannah
    if (message.author.bot) return;
    
    // Requires "HannahBot" prefix.

    if (!message.content.startsWith(prefix)) return; 
    const args = message.content.slice(prefix.length + 1).split(/ +/);
    
    // mAkE it CaSe inSENsitIve.
    const cmdName = args.shift().toLowerCase();

    // does the command actually exist

    if (!client.commands.has(cmdName)) {
        message.channel.send("that's not a real command, loser") //haha loser
        return;
      }
    try {
        client.commands.get(cmdName).execute(message, args, client);
    } catch (error) {
        //ave's a dumb fag who cant code
      console.error(error);
      message.channel.send('tell <@473174600088551445> their bot doesnt work');
      }
})
client.login(config.token);