const { Events } = require('discord.js');

module.exports = {
    name:  Events.MessageCreate,
    async execute(message) {

        if (message.channelId ==='722706445908312176') {
            return;
        } 
        const contents = message.toString();

        const channel = message.guild.channels.fetch('722706445908312176');
        function some_func(channel){
            channel.send(contents + ` was sent by ${message.author} in ${message.channel}`);
        }
        channel.then(channel => some_func(channel))

    },
};
