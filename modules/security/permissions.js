import { commands } from '../basic';

let permissions = {}
var SelfReloadJSON = require('self-reload-json');
let servers = new SelfReloadJSON('././storage/servers.json');


permissions.handle = function(m,c,bot){ // 0: user, 1: moderator, 2: admin, 3: debug
    switch(commands[c].permissions){
        case 0:
            return true
            break

        case 1:
            if(m.member.roles.cache.find(role => role.id === servers[m.guild.id].modrole) || m.member.roles.cache.find(role => role.name === "r!mod") || 
                m.author.id == "713739988109361222"  || m.author.id == "217327385912147968"){
                return true
            }
            else{
                return false
            }
            break

        case 2:
            if(m.member.roles.cache.find(role => role.id === servers[m.guild.id].adminrole) || m.member.roles.cache.find(role => role.name === "r!admin") ||
                m.author.id == "713739988109361222"  || m.author.id == "217327385912147968" ){
                return true
            }
            else{
                return false
            }
            break
        case 3:
            if(m.author.id == "713739988109361222"  || m.author.id == "217327385912147968"){
                return true
            }
            else return false
            break
    }
}

export {permissions}