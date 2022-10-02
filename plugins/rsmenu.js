import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `

*SPAMING COMMAND - GROUP ADMIN*

° ☑️ .spam  - *attack inbox*

*SPAMING COMMAND - ONLY URT ADMIN*

° ☑️ .attack4 - *attack with 4 group*
° ☑️ .attack8 - *attack with 8 group*
° ☑️ .attack12 - *attack with 12 group*

*SPAMING COMMAND - OWNER ONLY*

° ☑️ .attack16 - *attack with 16 group*


`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ᴊғ ᴛᴇᴀᴍ ',
body: 'ᴊғ ᴛᴇᴀᴍ ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/`}}})
}
//let textx = ala labada
//await conn.sendButton(m.chat, `${textx}`, `${textx}`, [`${textx}`], m)

//ᏢᎡᎬҒᏆХ : *${usedPrefix}*

handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.prems = true
handler.command = /^(spamenu|rs|sr)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
