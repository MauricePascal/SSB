const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {

  let function1 = args[0]
  if(!function1) {
    return msg.channel.send("Etwas fehlt hier aber...")
  } else if(function1 === "add") {
    let function2 = args[1]
    if(!function2) {
      return msg.channel.send("Etwas fehlt hier aber...")
    } else if(function2 === "group:boy") {
      msg.member.addRole("628287435645911059")
      .then(console.log)
      .catch(console.error);

      msg.member.removeRole("628286931473661963")
      .then(console.log)
      .catch(console.error);

      return msg.channel.send("Du hast nun die Rolle Boy")
    } else if(function2 === "group:girl") {
      msg.member.addRole("628286931473661963")
      .then(console.log)
      .catch(console.error);

      msg.member.removeRole("628287435645911059")
      .then(console.log)
      .catch(console.error);
      
      return msg.channel.send("Du hast nun die Rolle Girl")
    } 
  } else if(function1 === "set") {
    let function3 = args[1]
    if(!function3) {
      return msg.channel.send("Etwas fehlt hier aber...")
    } else if(function3 === "group:default") {
      msg.member.removeRole("628286931473661963")
      .then(console.log)
      .catch(console.error);

      msg.member.removeRole("628287435645911059")
      .then(console.log)
      .catch(console.error);

      return msg.channel.send("Rollen auf Standard zurückgesetzt")
    }
  }

}

module.exports.help = {
    name: "role"
}