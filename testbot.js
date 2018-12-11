const Discord = require('discord.js');
const client = new Discord.Client();

// Constant variables
const prefix = '!';
const ownerID = '263493405684924416';

// Listener events
client.on('message', message => {
    // Vars
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLocaleLowerCase();
    var sender = message.author;
    var msg = message.content.toLocaleUpperCase();

    // Return statements
    if (message.author.bot) return;                     // Bot ignore
    if (!message.content.startsWith(prefix)) return;    // No prefix ignore

    // Command handler
    try {
        
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args);
        
    } catch (e) {
        console.log(e.stack);
    }

    if (sender.id === '522092594726174721') {
         return;
    }
    if (msg.includes('NIGGA') || (msg.includes('NIGGER') || (msg.includes('NIBBA')))) {
        message.channel.send(message.author + ' _has been banned due to tosic behaviour_')
    }
    if (msg.includes('NIGERIA'))
        message.author.send('Reporta2 al INADI')
    
    });
client.login(process.env.BOT_TOKEN);

// Ready event
client.on('ready', () => console.log('Launched!'));