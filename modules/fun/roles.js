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
        for(var i = 0; i < params.length; i++)
        {
            name += (params[i] + " ");
        }
        name = name.substring(0, name.length - 1);
        
        const filter = (m) => m.author.id === m.author.id;

        let emb = whatever.embedg(0,777777,"Add Role!"," ","The name of this role is \"" + name + "\".\n If you want to change its name, say dy!rename " + name + ".","Say the hex code of the color you want your role to be.");
        let sent = await m.channel.send({embed: emb}).then(() => 
        {
            m.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
                })
                .then(message => {
                    message = message.first();
                    message.content = message.content.replace("#","");
                    if (message.content.toUpperCase().length == 6)
                    {
                        rolecolor = message.content;
                        try
                        {
                            m.guild.roles.create
                            ({
                                data:
                                {
                                    name: name,
                                    position: 0,
                                    color: rolecolor,
                                    permissions: 0,
                                    setMentionable: false
                                }
                            })
                            .then(role => {m.member.roles.add(role).catch((e) => console.error(e))
                            })
                            .then(role2 => {m.channel.send(
                                `The role \"${name}\" has been added to <@${m.author.id}>.`)
                            });
                        }
                        catch(error)
                        {
                            console.error(error);
                        }                        
                    } 
                    else 
                    {
                        message.channel.send("This isn't a hex code! Try again.");
                    }
                })
              .catch(collected => {
                    message.channel.send("You didn't send anything for the role color... just recolor the role");
              });
        });

       
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
        for(var i = 0; i < params.length; i++)
        {
            name += (params[i] + " ");
        }
        name = name.substring(0, name.length - 1);

        var role =  m.guild.roles.cache.find(role => role.name === name);
        if(!role)
        {
            m.channel.send(`The role \"${name}\" doesn't exist. Try again?`);
            return;
        }

        const filter = (m) => m.author.id === m.author.id;

        let emb = whatever.embedg(0,777777,"Rename Role!"," ","The name of this role is currently \"" + name + "\".","Say the new name of your role.");
        let sent = await m.channel.send({embed: emb}).then(() => 
        {
            m.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
                })
                .then(message => {
                    message = message.first()
                    newname = message.content;          
                    try
                    {
                        role.setName(newname)
                        .then(role => {m.channel.send(
                            `The role \"${name}** has been renamed to \"${newname}.\"`)
                        });
                    }
                    catch(error)
                    {
                        console.error(error);
                    }
                })
                .catch(collected => {
                    m.channel.send("You didn't send anything for the new name... just retry");
                });
        });

    }
  }

roles.recolor = {
    description: "Recolors role.",
    permissions: 0,
    function: async function(m,params)
    {
        var name = "";
        var newcolor = "";
        for(var i = 0; i < params.length; i++)
        {
            name += (params[i] + " ");
        }
        name = name.substring(0, name.length - 1);

        var role =  m.guild.roles.cache.find(role => role.name === name);
        if(!role)
        {
            m.channel.send(`The role \"${name}\" doesn't exist. Try again?`);
            return;
        }

        const filter = (m) => m.author.id === m.author.id;

        let emb = whatever.embedg(0,777777,"Recolor Role!"," ","The color of this role is currently " + role.color + ".","Say the new hex code color of your role.");
        let sent = await m.channel.send({embed: emb}).then(() => 
        {
            m.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
                })
                .then(message => {
                    message = message.first();
                    newcolor = message.content;
                    newcolor = newcolor.replace("#", "");
                    if (newcolor.toUpperCase().length == 6)
                    {
                        try
                        {
                            role.setColor(newcolor)
                            .then(role => {m.channel.send(
                                `The role \"${name}\" has been recolored **#${newcolor}.**`)
                            });
                        }
                        catch(error)
                        {
                            console.log(error);
                        }                     
                    } 
                    else 
                    {
                        m.channel.send("This isn't a hex code! Try again.");
                    }
                })
                .catch(collected => {
                    m.channel.send("You didn't send anything for the new color... just retry");
                });
        });        
    }
}

export {roles}