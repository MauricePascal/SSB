const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {

    let reasons = new Discord.RichEmbed()
    .setTitle("Reasons")
    .setDescription("1 - Beleidigung - Kick \n2 - Antisemitismus/Rassismus etc. - Ban \n3 - Channel hopping - Kick \n4 - Ban eines Moderators - Ban \n5 - Kick eines Moderators \n6 - Ban eines Admins \n7 - Kick eines Admins \n8 - Bewerungsban \n70 - Kick des Inhabers \n99 - Ban des Inhabers")
    .setFooter("It`s not allowed to show this infomations other users")

    msg.channel.send(reasons)

    if(!msg.member.roles.has("622815303398850568" || "623173702992920606" || "623172921539690529" || "627946831741190154" || "623173133758627850" || "627946826317955082")) {
        return msg.channel.send("You aren`t a team member")
    } else {
        let kReason = args[1]
        if(kReason === !"1" || !"2" || !"3" || !"4" || !"6" || !"7" || !"8" || !"70" || !"99") {
            return msg.channel.send(reasons)
        }

    let kUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]))

    if(kUser.roles.has("622815303398850568" || "623173702992920606" || "623172921539690529" || "627946831741190154" || "623173133758627850" || "627946826317955082")) {
        return msg.channel.send("You can`t ban a team member")
    } else if(kReason === "1") { 
        if(!msg.member.roles.has("622815303398850568" || "623173702992920606" || "623172921539690529" || "627946831741190154" || "623173133758627850" || "627946826317955082")) {
            return msg.channel.send("You aren`t a team member")
        } else {
            kUser.send("Du wurdest vom Server ausgeschlosen \nReasons: Beleidingung (Kick)")
            kUser.kick("Beleidigung")
        }
    } else if(kReason === "2") {
        if(!msg.member.roles.has("622815303398850568" || "623173702992920606" || "623172921539690529" || "627946831741190154" || "623173133758627850" || "627946826317955082")) {
            return msg.channel.send("You aren`t a team member")
        } else {
            kUser.send("Du wurdest vom Server ausgeschlosen \nReasons: Rassismus/Antisemitismus (Ban)")
            kUser.ban("Antisemitismus/Rassisumus etc.")
        }
    } else if(kReason === "3") {
        if(!msg.member.roles.has("622815303398850568" || "623173702992920606" || "623172921539690529" || "627946831741190154" || "623173133758627850" || "627946826317955082")) {
            return msg.channel.send("You aren`t a team member")
        } else {
            kUser.send("Du wurdest vom Server ausgeschlosen \nReasons: Channel-hooping (Kick)")
            kUser.kick("Channel-hooping")
        }
    } else if(kReason === "4") {
        if(!msg.member.roles.has("622815303398850568" || "623173702992920606" || "623172921539690529" || "627946831741190154" || "623173133758627850" || "627946826317955082")) {
            return msg.channel.send("You aren`t a team member")
        } else {
            kUser.send("Du wurdest vom Server ausgeschlosen \nReasons: Ban eines Moderators")
            kUser.ban("Ban eines Moderators")
        }
    } else if(kReason === "5") {
        if(!msg.member.roles.has("622815303398850568" || "623173702992920606" || "623172921539690529" || "627946831741190154" || "623173133758627850" || "627946826317955082")) {
            return msg.channel.send("You aren`t a team member")
        } else {
            kUser.send("Du wurdest vom Server ausgeschlosen \nReasons: Kick eines Moderators")
            kUser.kick("Kick eines Moderators")
        }
    } else if(kReason === "6") {
        if(!msg.member.roles.has("622815303398850568" || "623173702992920606" || "623172921539690529" || "627946831741190154")) {
            return msg.channel.send("You aren`t a team member")
        } else {
            kUser.send("Du wurdest vom Server ausgeschlosen \nReasons: Ban eines Admins")
            kUser.ban("Ban eines Admins")
        }
    } else if(kReason === "7") {
        if(!msg.member.roles.has("622815303398850568" || "623173702992920606" || "623172921539690529" || "627946831741190154")) {
            return msg.channel.send("You aren`t a team member")
        } else {
            kUser.send("Du wurdest vom Server ausgeschlosen \nReasons: Kick eines Admins")
            kUser.kick("Kick eines Admins")
        }
    } else if(kReason === "8") {
        if(!msg.member.roles.has("622815303398850568" || "623173702992920606" || "623172921539690529" || "627946831741190154" || "623173133758627850" || "627946826317955082")) {
            return msg.channel.send("You aren`t a team member")
        } else {
            kUser.send("Du wurdest vom Server ausgeschlosen \nReasons: Bewerungsban")
            kUser.ban("Bewerungsban")
        }
    } else if(kReason === "70") {
        if(!msg.member.roles.has("622815303398850568")) {
            return msg.channel.send("You aren`t a team member")
        } else {
            kUser.send("Du wurdest vom Server ausgeschlosen \nReasons: Kick des Inhabers")
            kUser.kick("kick des Inhabers")
        }
    } else if(kReason === "99") {
        if(!msg.member.roles.has("622815303398850568")) {
            return msg.channel.send("You aren`t a team member")
        } else {
            kUser.send("Du wurdest vom Server ausgeschlosen \nReasons: Ban des Inhabers")
            kUser.ban("Ban des Inhabers")
        }
    }
    
}}

module.exports.help = {
    name: "ban"
    
}