
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('server').setDescription("returns information about the server"),

    async execute(interaction) {
        await interaction.reply(`The server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
    },
}

