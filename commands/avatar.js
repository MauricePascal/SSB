const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {
    let user;
    if (msg.mentions.users.first()) {
        user = msg.mentions.users.first();
    } else {
        user = msg.author;
    }

    let avatarembed = new Discord.RichEmbed()
    .setColor(client.color)
    .setAuthor(`Hier ist der Avatar von ${user.tag}`)
    .setImage(user.avatarURL)

    msg.channel.send(avatarembed)
}

module.exports.help = {
    name: "avatar"
}