const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {

    msg.delete()

    let kUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]))
    if(!kUser) return msg.channel.send("User nicht gefunden/Bitte Tagge einen User!")
    let kReason = args.join(" ").slice(22)
    if(!kReason) return msg.channel.send("Du benötigst einen grund um jemanden zu Reporten")

    let kickEmbed = new Discord.RichEmbed()
    .setColor("#df1717")
    .addField("Reporteter User", `| ${kUser} \n| ID ${kUser.id}`)
    .addField("Grund", `| ${kReason}`)
    .addField("Reportet von", `| <@${msg.author.id}> \n| ID ${msg.author.id}`)
    .addField("Channel", `| ${msg.channel}`)
    .addField("Datum", `| ${msg.createdAt}`)

    let g = new Discord.RichEmbed()
    .setColor(client.color)
    .addField("Report", "Report wurde erfolgreich abgesendet")

    let kickChannel = msg.guild.channels.find(`name`, "reports")

    kickChannel.send(kickEmbed)

    msg.channel.send(g)
    .then(function (msg) {
        msg.delete(5000)
       });

    return
}

module.exports.help = {
    name: "report"
    
}