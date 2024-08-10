import { Bot, webhookCallback } from "grammy";
// import * as dotenv from "dotenv"
import "dotenv/config";

// const env = dotenv.parse(".env")
const token = process.env.TELEGRAM_BOT_TOKEN;
// Create an instance of the `Bot` class and pass your bot token to it.
if (!token) {
  throw new Error(
    "TELEGRAM_BOT_TOKEN is not defined in the environment variables."
  );
}
const bot = new Bot(token); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Let us begin."));
bot.command("salam3alaykom", (ctx) => ctx.reply("و عليكم السلام و رحمة الله"));
// Handle other messages.
bot.on("message", (ctx) => {
  //   ctx.reply("Got another message!");
  ctx.reply("و عليكم السلام و رحمة الله");
});
// bot.on("message", async (ctx) => {
//     const message = ctx.message; // the message object
//   });

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();

export default webhookCallback(bot, "std/http");
export const config = {
  runtime: "edge",
};
