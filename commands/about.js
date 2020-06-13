const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {

    let helpembed = new Discord.RichEmbed()
    .setColor(client.color)
    .setAuthor(msg.author.tag, msg.author.avatarURL)
    .addField('**__ABOUT__**', '**_____________**')
    .addField('Version:', '**1.0.0**')
    .addField('Nächste Version:', '**1.0.1**')
    .addField('Entwickler:', 'Maurice-Pascal#5389')
    .addField('IDE:', '**Visual Studio Code**')
    .addField('Libary:', '**JavaScript/Node,js**')
    .addField("API", "**Discord.js**")

    msg.channel.send(helpembed)

}

module.exports.help = {
    name: "about"
}