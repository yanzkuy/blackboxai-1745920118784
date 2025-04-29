/*

  !- Credits By Skyzopedia
  https://wa.me/6285624297894
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '6282246743136'
global.versi = version
global.namaOwner = "ZhiraHosting"
global.packname = 'SimpleBotzV5'
global.botname = 'SimpleBotzV5'
global.botname2 = 'Simple Bot V5'

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/6283197768676"
global.linkGrup = "https://chat.whatsapp.com/C9WPDKmuPRLAU8i7m07bJo"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000



//~~~~~~~~~~ Settings Produk Custom Ahmad ~~~~~~~~~//
global.dnasikuning = "Empty" // Text Desk Produk atau harga
global.dcheesecuit = "Empty" // Text Desk Produk atau harga
global.dpudingcoklat = "Empty" // Text Desk Produk atau harga
global.dsaladbuah = "Empty" // Text Desk Produk atau harga
global.dspaghetti = "Empty" // Text Desk Produk atau harga
global.dkebab = "Empty" // Text Desk Produk atau harga

global.hargaNasikuning = "0" // harga nasi kuning
global.hargaCheseecuit = "0" // harga nasi cheesecuit
global.hargaPudingcoklat = "0" // harga nasi puding coklat
global.hargaSaladbuah = "0" // harga nasi salad buah
global.hargaSpaghetti = "0" // harga nasi spaghetti
global.hargaKebab = "0" // harga nasi kebab

global.codeqr = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214511194257616370303UMI51440014ID.CO.QRIS.WWW0215ID20253689269990303UMI5204541153033605802ID5921KUKS CENTER OK21639076009TANGERANG61051511162070703A016304F350" // Convert Foto QRIS mu
global.orkutapi = "907165217398445072163907OKCT9622C4A3FDD59EF563A5C18197DF6A08" // Orkut Api okeconnect
global.orkutmerchant = "OK2163907" // Orkut Merchant okeconnect
global.zhiraApikey = "ahmad" // api.zhirastoreid.me free 1 bulan unlimited request
global.custnum = ['62881012303956', '6285624146841'] // Nomor Customer Promosi, Jangan lupa hapus no ku



//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029VahrqzpLikg5fIvNPT3k"
global.idSaluran = "120363307832504473@newsletter"
global.namaSaluran = "ZHIRA OFFICIAL⚡"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.merchantIdOrderKuota = "#"
global.apiOrderKuota = "#"
global.qrisOrderKuota = "#"

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "simplebotz85"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "#"
global.ovo = "#"
global.gopay = "#"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://k.top4top.io/p_3303pz9eh1.jpg", 
reply: "https://k.top4top.io/p_3303pz9eh1.jpg", 
logo: "https://k.top4top.io/p_3303pz9eh1.jpg", 
qris: ""
}

//~~~~~~~~~ Settings Api Panel ~~~~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://azyibot.privateserverr.my.id"
global.apikey = "#" //ptla
global.capikey = "#" //ptlc

//~~~~~~~~ Settings Api Panel 2 ~~~~~~~~//
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://private.skyzopedia.us.kg"
global.apikeyV2 = "#" //ptla
global.capikeyV2 = "#" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"serverku.biz.id": {
"zone": "#", 
"apitoken": "#"
}, 
"privatserver.my.id": {
"zone": "#", 
"apitoken": "#"
}, 
"panelwebsite.biz.id": {
"zone": "#", 
"apitoken": "#"
}, 
"mypanelstore.web.id": {
"zone": "#", 
"apitoken": "#"
}, 
"pteroserver.us.kg": {
"zone": "#", 
"apitoken": "#"
}, 
"digitalserver.us.kg": {
"zone": "#", 
"apitoken": "#"
}, 
"shopserver.us.kg": {
"zone": "#", 
"apitoken": "#"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "*[ 𝐀𝐊𝐄𝐒 𝐆𝐀𝐆𝐀𝐋❗]*\nғɪᴛᴜʀ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ʙᴀɴɢ ᴀʟ! ",
	admin: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐆𝐀𝐆𝐀𝐋 ❗ ]*\nғɪᴛᴜʀ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴀᴅᴍɪɴ ɢʙ",
	botAdmin: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐆𝐀𝐆𝐀𝐋 ❗ ]*\nғɪᴛᴜʀ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴋᴇᴛɪᴋᴀ ʙᴏᴛ ᴊᴀᴅɪ ᴀᴅᴍɪɴ ʏᴀ ʟᴇ",
	group: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐆𝐀𝐆𝐀𝐋 ❗ ]*\nғɪᴛᴜʀ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪɴɢᴜɴᴀᴋᴀɴ ᴅɪᴅᴀʟᴀᴍ ɢʀᴜʙ ʙʀᴏ ᴋᴜ!!",
	private: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐆𝐀𝐆𝐀𝐋 ❗ ]*\nғɪᴛᴜʀ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ ʙʀᴏ ᴋᴜ! ",
	prem: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐆𝐀𝐆𝐀𝐋 ❗ ]*\nғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴅᴊ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴘʀᴇᴍɪᴜᴍ ʙᴀɴɢ ᴀʟ!",
	wait: '𝙒𝙀𝙏 𝘼𝘽𝘼𝙉𝙂𝙆𝙐𝙃',
	error: '𝙂𝘼𝙂𝘼𝙇 ❗',
	done: '𝘿𝙊𝙉𝙀 𝘽𝘼𝙉𝙂 ✅'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})