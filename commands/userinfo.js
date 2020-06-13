const Discord = require("discord.js");
const moment = require("moment")

module.exports.run = async (client, msg, args) => {
    let user;
    if (msg.mentions.users.first()) {
        user = msg.mentions.users.first();
    } else {
        user = msg.author;
    }

    const member = msg.guild.member(user);

    const embed = new Discord.RichEmbed()
    .setColor(client.color)
    .setThumbnail(msg.author.avatarURL)
    .setTitle(`${user.tag}`)
    .addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : 'Kein Nickname'}`, true)
    .addField("Erstellt am", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("Bot", `${user.bot !== false ? `${user.bot}` : 'Kein Bot'}`, true)
    .addField("Status", `${user.presence.status}`, true)
    .addField("Game", `${user.presence.game ? user.presence.game.name : 'Kein Spiel am spielen'}`, true)
    .addField("Roles", member.roles.map(roles => `<@&${roles.id}>`).join(', '), true)

    msg.channel.send({embed})

}

module.exports.help = {
    name: "userinfo"
    
}