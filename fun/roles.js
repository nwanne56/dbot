import {whatever} from '../basic/handler.js'

let roles = {}

roles.add = 
{
    description: "Adds role.",
    permissions: 0,
    function: async function(m,params)
    {
        var name = "";
        var rolecolor = "";
        for(var i = 1; i < params.length; i++)
        {
            name += (params[i] + " ");
        }
        name = name.replace(/"|'/g, '');

        const filter = (m) => m.author.id === message.author.id;

        let emb = whatever.embedg(0,777777,"New Role!"," ","Say the hex code of the color you want your role to be.","The name of this role is " + name + ".\n If you want to change the name, say dy!rename " + name + ".\n ");
        let sent = await m.channel.send({embed: emb}).then(() => 
        {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
                })
                .then(message => {
                    message = message.first()
                    if (message.content.toUpperCase().startsWith("#") || message.content.toUpperCase().length == 6)
                    {
                        rolecolor = message.content;
                        message.channel.send("Gotcha.");
                    } 
                    else 
                    {
                        message.channel.send("This isn't a hex code!");
                    }
                })
              .catch(collected => {
                    message.channel.send("You didn't send anything for the role color... just recolor the role");
                    rolecolor = "#FFFFFF";
              });
        });

        try
        {
            let newrole = await  bot.guilds.cache.get(serv.id).roles.create
            ({
                data:
                {
                    name: name,
                    position: 0
                }
            });

            newrole.setMentionable(false);
            newrole.setPermissions(0);
        }
        catch(error)
        {
            console.log(error);
        }
    }

}

roles.rename = 
{
    description: "Renames role.",
    permissions: 0,
    function: async function(m,params)
    {
        var name = "";
        var newname = "";
        for(var i = 1; i < params.length; i++)
        {
            name += (params[i] + " ");
        }
        name = name.replace(/"|'/g, '');

        role = m.channel.guild.roles.cache.find(name);

        const filter = (m) => m.author.id === message.author.id;

        let emb = whatever.embedg(0,777777,"Rename Role!"," ","Say the new name of your role.","The name of this role is currently " + name + ".");
        let sent = await m.channel.send({embed: emb}).then(() => 
        {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
                })
                .then(message => {
                    message = message.first()
                    newname = message.content;
                    newname = newname.replace(/"|'/g, '');
                })
              .catch(collected => {
                    message.channel.send("You didn't send anything for the new name... just retry");
              });
        });

        try
        {
            role.setName(newname);
        }
        catch(error)
        {
            console.log(error);
        }
    }
  }

roles.recolor = {
    description: "Recolors role.",
    permissions: 0,
    function: async function(m,params)
    {
        var name = "";
        var newname = "";
        for(var i = 1; i < params.length; i++)
        {
            name += (params[i] + " ");
        }
        name = name.replace(/"|'/g, '');

        role = m.channel.guild.roles.cache.find(name);

        const filter = (m) => m.author.id === message.author.id;

        let emb = whatever.embedg(0,777777,"Recolor Role!"," ","Say the new hex code color of your role.","The color of this role is currently " + role.color + ".");
        let sent = await m.channel.send({embed: emb}).then(() => 
        {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
                })
                .then(message => {
                    message = message.first()
                    if (message.content.toUpperCase().startsWith("#") || message.content.toUpperCase().length == 6)
                    {
                        newcolor = message.content;
                        message.channel.send("Gotcha.");
                    } 
                    else 
                    {
                        message.channel.send("This isn't a hex code!");
                        newcolor = "#FFFFFF";
                    }
                })
              .catch(collected => {
                    message.channel.send("You didn't send anything for the new color... just retry");
              });
        });

        try
        {
            role.setColor(newcolor);
        }
        catch(error)
        {
            console.log(error);
        }
    }
}