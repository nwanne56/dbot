"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whatever = void 0;

var _index = require("../basic/index.js");

var _permissions = require("../security/permissions.js");

var _config = require("../../config/config.js");

var SelfReloadJSON = require('self-reload-json');

var servers = new SelfReloadJSON('././storage/servers.json');

var regeratorRuntime = require('regenerator-runtime');

var whatever = {};
exports.whatever = whatever;

whatever.inputhandle = function _callee(m, bot) {
  var command, params;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(m.author.id === bot.id)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          if (!(m.channel.type != "text")) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return");

        case 4:
          command = m.content.split(" ")[0].slice(_config.config.prefix.length);
          params = m.content.split(" ").slice(1);

          if (!m.content.startsWith(_config.config.prefix)) {
            _context.next = 16;
            break;
          }

          if (_index.commands[command]) {
            _context.next = 10;
            break;
          }

          console.log('wtf');
          return _context.abrupt("return");

        case 10:
          if (_permissions.permissions.handle(m, command, bot)) {
            _context.next = 13;
            break;
          }

          m.reply('no permissions');
          return _context.abrupt("return");

        case 13:
          _index.commands[command]["function"](m, params, bot);

          _context.next = 17;
          break;

        case 16:
          return _context.abrupt("return");

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
};

whatever.embedg = function (i, c, t, d, n, e, f) {
  switch (i) {
    case 0:
      //basic embed
      var be = {
        "title": "[ᶠᵃʳᵗg] - " + t,
        "description": d,
        "color": c,
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": "[dmys]"
        },
        "fields": [{
          "name": n,
          "value": "```" + e + "```",
          "inline": true
        }]
      };
      return be;
      break;

    case 1:
      var embed = {
        "title": "[ᶠᵃʳᵗg] - " + t,
        "description": d,
        "color": c,
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": f
        },
        "fields": [{
          "name": n,
          "value": "```" + e + "```",
          "inline": true
        }]
      };
      return embed;
      break;

    case 2:
      var fair = {
        "title": "[ᶠᵃʳᵗg] - " + t,
        "description": d,
        "color": c,
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": "[dmys]"
        }
      };
      return fair;
      break;
  }
};