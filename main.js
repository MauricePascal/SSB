const Discord = require("discord.js")
const fs      = require('fs')

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

var client = new Discord.Client()

client.color = 0xa40bff

client.login(config.token)


client.on('ready', () => {
    console.log(`Eingeloggt als ${client.user.username}!`)
    console.log(` `)
    client.user.setActivity('Loading...', { type: 'WATCHING' })
    client.user.setStatus('online') //Kann online sein
})


client.commands = new Discord.Collection()

client.on('ready', () => {
    console.log(`Eingeloggt als ${client.user.username}!`)
    console.log(` `)
    client.user.setActivity('Loading...', { type: 'PLAYING' })
    client.user.setStatus('online') //Kann online sein
})


client.commands = new Discord.Collection()


client.commands = new Discord.Collection()

client.on('ready', () => {
    console.log(`Eingeloggt als ${client.user.username}!`)
    console.log(` `)
    client.user.setActivity('Loading...', { type: 'PLAYING' })
    client.user.setStatus('online') //Kann online sein
})


client.commands = new Discord.Collection()

client.on('ready', () => {

    client.setInterval(function() {

            let guildnumber = client.guilds.size
            let membernummer = client.users.size

            let Statuses = [`!help`, `on all User`]
            let Statustypes = ['PLAYING', 'WATCHING']
            let statusfinal = Statuses[Math.floor(Math.random()*Statuses.length)]
            let statustypefinal = Statustypes[Math.floor(Math.random()*Statustypes.length)]

            client.user.setPresence({game: {name: `${statusfinal}`,type: `${statustypefinal}`,url: "https://www.twitch.tv/iblali"} })
            client.user.setStatus('online') // 'online', 'idle', 'dnd', or 'invisible'

    }, 1000 * 30
    )
})

client.on('guildMemberAdd', member => {
    console.log(`${member} was joined the server`)

    let welcomechannel = member.guild.channels.find(ch => ch.name === 'normal-chat');

    let wembed = new Discord.RichEmbed()
    .setColor(client.color)
    .setTitle("New User was joined!")
    .setDescription(`${member} was joined this server! \nsince nice to him`)

    welcomechannel.send(wembed)

    let logchanel = member.guild.channels.find(ch => ch.name === 'server-log');
    let logembed = new Discord.RichEmbed()
    .addField("New log Registration!", `<@${member.id}> was joined the server`)

    logchanel.send(logembed)
})

client.on('guildMemberRemove', member => {
    console.log(`${member} was joined the server`)

    let welcomechannel = member.guild.channels.find(ch => ch.name === 'normal-chat');

    let wembed = new Discord.RichEmbed()
    .setColor(client.color)
    .setTitle("A User was left the server!")
    .setDescription(`${member} was left`)

    welcomechannel.send(wembed)

    let logchanel = member.guild.channels.find(ch => ch.name === 'server-log');
    let logembed = new Discord.RichEmbed()
    .addField("New log Registration!", `${member.user.username} was leave the server`)

    logchanel.send(logembed)
})

client.commands = new Discord.Collection()

client.on('ready', () => {
    console.log(`Eingeloggt als ${client.user.username}!`)
    console.log(` `)
    client.user.setActivity('Loading...', { type: 'STREAMING' })
    client.user.setStatus('online') //Kann online sein
})


client.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err)
    let JSfiles = files.filter(f => f.split(".").pop() === "js")

    if (JSfiles.length <= 0) {
        console.log(' ')
        console.log("Ich konnte keine Befehle zum laden finden...")
    }

    console.log('')
    console.log(`Ich lade ${JSfiles.length} Befehl(e)`)
    console.log('')
    JSfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(` ${f} erfolgreich Geladen!  Nr. ${i + 1}`)
        client.commands.set(props.help.name , props)
    })
    console.log('')
})

//Nachrichten Event
//Nachrichten Event

client.on('message', (msg) => {

    let prefix = config.prefix
    let messageArray = msg.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1)




    if(msg.content.startsWith(prefix)) {

        let commandfile = client.commands.get(cmd.slice(prefix.length))
        let clientping = Math.round(client.ping)
            
        if(commandfile) {
            commandfile.run(client, msg, args)
            console.log(' ', cmd, args, ` von ${msg.author.username} - Dauerte ${clientping} ms`)
        }       
    }

})
