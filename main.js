('use strict');
const Discord = require("discord.js");
const bot = new Discord.Client();

require('@babel/register')({presets: ['@babel/preset-env']});
require('dotenv').config();


import {whatever} from './modules/basic/handler.js'
import {index} from './modules/basic/index.js'

bot.on('ready', () => {
  console.log(`loaded haha`);
});

bot.on('message', msg => {
    //custom.parsem(msg)
    msg.reply("pong");
    whatever.inputhandle(msg,bot)
});

bot.on("guildCreate", guild => {
    var found = false;
    guild.channels.forEach(function(channel, id) {
        if(found == true || channel.type != "text") {
          return;
        }
        if(guild.me.permissionsIn(channel).has("SEND_MESSAGES") && guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
          found = true;
          return channel.send("Thanks for the invitation! Tell the server owner to do \"dy!setup\" to generate the admin and moderator roles. The bot's moderation system won't work without them!\n(P.S: You can type \"dy!help\" after to see what I'm all about)");
        }
    })
  });

index.initialize(bot);
bot.login(process.env.TOKEN)