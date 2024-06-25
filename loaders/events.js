import { join, dirname } from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function loadEvents(client) {
    const eventsPath = join(__dirname, 'events');
    const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

    for (const eventFile of eventFiles) {
        const filePath = join(eventsPath, eventFile);
        const event = await import(filePath);
        console.log(event);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    };
}
