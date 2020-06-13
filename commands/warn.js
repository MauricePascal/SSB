const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {

    if(!msg.member.roles.has("622815303398850568" || "623172921539690529" || "627946831741190154" || "623173133758627850" || "627946826317955082")) {
        return msg.channel.send("You aren`t a moderator")        
    }

    let kUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]))
    if(!kUser) {
        return msg.channel.send("Who want you to warn?")
    }

    let kReason = args[0]
    if(!kReason) {
        return msg.channel.send("Why do you warn this user?")
    }

    let warnembed = new Discord.RichEmbed()
    .addField(`You was warned by ${msg.author.name}`, `Reason: ${kReason}`)

    kUser.send(warnembed)

    msg.channel.send(`You succefully warned <@${kUser.id}>`)

}

module.exports.help = {
    name: "warn"
}