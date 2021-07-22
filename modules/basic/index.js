var fs = require('fs');
import {config} from '../../config/config.js'


let modules = config.modules

let index = {}

var commands = []

index.initialize = function(v){
    for(var i=0;i<modules.length;i++){
        let cat = modules[i];
        fs.readdir(`./modules/${cat}`,function(err,files){
            if(err) throw err;
            files.forEach(function(file){
                if(file === "index.js" || file === "handler.js" || file === "custom.js" || file === "permissions.js") return;
                let reqfile = require(`../${cat}/${file}`);
                Object.keys(reqfile).forEach((zzz)=>{
                    let trap = Object.keys(reqfile[zzz]).length;
                    //console.log(`${zzz} has ` + trap)
                   for(var l=0;l<trap;l++){
                        let command = Object.keys(reqfile[zzz])[l];
                        let commandvalue = reqfile[zzz][command];
                        commands[command]=commandvalue;
                        console.log("command: " + command);
                   }
                })
            })
        });
    }
}

export {index,commands}