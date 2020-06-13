const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {

    if(!args[2]) return msg.channel.send("Frage mich etwas vernümpftiges!")
    let replies = ["Ja", "Nein", "Vielleicht", "Frage mich später erneut", "Das wüsstest du wohl gerne xD", "Sag ich dir nicht :D", "Eventuell"]

    let result = Math.floor((Math.random() * replies.length))
    
    msg.channel.send(replies[result])
}

module.exports.help = {
name: "ask"

}