const Discord = require('discord.js');
const bot = new Discord.Client();
const cmd = require('./extras');

bot.on('message', (message) => {
    const args = message.content.slice().trim().split(/ +/g);
    const command = args.shift();

    if (command === '!BotTest!') {
        cmd.logmsg('Hello, ' + message.author.username + ', You gave me this command: ' + message.content, message, bot);
        message.channel.send('Hello, ' + message.author.username + ', You gave me this command: ' + message.content);
    }

    if (command === '!BotTest:') {
        if (args[0] === '1') {
            if (args[1] === 'million') {
                message.channel.send("You'll never give up on me :D!");
                cmd.logmsg("You'll never give up on me :D!", message, bot);
            } else {
                message.channel.send('You gave me 1 chance, and I succeded :D!');
                cmd.logmsg('You gave me 1 chance, and I succeded :D!', message, bot);
            }

        }

    }

    cmd.runHive(message, bot);

});

bot.login(process.env.Token);