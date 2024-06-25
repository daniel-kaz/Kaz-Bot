import { Events } from 'discord.js';

export const name = Events.MessageCreate

export async function execute(message) {

    if (message.channelId ==='722706445908312176') {
        return;
    } 
    const contents = message.toString();

    message.guild.channels.fetch('722706445908312176')
        .then(channel => channel.send(contents + ` was sent by ${message.author} in ${message.channel}`))
        .catch(console.error);
}
