import { SlashCommandBuilder } from "discord.js";

export async function execute(interaction){
    await interaction.reply({content: 'pong!'});
}

export const data = new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong');
/// @type int
export const cooldown = 5;

