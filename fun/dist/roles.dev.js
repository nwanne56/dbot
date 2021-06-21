"use strict";

var _handler = require("../basic/handler.js");

var roles = {};
roles.add = {
  description: "Adds role.",
  permissions: 0,
  "function": function _function(m, params) {
    var name, rolecolor, i, filter, emb, sent, newrole;
    return regeneratorRuntime.async(function _function$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = "";
            rolecolor = "";

            for (i = 1; i < params.length; i++) {
              name += params[i] + " ";
            }

            name = name.replace(/"|'/g, '');

            filter = function filter(m) {
              return m.author.id === message.author.id;
            };

            emb = _handler.whatever.embedg(0, 777777, "New Role!", " ", "Say the hex code of the color you want your role to be.", "The name of this role is " + name + ".\n If you want to change the name, say dy!rename " + name + ".\n ");
            _context.next = 8;
            return regeneratorRuntime.awrap(m.channel.send({
              embed: emb
            }).then(function () {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
              }).then(function (message) {
                message = message.first();

                if (message.content.toUpperCase().startsWith("#") || message.content.toUpperCase().length == 6) {
                  rolecolor = message.content;
                  message.channel.send("Gotcha.");
                } else {
                  message.channel.send("This isn't a hex code!");
                }
              })["catch"](function (collected) {
                message.channel.send("You didn't send anything for the role color... just recolor the role");
                rolecolor = "#FFFFFF";
              });
            }));

          case 8:
            sent = _context.sent;
            _context.prev = 9;
            _context.next = 12;
            return regeneratorRuntime.awrap(bot.guilds.cache.get(serv.id).roles.create({
              data: {
                name: name,
                position: 0
              }
            }));

          case 12:
            newrole = _context.sent;
            newrole.setMentionable(false);
            newrole.setPermissions(0);
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](9);
            console.log(_context.t0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[9, 17]]);
  }
};
roles.rename = {
  description: "Renames role.",
  permissions: 0,
  "function": function _function(m, params) {
    var name, newname, i, filter, emb, sent;
    return regeneratorRuntime.async(function _function$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            name = "";
            newname = "";

            for (i = 1; i < params.length; i++) {
              name += params[i] + " ";
            }

            name = name.replace(/"|'/g, '');
            role = m.channel.guild.roles.cache.find(name);

            filter = function filter(m) {
              return m.author.id === message.author.id;
            };

            emb = _handler.whatever.embedg(0, 777777, "Rename Role!", " ", "Say the new name of your role.", "The name of this role is currently " + name + ".");
            _context2.next = 9;
            return regeneratorRuntime.awrap(m.channel.send({
              embed: emb
            }).then(function () {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
              }).then(function (message) {
                message = message.first();
                newname = message.content;
                newname = newname.replace(/"|'/g, '');
              })["catch"](function (collected) {
                message.channel.send("You didn't send anything for the new name... just retry");
              });
            }));

          case 9:
            sent = _context2.sent;

            try {
              role.setName(newname);
            } catch (error) {
              console.log(error);
            }

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
roles.recolor = {
  description: "Recolors role.",
  permissions: 0,
  "function": function _function(m, params) {
    var name, newname, i, filter, emb, sent;
    return regeneratorRuntime.async(function _function$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            name = "";
            newname = "";

            for (i = 1; i < params.length; i++) {
              name += params[i] + " ";
            }

            name = name.replace(/"|'/g, '');
            role = m.channel.guild.roles.cache.find(name);

            filter = function filter(m) {
              return m.author.id === message.author.id;
            };

            emb = _handler.whatever.embedg(0, 777777, "Recolor Role!", " ", "Say the new hex code color of your role.", "The color of this role is currently " + role.color + ".");
            _context3.next = 9;
            return regeneratorRuntime.awrap(m.channel.send({
              embed: emb
            }).then(function () {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
              }).then(function (message) {
                message = message.first();

                if (message.content.toUpperCase().startsWith("#") || message.content.toUpperCase().length == 6) {
                  newcolor = message.content;
                  message.channel.send("Gotcha.");
                } else {
                  message.channel.send("This isn't a hex code!");
                  newcolor = "#FFFFFF";
                }
              })["catch"](function (collected) {
                message.channel.send("You didn't send anything for the new color... just retry");
              });
            }));

          case 9:
            sent = _context3.sent;

            try {
              role.setColor(newcolor);
            } catch (error) {
              console.log(error);
            }

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};