let handler = async (m, { conn, args , command, text, usedPrefix }) => {



await conn.sendMessage(m.sender   , { text : `${m.chat}` } , { quoted: m } )


}



handler.command = /^(..)$/i
//
export default handler
