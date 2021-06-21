"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startup = void 0;
var startup = {};
exports.startup = startup;

var SelfReloadJSON = require('self-reload-json');

var fs = require('fs');

var servers = new SelfReloadJSON('././storage/servers.json');
starup.setup = {
  description: "No description",
  permissions: 2,
  "function": function _function(m, bot) {
    var embed, serv, modrole, adminrole, base;
    return regeneratorRuntime.async(function _function$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(m.guild.available && !m.guild.me.hasPermission(['ADMINISTRATOR']))) {
              _context.next = 4;
              break;
            }

            embed = {
              "title": "i need administrative perms!",
              "description": "Please edit your generated roles accordingly.",
              "color": 11227664,
              "footer": {
                "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                "text": "BOTTOM TEXT"
              },
              "image": {
                "url": "https://i.imgur.com/3P8rZAH.png"
              }
            };
            m.channel.send({
              embed: embed
            });
            return _context.abrupt("return");

          case 4:
            if (!(servers[m.channel.guild.id] === undefined)) {
              _context.next = 10;
              break;
            }

            serv = m.channel.guild;

            try {
              modrole = serv.roles.fetch(678425668026892347);
              adminrole = serv.roles.fetch(720454075807695021);
              base = "{ \"prefix\": \"r!\", \"modrole\": \"".concat(modrole.id, "\", \"adminrole\": \"").concat(adminrole.id, "\", \"vip\": false, \"eventrole\": \"\", \"geventrole\": \"\" }");
              fs.readFile("././storage/servers.json", function (err, data) {
                var asfg = JSON.parse(data);
                asfg[serv.id] = JSON.parse(base);
                fs.writeFile("././storage/servers.json", JSON.stringify(asfg), function () {});
              });
            } catch (error) {
              console.log(error);
            }

            return _context.abrupt("return");

          case 10:
            m.channel.send("you already set this server up dumb dumb");

          case 11:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};