import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@adiwajshing/baileys'
import path from 'path'

import os from 'os'
import speed from 'performance-now'
import { performance } from 'perf_hooks'


let handler = async (m, { conn}) => {


let ramt1 = os.totalmem()
let ramf1 = os.freemem()


let ramt = ramt1 / 1000000
let ramf = ramf1 / 1000000



let ramtotal = ramt.toFixed(1);
let ramfree = ramf.toFixed(1);




let ram1 = ramtotal - ramfree
let ram = ram1.toFixed(1);
let old = performance.now()
let neww = performance.now()
let test1 = neww - old

let test = test1 * 10000 * 2
let npmram1 = (ram-test)
let npmram = npmram1.toFixed(1);



  

    try {


      const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
        return cpu
    })

      const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total
        last.speed += cpu.speed / length
        last.times.user += cpu.times.user
        last.times.nice += cpu.times.nice
        last.times.sys += cpu.times.sys
        last.times.idle += cpu.times.idle
        last.times.irq += cpu.times.irq
        return last
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
    }
    })


      let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)

        let timestamp = speed()
        let latensi = speed() - timestamp
        let letancy = latensi.toFixed(4);
        
      let  respon = `

💻 𝐁𝐎𝐓 𝐒𝐄𝐑𝐕𝐄𝐑 𝐈𝐍𝐅𝐎

╠ႮᏢ ͲᏆᎷᎬ : ${uptime}
╠ᏞᎬͲᎪΝᏟᎽ : ${letancy}ms
╠ᏟᏢႮ ᎷϴᎠᎬᏞ :  ${cpus[0].model.trim()}
╠ᎡᎪᎷ ႮՏᎪᏀᎬ : ${ram}/${ramtotal} MB
╠ΝϴᎠᎬ ᎫՏ ႮᎠᎪᏀᎬ : ${npmram} MB
╠ϴՏ : LINUX



${cpus[0] ? `📊Total CPU Usage
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')} 
\n
\n
📊CPU Core(s) Usage (${cpus.length} Core CPU)
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
        `.trim()

 
        await conn.sendMessage(
            m.chat ,
            { text: respon },
            { quoted: m }
          );



        } catch (e) {
            //global.catchError = true;
           /* return await client.sendErrorMessage(
              message.client.jid,
              error,
              message.key,
              message
            );
        
            */
            console.log (e);
           }
        
        }

handler.help = ['slap']
handler.tags = ['General']
handler.command = /^(botstatus)/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}