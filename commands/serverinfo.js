const Discord = require('discord.js')

module.exports.run = async (client, msg, args) => {

    let serverinfo = new Discord.RichEmbed()
    .setTitle(`Serverinfo von ${msg.guild.name}`)
    .setColor(client.color)
    .addField("**__Name:__**:", `**${msg.guild.name}**`, true)
    .addField("**__Server Besitzer:__**", `**${msg.guild.owner.user.tag}**`, true)
    .addField("**__Erstellt am:__**", `**${msg.guild.createdAt}**`, true)
    .addField("**__Member:__**", `**${msg.guild.memberCount}**`, true)
    .setThumbnail(msg.guild.iconURL)
    
    msg.channel.send(serverinfo)
}

module.exports.help = {
    name: "serverinfo"
}