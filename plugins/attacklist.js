let handler = async (m, { conn, command, text, usedPrefix }) => {
    
    //conn.sendMessage(m.chat, { react: { text: `ð±ð°`, key: m.key }})

    
    let name = m.pushName
    let victim = text.split("/")[0]
let count = text.split("/")[1]


    var image = './atmenu.jpg'
       
           let sections = []   
           let listmenu = [`attack1`,`attack4`,`attack8`,`attack12`,`attack16`,`menu`]
            let m_title = [`á´É´ÊÊ ÉªÉ´Êá´x á´á´á´á´á´á´`,`ÉªÉ´Êá´x á´É´á´ á´á´á´ á´á´ É¢Êá´á´á´ ðº á´É´á´ á´á´á´á´á´á´`,`ÉªÉ´Êá´x á´É´á´ á´á´á´ á´á´ É¢Êá´á´á´ ð¾ á´É´á´ á´á´á´á´á´á´`,`ÉªÉ´Êá´x á´É´á´ á´á´á´ á´á´ É¢Êá´á´á´ ð·ð¸ á´É´á´ á´á´á´á´á´á´`,`ÉªÉ´Êá´x á´É´á´ á´á´á´ á´á´ É¢Êá´á´á´ ð·ð¼ á´É´á´ á´á´á´á´á´á´`,`á´á´ÉªÉ´ á´á´É´á´`]
           let nombor = 1
                   let start_num = 0
                   
                   for (let jf of listmenu) {
                   const list = {title: 'Æ²Æ¦Æ¬ ÎÎ¤Î¤ÎÏ¹ÎÎÎÐ ð¹ðð' ,
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
       
       text: `          Æ²Æ¦Æ¬ ÎÎ¤Î¤ÎÏ¹ÎÎÎÐ ð¹ðð
            á´Êá´á´á´á´á´ ÊÊ:á´Ò á´á´á´á´ 
        á´á´É´á´á´á´á´ á´s:É´á´ Êá´á´ á´á´É´'á´ 
ââââââââ --------------- âââââââââ
 
á´ Éªá´á´Éªá´ É´á´á´Êá´Ê  : ${victim}

sá´É´á´ÉªÉ´É¢ á´á´á´É´á´ : ${count}
` ,
       

       footer: `ððð ðð¿ð°ð¼ ð±ð¾ð `,
       title: `ââââââââ ------------- âââââââââ`,
       jpegThumbnail: image,
       buttonText: "á´Êá´á´sá´ á´á´á´á´á´á´ á´á´á´Êá´á´",
       sections
       }, { quoted : m }) // mentioned

       //conn.sendMessage(m.chat, { react: { text: `ð±ð°`, key: m.key }})

}

handler.command = /^(attack|spamselect)$/i
export default handler