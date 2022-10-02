let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*GIVE THE COMMAND BY MENTIONING OR PUTTING THE NUMBER*`
if (global.prems.includes(who.split`@`[0])) throw '*USER ALREADY ADMIN*'
global.prems.push(`${who.split`@`[0]}`)
let textprem = `* @${who.split`@`[0]} YOU ARE NOW BOT ADNIN *`
m.reply(textprem, null, { mentions: conn.parseMention(textprem) })
}
handler.help = ['addadmin <@user>']
handler.tags = ['owner']
handler.command = /^(addadmin)$/i
handler.group = true
handler.rowner = true
export default handler
