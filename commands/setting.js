const Discord = require('discord.js')

module.exports.run = async (client, msg, args) => {

    let kUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]))

    if(!msg.member.roles.has("622815303398850568" || "623173702992920606")) {
        return msg.channel.send("ERROR - You haven`t the required Permissions to use this command")
    } else {
        if(!args[0]) {
            return msg.channel.send("ERROR - 64848.930.7283")
        } else if(args[0] === "server") {
            if(!args[1]) {
                return msg.channel.send("ERROR - 7484.4858.7585")
            } else if(args[1] === "afk") {
                if(!args[2]) {
                    return msg.channel.send("ERROR - 8485.9394.8599")
                } else if(args[2] === "channel") {
                    if(!args[3]) {
                        return msg.channel.send("ERROR - 488.9394.849")
                    } else {
                        let afkchannelargs = args[3]
                        msg.guild.setAFKChannel(afkchannelargs)
                        .then(console.log)
                        .catch(console.error);

                        return msg.channel.send(`AFK Channel set to <#${afkchannelargs}>`)
                    }
                } else if(args[2] === "timeout") {
                    if(!args[3]) {
                        return msg.channel.send("ERROR - 884.8329.8389")
                    } else if(args[3] === "info") {
                        let embed = new Discord.RichEmbed()
                        .setTitle("Times")
                        .setDescription("1 - 1 Minute\n5 - 5 Minuten\n15 - 15 Minuten\n30 - 30 Minuten\n60 - 1 Stunde")

                        return msg.channel.send(embed)
                    } else if(args[3] === "1") {
                        msg.guild.setAFKTimeout(60)
                        .then(console.log)
                        .catch(console.error);

                        return msg.channel.send("AFK Timeout set to **1 minute**")
                    } else if(args[3] === "5") {
                        msg.guild.setAFKTimeout(300)
                        .then(console.log)
                        .catch(console.error);

                        return msg.channel.send("AFK Timeout set to **5 minutes**")
                    } else if(args[3] === "15") {
                        msg.guild.setAFKTimeout(900)
                        .then(console.log)
                        .catch(console.error);

                        return msg.channel.send("AFK Timeout set to **15 minutes**")
                    } else if(args[3] === "30") {
                        msg.guild.setAFKTimeout(1800)
                        .then(console.log)
                        .catch(console.error);

                        return msg.channel.send("AFK Timeout set to **30 minutes**")
                    } else if(args[3] === "60") {
                        msg.guild.setAFKTimeout(3600)
                        .then(console.log)
                        .catch(console.error);

                        return msg.channel.send("AFK Timeout set to **1 hour**")
                    }
                }
            } else if(args[1] === "verify") {
                if(!args[2]) {
                    return msg.channel.send("ERROR - 8484.393.8398")
                } else if(args[2] === "info") {
                    let verifyembed = new Discord.RichEmbed()
                    .setTitle("Verify")
                    .setDescription("1 - None\n2 - Low\n3 - Medium\n4 - High\nExtrem high")

                    return msg.channel.send(verifyembed)
                } else if(args[2] === "1") {
                    msg.guild.setVerificationLevel(0)
                    .then(console.log)
                    .catch(console.error);

                    return msg.channel.send("Verify-level set to **None**")
                } else if(args[2] === "2") {
                    msg.guild.setVerificationLevel(1)
                    .then(console.log)
                    .catch(console.error);

                    return msg.channel.send("Verify-level set to **Low**")
                } else if(args[2] === "3") {
                    msg.guild.setVerificationLevel(2)
                    .then(console.log)
                    .catch(console.error);

                    return msg.channel.send("Verify-level set to **Medium**")
                } else if(args[2] === "4") {
                    msg.guild.setVerificationLevel(3)
                    .then(console.log)
                    .catch(console.error);

                    return msg.channel.send("Verify-level set to **High**")
                } else if(args[2] === "5") {
                    msg.guild.setVerificationLevel(4)
                    .then(console.log)
                    .catch(console.error);

                    return msg.channel.send("Verify-level set to **Extrem high**")
                }
            }
        } else if(args[0] === "user") {
            if(!args[1]) {
                return msg.channel.send("ERROR - 8484.040.848")
            } else if(args[1] === "nickname") {
                if(!args[2]) {
                    return msg.channel.send("ERROR - 848.939.2002")
                } else if(args[2] === "set")  {
                    if(!args[3]) {
                        return msg.channel.send("ERROR - 848.939.939")
                    } else {
                        if(!kUser) {
                            return msg.channel.send("ERROR - 747.939.939")
                        } else if(!args[4]) {
                            return msg.channel.send("ERROR - 8484.393.939")
                        } else {
                            kUser.setNickname(args[4])
                            .then(console.log)
                            .catch(console.error);

                            return msg.channel.send(`Nickname by <@${kUser.id}> was changed to **${args[4]}**`)
                        }
                    }
                } else if(args[2] === "reset") {
                    if(!args[3]) {
                        return msg.channel.send("ERROR - 848.939.939")
                    } else if(!kUser) {
                        return msg.channel.send("ERROR - 9393.9393.939")
                    } else {
                        kUser.setNickname("")
                        .then(console.log)
                        .catch(console.error);

                        return msg.channel.send(`Nickname by <@${kUser.id}> was reseted by ${msg.author.tag}`)
                    }
                } 
            } else if(args[1] === "mute") {
                if(!args[2]) {
                    return msg.channel.send("ERROR - 848.9393.9393")
                } else if(!kUser) {
                    return msg.channel.send("ERROR - 83883.3993.030")
                } else {
                    if(!args[3]) {
                        return msg.channel.send("ERROR - 8383.939.030")
                    } else if(args[3] === "true") {
                        kUser.setMute(true)
                        .then(console.log)
                        .catch(console.error);
                    } else if(args[3] === "false") {
                        kUser.setMute(false)
                        .then(console.log)
                        .catch(console.error);
                    } else {
                        return msg.channel.send("ERROR - 8488.030.939")
                    }
                }
            } else if(args[1] === "deaf") {
                if(!args[2]) {
                    return msg.channel.send("ERROR - 838.0390.02")
                } else if(!kUser) {
                    return msg.channel.send("ERROR - 848.3.939")
                } else {
                    if(!args[3]) {
                        return msg.channel.send("ERROR - 4848.9339.838")
                    } else if(args[3] === "true") {
                        kUser.setDeaf(true)
                        .then(console.log)
                        .catch(console.error)
                    } else if(args[3] === "false") {
                        kUser.setDeaf(false)
                        .then(console.log)
                        .catch(console.error);
                    } else {
                        return msg.channel.send("ERROR - 848.939.939")
                    }
                }
            }
        }
    }

}

module.exports.help = {
    name: "set"
}