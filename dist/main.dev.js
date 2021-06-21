"use strict";

var _handler = require("./modules/basic/handler.js");

var _index = require("./modules/basic/index.js");

'use strict';

var Discord = require("discord.js");

var bot = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

require('@babel/register')({
  presets: ['@babel/preset-env']
});

require('dotenv').config();

bot.on('ready', function () {
  console.log("loaded haha");
});
bot.on('message', function (msg) {
  //custom.parsem(msg)
  _handler.whatever.inputhandle(msg, bot);
});
bot.on("guildCreate", function (guild) {
  var found = false;
  guild.channels.forEach(function (channel, id) {
    if (found == true || channel.type != "text") {
      return;
    }

    if (guild.me.permissionsIn(channel).has("SEND_MESSAGES") && guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
      found = true;
      return channel.send("Thanks for the invitation! Tell the server owner to do \"dy!setup\" to generate the admin and moderator roles. The bot's moderation system won't work without them!\n(P.S: You can type \"dy!help\" after to see what I'm all about)");
    }
  });
});

_index.index.initialize(bot);

bot.login(process.env.DISCORD_TOKEN);