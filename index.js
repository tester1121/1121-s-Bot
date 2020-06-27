const Discord = require('discord.js');

// bot = client
const bot = new Discord.Client();

//Don't forget to add your token!!!
const token = 'your-token-here';.

// Add the prefix.
const PREFIX = 'your-prefix-here';

const version = '0.6.5';

bot.on('ready', () =>{
    console.log('This bot is online.');
    bot.user.setActivity('as a Discord bot', { type: 'PLAYING'})
})

bot.on('message', message=>{

    let args = message.content.slice(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
           message.channel.send('pong!');
           break;
        case 'website':
            message.channel.send('your-website-here');
            break;
        case 'info':

            // Add info here.

            switch(args[1]){
                case 'version':
                    message.channel.send('Version ' + version);
                    break;
                case 'me':
                    const embed = new Discord.MessageEmbed()
                        .setTitle('User Info')
                        .addField('Name', message.author.username)
                        .addField('Version', version)
                        .addField('Current Server', message.guild.name)
                        .setColor('#0099ff')
                        .setThumbnail(message.author.displayAvatarURL)
                    message.channel.send(embed);
                    break;
                case 'bot':
                    const info_bot_embed = new Discord.MessageEmbed()
                        .setTitle('Bot Information')
                        .setColor('#FFC448')
                        .setThumbnail(bot.user.displayAvatarURL)
                        .addField('Bot Name', bot.user.username)
                        .addField('Created On', bot.user.createdAt)
                    message.channel.send(info_bot_embed)
                    break;
                case 'server':
                    const info_server_embed = new Discord.MessageEmbed()
                        .setTitle('Server Information')
                        .setThumbnail(message.guild.iconURL)
                        .addField('Server Name', message.guild.name)
                        .addField('Created On', message.guild.createdAt)
                        .addField('You Joined', message.member.joinedAt)
                        .addField('Total Members', message.guild.memberCount)
                    message.channel.send(info_server_embed)
                    break;
            }
            break;
            case '1121\'s Bot':
            const three12 = new Discord.MessageEmbed()
                .setTitle('Yes')
                .addField('Yes, I am 1121\s Bot.', '\u200b')
            message.channel.send(three12)
            break;
            
            // Add more commands here.


    }
})

bot.login(token)
