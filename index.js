import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { loadSlashCommands } from './loaders/commands.js';
import 'dotenv/config';
import { loadEvents } from './loaders/events.js';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const token = process.env.DISCORD_TOKEN;
// Adding comamnds file to the bot
client.commands = new Collection();

client.cooldowns = new Collection();

// Importing Events from the events folder

await loadSlashCommands(client);
await loadEvents(client)
client.login(token);

// Log Interactions

