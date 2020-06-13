const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {

let ping = Math.round(client.ping)

    let pingembed = new Discord.RichEmbed()
    .setColor(client.color)
    .setDescription(` :clock: Hier ist mein Ping: ${ping}ms`)
    .setTimestamp(new Date())

    msg.channel.send(pingembed)
}

module.exports.help = {
    name: "ping"
}