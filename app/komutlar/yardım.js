const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Plusgiale Guard Bot`)
.setDescription(`


<a:elmass:772190425213435965> **=**  \`!kanal-koruma\` : **Kanal Koruma Aç/Kapat**
<a:elmass:772190425213435965> **=**  \`!küfür-engel\`:  **Küfür Engel Aç/Kapat**
<a:elmass:772190425213435965> **=**  \`!reklam-engel\` :  **Reklam Engel Aç/Kapat**
<a:elmass:772190425213435965> **=**  \`!sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
<a:elmass:772190425213435965> **=**  \`!ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
<a:elmass:772190425213435965> **=**  \`!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
<a:elmass:772190425213435965> **=**  \`!istatistik\`:  **Botun İstatistiklerini Atar**
<a:elmass:772190425213435965> **=**  \`!temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
<a:elmass:772190425213435965> **=**  \`!ping\`:  **Pinginizi Ölçüp Atar**
<a:elmass:772190425213435965> **=**  \`!avatar\`:  **Avatarınızı Atar**

`)
.setImage("https://i.hizliresim.com/4jN8iR.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};