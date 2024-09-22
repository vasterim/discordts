import { Client, GatewayIntentBits, Message, TextChannel } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

client.once('ready', () => {
  console.log(`Bot ${client.user?.tag} olarak giriş yaptı!`);
});

client.on('messageCreate', (message: Message) => {
  if (message.author.bot) return;

  if (message.channel instanceof TextChannel) {
    if (message.content === '!ping') {
      message.channel.send('Pong!');
    }
  }
});

client.login(process.env.TOKEN)
  .then(() => console.log('Başarıyla giriş yapıldı!'))
  .catch((err: Error) => console.error('Giriş yapılamadı:', err));
