let handler = async (m, { conn, text}) => {
if (!text) throw '*ALREADY UNBAN USER*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*UNBAN USER*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[HE HE*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
