const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();

const prefix = "-";
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log('By Osama_DK')
  console.log('')  
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});






console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
Invite rewards +ranks free + giveaways
https://discord.gg/8M9h2Kn
https://discord.gg/Dajw6FM
 ${member}  
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
Invite rewards +ranks free + giveaways
https://discord.gg/8M9h2Kn
https://discord.gg/Dajw6FM
 ${member}  
**`) 
}).catch(console.error)
})





client.login(process.env.BOT_TOKEN);
