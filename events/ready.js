import { Events} from 'discord.js';

export function execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
}
export const name = Events.ClientReady;
export const once = true;

