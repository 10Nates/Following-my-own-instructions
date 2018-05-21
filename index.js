const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
const args = message.content.slice().trim().split(/ +/g);
const command = args.shift();

if(command === '!BotTest!') {
    console.log(message.content, '-', message.author.username);
    message.channel.send('Hello, '+message.author.username+', You gave me this command: '+message.content);
}

if(command === '!BotTest:' ) {
    console.log(message.content, '-', message.author.username);
    if(args[0] === '1') {
        if(args[1] === 'million') {
            message.channel.send("You'll never give up on me :D!");
        } else {
            message.channel.send('You gave me 1 chance, and I succeded :D!');
        }

    }

}

});

bot.login(process.env.Token);