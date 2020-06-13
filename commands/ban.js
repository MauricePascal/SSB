const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {

    let kUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]))
    if(!kUser) return msg.channel.send("User nicht gefunden/Bitte Tagge einen User!")
    let kReason = args.join(" ").slice(22)
    if(!msg.member.hasPermission("BAN_MEMBERS", "ADMINSTRATOR")) return msg.channel.send("Du hast nicht die nötigen berechtigungen. Du benötigst: ``BAN_MEMBERS`` oder ``ADMINSTRATOR``")
    if(kUser.hasPermission("KICK_MEMBERS", "ADMINSTRATOR", "BAN_MEMBERS", "MANAGE_SERVER")) return msg.channel.send("Du kannst keine Moderatoren/Admins bannen")
    if(!kReason) return msg.channel.send("Du benötigst einen grund um jemanden zu bannen")

    kUser.send(`Hoppla, du wurdest von **${msg.guild.name}** gebannt aufgrund von **${kReason}**`)

    let kickEmbed = new Discord.RichEmbed()
    .setTitle("Ban")
    .setColor("#df1717")
    .addField("Gebannter User", `${kUser} \n| ID ${kUser.id}`)
    .addField("Grund", kReason)
    .addField("Moderator", `<@${msg.author.id}> \n| ID ${msg.author.id}`)
    .addField("Channel", msg.channel)
    .addField("Datum", msg.createdAt)

    if(!kickChannel) return msg.channel.send("Ich konnte keinen channel mit dem namen ``modlog`` finden. Erstelle diesen channel um diesen command nutzen zu können")

    msg.guild.member(kUser).ban(kReason)
    kickChannel.send(kickEmbed)
    msg.channel.send(`Du hast ${kUser} erfolgreich wegen ${kReason} gebannt`)

    return
}

module.exports.help = {
    name: "kick"
    
    }