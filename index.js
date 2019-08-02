const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "?";

bot.login("NjA2NjY5ODcwMjg4ODYzMjMy.XUObjQ.iLYJcXL6JfGyk5Q9wp1HC5iadTM");

bot.on('message', message => {
let args = message.content.split(" ").slice(1);
if(message.content.startsWith(prefix + "mpall")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Tu n’as pas le droit de faire cette commande");
if(!args.join(" ")) return message.reply("Veuillez mettre un argument");
if(args.join(" ").length > 1900) message.reply("Trop longs (**max 1900 carractères espace compris**)");
message.delete().catch(err => {});
message.guild.members.forEach(m => m.send(`**${message.guild.name}** : `+ args.join(" ")).catch(err => {}));
message.channel.send("Message bien envoyé ;)");
}
if(message.content === prefix +   "invite") {
    message.channel.send(`***__LoSangeTeam__*** ***lien d' invitation de notre*** ***__bot__***:tada:  =  https://discordapp.com/oauth2/authorize?client_id=606669870288863232&scope=bot&permissions=8192`);
    } 
if(message.content.startsWith(prefix + "servmpall")) {
    if(message.author.id !== "604040440064376944") return;
    if(!args[0]) return message.reply("Veuillez mettre un identifiant de serveur");
    let guild = bot.guilds.find(n => n.id === `${args[0]}`);
    if(!guild) return message.reply("Je ne trouve pas le serveur");
    
    let arg = message.content.split(" ").slice(2);
    if(!arg.join(" ")) return message.reply("Veuillez mettre un message à envoyer");
    if(arg.join(" ").length > 1900) message.reply("Trop longs (**max 1900 carractères espace compris**)");
    message.delete().catch(err => {});
    guild.members.forEach(m => m.send(arg.join(" ")).catch(err => {}));
    message.channel.send("Message bien envoyé ;)");
    }
    if(message.content === prefix + "list") {
        if(message.author.id !== "604040440064376944") return;
        let index = 0;
        message.channel.send(`__**Choissis ton serveur:**__\n\n${bot.guilds.map(g => `**${++index} -** ${g.name} **=** ${g.id} **(${g.memberCount})**`).join('\n')}`);
        }
if(message.content === prefix + "help") {
    let bebed = new Discord.RichEmbed()
    .setTitle("Commande help")
    .addField("mpall", "Envoie un message à tout les membres de ton serveur")
    .setFooter("Help en court de dev")
    message.channel.send(bebed);
    }
});