import TelegramBot from "node-telegram-bot-api";
import fs from "fs";

const token = fs.readFileSync(process.argv[2]).toString();

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // send a message to the chat acknowledging receipt of their message
    console.log(chatId);
    // bot.sendMessage(chatId, 'Received your message');
    bot.sendMessage(chatId, text);
});