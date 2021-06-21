"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.custom = void 0;

var SelfReloadJSON = require('self-reload-json');

var servers = new SelfReloadJSON('./storage/servers.json');
var custom = {};
exports.custom = custom;

custom.parsem = function (m) {
  var command = m.content.split(" ")[0].slice(servers[m.guild.id].prefix.length);
  var params = m.content.split(" ").slice(1);

  if (servers[m.guild.id].custom[command] != undefined) {
    m.channel.send(servers[m.guild.id].custom[command].text);
  }
};