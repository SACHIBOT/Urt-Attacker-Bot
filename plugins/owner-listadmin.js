let handler = async (m, { conn }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
let textprem = `*BOT ADMIN LIST*
` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`
m.reply(textprem, null, {mentions: conn.parseMention(textprem)})
}
handler.help = ['adminlist']
handler.tags = ['owner']
handler.command = /^(listprem|adminlist)$/i
handler.rowner = true
export default handler
