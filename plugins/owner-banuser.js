let handler = async (m, { conn, text}) => {
if (!text) throw '*TAG AND BAN*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*ALREDY BAN*'
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `*HE HE*`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
