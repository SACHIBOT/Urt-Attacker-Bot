import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import { performance } from 'perf_hooks'
import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import fs from 'fs'


let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './atmenu.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let old = performance.now()
let neww = performance.now()

let ramt = os.totalmem()
let ramf = os.freemem()

let sram = ramt - ramf

let ram = sram / 1000000




let speed = neww - old
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts

let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `

╔═══════ ------------------ ════════╗
          ƲƦƬ ΔΤΤΔϹΚΞΓЅ 𝔹𝕆𝕋
           ᴄʀᴇᴀᴛᴇᴅ ʙʏ:ᴊғ ᴛᴇᴀᴍ 
         ᴄᴏɴᴛᴀᴄᴛ ᴜs:ɴᴏ ʏᴏᴜ ᴄᴀɴ'ᴛ 
╚═══════ ------------------ ════════╝


╠ႮᏢ ͲᏆᎷᎬ : ${uptime}
╠ႮՏᎬᎡՏ : ${totalreg} 
╠ᏞᎪͲᎬΝᏟᎽ  : ${speed}ms
╠ᏀᎡϴႮᏢ ᎪͲͲᎪᏟᏦ : ${groups.length}
╠ᏆΝᏴϴХ ᎪͲͲᎪᏟᏦ : ${chats.length - groups.length}
╠ͲϴͲᎪᏞ ᎪͲͲᎪᏟᏦՏ : ${chats.length}
╠ᎡᎬՏͲᎡᏆᏟͲᏆϴΝ : ${restrict ? '🄰🄲🅃🄸🅅🄰🅃🄴🄳' : '🄳🄴🄰🄲🅃🄸🅅🄰🅃🄴🄳'} 


`.trim()

conn.sendHydrated2(m.chat, str, wm, pp, 'https://chat.whatsapp.com/I7Lx2njxNzP5F7jRRtcDjM', 'URT ATTACKERS ', 'he he thama update kare naha', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['SPAM', '.spammenunew'],
['JF TEAM', '/jfteaminfor'],
['BOT STATUS', '/botstatus']
], m,)

} catch (e) {
    conn.reply(m.chat, 'erorr', m)
    throw e
    }}
    handler.command = /^(menu)$/i
    handler.exp = 50
    handler.fail = null
    export default handler
    
    const more = String.fromCharCode(8206)
    const readMore = more.repeat(4001)
    function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    