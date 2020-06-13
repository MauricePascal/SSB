const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {

    let umfrageArgs = args.join(' ')

    if(!args) {

        return msg.channel.send(' :error: | Also, also. Ich kann doch keine Leeren Nachrichten Senden!')

    } else {

        msg.delete()
        
        
        let voteembed = new Discord.RichEmbed()

        .setColor(client.color)
        .setAuthor(msg.author.tag, msg.author.avatarURL)
        .setThumbnail(msg.guild.iconURL)
        .setTitle("VOTE!")
        .setDescription(umfrageArgs)
    
    
        
        msg.channel.send(voteembed)
            .then(function (msg) {
          msg.react("👍")
          msg.react("👎")
         });
        }        
}

module.exports.help = {
    name: "poll"
}