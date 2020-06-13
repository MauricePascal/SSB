const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {

    let helpchannel = msg.guild.channels.find('name', 'infomations')

    let reason = args.join(" ")
    if(!reason) {

        let supportembed = new Discord.RichEmbed()
        .setDescription(`<@${msg.author.id}> will Support`)
        helpchannel.send(supportembed)
    } else {
        let embed = new Discord.RichEmbed()
        .setDescription(`<@${msg.author.id}> will Support \nReason: ${reason}`)
        helpchannel.send(embed)
    }

}

module.exports.help = {
    name: "support"
}