const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {

    let kUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]))
    if(!kUser) return msg.channel.send("Please mention a user to mute")

    if(!msg.member.roles.has("622815303398850568" || "627946826317955082" || "623173133758627850" || "627946831741190154" || "623172921539690529" || "622815303398850568")) {
        return msg.channel.send("You aren`t a team member")
    };

    if(kUser.roles.has("622815303398850568" || "627946826317955082" || "623173133758627850" || "627946831741190154" || "623172921539690529" || "622815303398850568")) {
        return msg.channel.send("You can`t mute a team member")        
    } 
    
    kUser.addRole('627948687389360157', `User was muted by ${msg.author.tag}`)
    .then(console.log)
  .catch(console.error);

  let embed = new Discord.RichEmbed()
  .setDescription(`You was muted by ${msg.author.tag}`)

  msg.channel.send(`You succefully mute <@${kUser.id}>`)
  kUser.send(embed)
}

module.exports.help = {
    name: "mute"
}