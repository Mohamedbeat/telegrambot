import { Bot, webhookCallback } from "grammy";
// import * as dotenv from "dotenv"
import "dotenv/config";
// const mongoose = require("mongoose")
import * as mongoose from "mongoose";
// const env = dotenv.parse(".env")
const token = process.env.TELEGRAM_BOT_TOKEN;
const dbUri = process.env.db;

import HadithModel from "./models/hadithSchema";
import seed from "./seed";
import { randomInt } from "crypto";

// Create an instance of the `Bot` class and pass your bot token to it.

if (!dbUri) {
  throw new Error("DBUri is not defined in the environment variables.");
}
try {
  mongoose.connect(dbUri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  });

  seed();
} catch (error) {
  console.log(error);
}

if (!token) {
  throw new Error(
    "TELEGRAM_BOT_TOKEN is not defined in the environment variables."
  );
}
const bot = new Bot(token); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
const getRandomIndex = <T>(array: T[]): number => {
  if (array.length === 0) {
    throw new Error("Array is empty");
  }
  return Math.floor(Math.random() * array.length);
};

bot.command("start", async (ctx) => {
  try {
    const allHadiths = await HadithModel.find();

    // console.log(allHadiths.length);

    // const inx = randomInt(allHadiths.length - 1);
    const inx = getRandomIndex(allHadiths);
    console.log(inx);
    const hadith = allHadiths[inx];

    // const hadith = await HadithModel.findOne();

    if (!hadith) {
      throw new Error("cannot fetch data");
    }

    // const msg = `${hadith?.title} :  \n
    //  ${hadith?.text} `;

    ctx.reply(hadith.title.toString());
    ctx.reply(hadith.text.toString());
  } catch (error) {
    ctx.reply("Error from server");
  }
});
// bot.command("salam3alaykom", (ctx) => ctx.reply("و عليكم السلام و رحمة الله"));
// Handle other messages.
bot.on("message", (ctx) => {
  //   ctx.reply("Got another message!");
  ctx.reply("و عليكم السلام و رحمة الله");
  ctx.reply("ارسل كلمة /start لتحصل على حديث عشوائي");
});
// bot.on("message", async (ctx) => {
//     const message = ctx.message; // the message object
//   });

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(PORT || 3000, () => {
  console.log(`Example app listening on port ${PORT || 3000}`);
});
