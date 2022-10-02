let handler = async (m, { conn, command, text, usedPrefix }) => {
    
    //conn.sendMessage(m.chat, { react: { text: `🇱🇰`, key: m.key }})

    
    let name = m.pushName
    let victim = text.split("/")[0]
let count = text.split("/")[1]


    var image = './atmenu.jpg'
       
           let sections = []   
           let listmenu = [`attack1`,`attack4`,`attack8`,`attack12`,`attack16`,`menu`]
            let m_title = [`ᴏɴʟʏ ɪɴʙᴏx ᴀᴛᴛᴀᴄᴋ`,`ɪɴʙᴏx ᴀɴᴅ ᴀᴅᴅ ᴛᴏ ɢʀᴏᴜᴘ 𝟺 ᴀɴᴅ ᴀᴛᴛᴀᴄᴋ`,`ɪɴʙᴏx ᴀɴᴅ ᴀᴅᴅ ᴛᴏ ɢʀᴏᴜᴘ 𝟾 ᴀɴᴅ ᴀᴛᴛᴀᴄᴋ`,`ɪɴʙᴏx ᴀɴᴅ ᴀᴅᴅ ᴛᴏ ɢʀᴏᴜᴘ 𝟷𝟸 ᴀɴᴅ ᴀᴛᴛᴀᴄᴋ`,`ɪɴʙᴏx ᴀɴᴅ ᴀᴅᴅ ᴛᴏ ɢʀᴏᴜᴘ 𝟷𝟼 ᴀɴᴅ ᴀᴛᴛᴀᴄᴋ`,`ᴍᴇɪɴ ᴍᴇɴᴜ`]
           let nombor = 1
                   let start_num = 0
                   
                   for (let jf of listmenu) {
                   const list = {title: 'ƲƦƬ ΔΤΤΔϹΚΞΓЅ 𝔹𝕆𝕋' ,
                   rows: [
                     {
                            title: `${m_title[start_num++]}`,
                            
                            rowId: `${usedPrefix}${jf} ${victim}/${count}`
                },
             ]
           }
           sections.push(list)   
           }
           const send =  conn.sendMessage(
           m.chat, 
          {
       
       text: `          ƲƦƬ ΔΤΤΔϹΚΞΓЅ 𝔹𝕆𝕋
            ᴄʀᴇᴀᴛᴇᴅ ʙʏ:ᴊғ ᴛᴇᴀᴍ 
        ᴄᴏɴᴛᴀᴄᴛ ᴜs:ɴᴏ ʏᴏᴜ ᴄᴀɴ'ᴛ 
╚═══════ --------------- ════════╝
 
ᴠɪᴄᴛɪᴍ ɴᴜᴍʙᴇʀ  : ${victim}

sᴇɴᴅɪɴɢ ᴄᴏᴜɴᴛ : ${count}
` ,
       

       footer: `𝚄𝚁𝚃 𝚂𝙿𝙰𝙼 𝙱𝙾𝚃 `,
       title: `╔═══════ ------------- ════════╗`,
       jpegThumbnail: image,
       buttonText: "ᴄʜᴏᴏsᴇ ᴀᴛᴛᴀᴄᴋ ᴍᴇᴛʜᴏᴅ",
       sections
       }, { quoted : m }) // mentioned

       //conn.sendMessage(m.chat, { react: { text: `🇱🇰`, key: m.key }})

}

handler.command = /^(attack|spamselect)$/i
export default handler