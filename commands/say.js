const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {

  msg.delete()

  let sayargs = args.join(" ")

  if(!msg.member.roles.has("622815303398850568")) {
    msg.author.send("You can`t use the say command!")
  } else if(!args) {
    return msg.channel.send("You must give arguments")
  } else {
    msg.channel.send(sayargs)
  }

}

module.exports.help = {
    name: "say"
}