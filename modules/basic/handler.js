import {commands} from './index.js'
import {permissions} from '../security/permissions.js'
import {config} from '../../config/config.js'

var SelfReloadJSON = require('self-reload-json');
let servers = new SelfReloadJSON('././storage/servers.json');
var regeratorRuntime = require('regenerator-runtime')


let whatever = {};
whatever.inputhandle = async function(m,bot){
    if(m.author.id===bot.id){return}
    if(m.channel.type != "text") {return}
    var command = m.content.split(" ")[0].slice(config.prefix.length);
    var params = m.content.split(" ").slice(1);
    if(m.content.startsWith(config.prefix)){
       if(!commands[command]){ console.log('wtf'); return}
       if(!permissions.handle(m,command,bot)){ m.reply('no permissions'); return}
       commands[command].function(m,params,bot);
    }
    else return
}

whatever.embedg = function(i,c,t,d,n,e,f){
    switch(i){
        case 0: //basic embed
            const be = {
                "title": "[dmys] - " + t,
                "description": d,
                "color": c,
                "footer": {
                  "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                  "text": "[dmys]"
                },
                "fields": [{
                    "name": n,
                    "value":"```"+ e +"```",
                    "inline": true
                }]
              };
              return be
            break;
        case 1:
            const embed = {
                "title": "[dmys] - " + t,
                "description": d,
                "color": c,
                "footer": {
                  "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                  "text": f
                },
                "fields": [{
                    "name": n,
                    "value":"```"+ e +"```",
                    "inline": true
                }],
              };
              return embed
            break;
        case 2:
            const fair = {
                "title": "[dmys] - " + t,
                "description": d,
                "color": c,
                "footer": {
                  "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                  "text": "[dmys]"
                }
              };
              return fair
            break;
    } 
}
export{ whatever }