let startup = {}
var SelfReloadJSON = require('self-reload-json');
var fs = require('fs')
let servers = new SelfReloadJSON('././storage/servers.json');


startup.setup = {
    description: "No description",
  permissions: 2,
  function: async function(m,bot){
    if(m.guild.available && !(m.guild.me.hasPermission(['ADMINISTRATOR']))){
        const embed = {
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
        m.channel.send({embed: embed});
        return
    }
    if(servers[m.channel.guild.id] === undefined){
        let serv = m.channel.guild;
        try{
            let modrole = serv.roles.fetch(678425668026892347);
            let adminrole = serv.roles.fetch(720454075807695021);

        let base = `{ "prefix": "dy!", "modrole": "${modrole.id}", "adminrole": "${adminrole.id}", "vip": false, "eventrole": "", "geventrole": "" }`;
        fs.readFile("././storage/servers.json", function (err, data) {
            var asfg = JSON.parse(data)
            asfg[serv.id] = JSON.parse(base)
            fs.writeFile("././storage/servers.json", JSON.stringify(asfg),()=>{})
        });
        }catch(error){
        console.log(error)
        }
        return
    }
    else{
        m.channel.send("you already set this server up dumb dumb")
    }
}}
export {startup}