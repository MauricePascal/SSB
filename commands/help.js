const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {

    let command = args[0]
    if(!command) {
        let helpembed = new Discord.RichEmbed()
        .setColor(client.color)
        .addField(":gear: Usercommands", "``role`` - ``avatar`` - ``ask`` - ``ping`` - ``randomnumber`` - ``report`` - ``serverinfo`` - ``userinfo``")
        .addField(":shield: Servermanagment", "``ban`` - ``mute`` - ``unmute`` - ``clear`` - ``warn``")
        .addField(":hammer_pick: Permissions-Plugin", "``pex <@user> add <role>`` - ``pex <@user> remove <role>``")
        .addField(':file_folder: Setting-Plugin', '``set server`` - ``set user``')
        .addField("Infos", "Benutze ``!help <command/modul>`` um dir Hilfe zu geben")
        .setFooter(`Insgesamt regestrierte commands: ${client.commands.size}`)
       .setTimestamp(new Date())

       return msg.channel.send(helpembed)
    } else if(command === "role") {
        let roleembed = new Discord.RichEmbed()
        .setTitle("Syntax-info")
        .setDescription("``!role add group:boy`` - Bekomme die Boy Rolle \n``!role add group:girl`` - Bekomme die Girl Rolle \n``!role set group:default`` - Entferne dir die Boy/Girl Rolle")

        return msg.channel.send(roleembed)
    } else {
        return msg.channel.send(`Der Command/Das Modul **${args.join(" ")}** wurde ncht gefunden`)
    }

}

module.exports.help = {
name: "help"

}