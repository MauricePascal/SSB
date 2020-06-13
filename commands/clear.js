const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {

    amt = args.join(" ")
    msg.delete()

    if(!msg.member.roles.has("622815303398850568" || "623173702992920606" || "622815303398850568" || '623172921539690529' || '627946831741190154' || '623173133758627850' || '627946826317955082' || '622815303398850568' || '623173702992920606')) {
        return msg.channel.send("You aren`t a team member!")
    }

    if (!amt) {
        msg.channel.send("You must give me a amount")
    }

    msg.delete()
    .catch(console.error)

    msg.channel.bulkDelete(amt)
    .catch(console.error);

}

module.exports.help = {
    name: "clear"
}
