const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {

    let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]))
    
    if(!msg.member.roles.has("622815303398850568")) {
        return msg.channel.send("Only <@622784776234991626> can use this plugin")
    } else if(!user) {
        return msg.channel.send("ERROR - Who will beome the role?")
    } else {
        let action = args[1]
        if(!action) {
            return msg.channel.send("ERROR - What must i do?")
        } else {
            if(action === "add") {
                let role1 = args[2]
                if(!role1) {
                    return msg.channel.send("ERROR - What permission becomes the user?")
                } else {
                if(role1 === "group:trail-admin") {
                    user.addRole("627946831741190154")
                    .then(console.log)
                    .catch(console.error);
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if (role1 === "group:trail-mod") {
                    user.addRole("627946826317955082")
                    .then(console.log)
                    .catch(console.error);
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if(role1 === "group:mod") {
                    user.addRole("623173133758627850")
                    .then(console.log)
                    .catch(console.error);
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if(role1 === "group:admin") {
                    user.addRole("623172921539690529")
                    .then(console.log)
                    .catch(console.error);
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if(role1 === "group:family") {
                    user.addRole("623173443189342218")
                    .then(console.log)
                    .catch(console.error);
                    return msg.channel.send(`Pex Pemrission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if(role1 === "group:friend") {
                    user.addRole("623173569685356556")
                    .then(console.log)
                    .catch(console.error);
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if(role1 === "group:boy") {
                    user.addRole("628287435645911059")
                    .then(console.log)
                    .catch(console.error)
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if(role1 === "group:girl") {
                    user.addRole("628286931473661963")
                    .then(console.log)
                    .catch(console.error)
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                }
            }
            } else if(action === "remove") {
                let role2 = args[2]
                if(!role2) {
                    return msg.channel.send("ERROR - What permission becomes the user?")
                } else {
                if(role2 === "group:trail-admin") {
                    user.removeRole("627946831741190154")
                    .then(console.log)
                    .catch(console.error);
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if (role2 === "group:trail-mod") {
                    user.removeRole("627946826317955082")
                    .then(console.log)
                    .catch(console.error);
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if(role2 === "group:mod") {
                    user.removeRole("623173133758627850")
                    .then(console.log)
                    .catch(console.error);
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if(role2 === "group:admin") {
                    user.removeRole("623172921539690529")
                    .then(console.log)
                    .catch(console.error);
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if(role2 === "group:family") {
                    user.removeRole("623173443189342218")
                    .then(console.log)
                    .catch(console.error);
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if(role2 === "group:friend") {
                    user.removeRole("623173569685356556")
                    .then(console.log)
                    .chatch(console.error);
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if(role1 === "group:boy") {
                    user.removeRole("628287435645911059")
                    .then(console.log)
                    .catch(console.error)
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                } else if(role1 === "group:girl") {
                    user.removeRole("628286931473661963")
                    .then(console.log)
                    .catch(console.error)
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                }
            }
            } else if(action === "set") {
                let role3 = args[2]

                if(!role3) {
                    return msg.channel.send("ERROR - What permissions becomes the user?")
                } else if(role3 === "group:default") {
                    user.removeRoles(['623172921539690529', '627946831741190154', '623173133758627850', '627946826317955082', '628287435645911059', '628286931473661963', '623173443189342218', '623173569685356556'])
                    .then(console.log)
                    .catch(console.error);
                    return msg.channel.send(`Pex Permission for <@${user.id}> was been changed by ${msg.author.tag}`)
                }
            }
        }
    }
}

module.exports.help = {
    name: "px"
}