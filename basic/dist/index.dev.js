"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commands = exports.index = void 0;

var fs = require('fs');

var modules = ["fun", "basic"];
var index = {};
exports.index = index;
var commands = [];
exports.commands = commands;

index.initialize = function (v) {
  var _loop = function _loop() {
    var cat = modules[i];
    fs.readdir("./modules/".concat(cat), function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        if (file === "index.js" || file === "handler.js" || file === "custom.js" || file === "permissions.js") return;

        var reqfile = require("../".concat(cat, "/").concat(file));

        Object.keys(reqfile).forEach(function (zzz) {
          var trap = Object.keys(reqfile[zzz]).length; //console.log(`${zzz} has ` + trap)

          for (var l = 0; l < trap; l++) {
            var command = Object.keys(reqfile[zzz])[l];
            var commandvalue = reqfile[zzz][command];
            commands[command] = commandvalue;
          }
        });
      });
    });
  };

  for (var i = 0; i < modules.length; i++) {
    _loop();
  }
};