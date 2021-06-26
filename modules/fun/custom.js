var SelfReloadJSON = require('self-reload-json');
let servers = new SelfReloadJSON('./storage/servers.json');

let custom = {}
custom.parsem = function(m){
    var command = m.content.split(" ")[0].slice(servers[m.guild.id].prefix.length);
    var params = m.content.split(" ").slice(1);
    if(servers[m.guild.id].custom[command] != undefined){
       m.channel.send(servers[m.guild.id].custom[command].text) 
    }
}

export {custom}