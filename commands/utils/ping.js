import { SlashCommandBuilder } from "discord.js";

export async function execute(interaction){
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true});
    await interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
}

export const data = new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pon');
/// @type int
export const cooldown = 5;

