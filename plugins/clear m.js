import fs from 'fs'

let handler = async (m, { conn, args , command, text, usedPrefix }) => {



    let count = text

    
    let i2 = 0;

    let spams = ['./Spam/clears.txt']

    while (i2 < count * 2 ) {



        let spam1 =  spams[Math.floor(Math.random() * spams.length)]


    let textx = fs.readFileSync(`${spam1}`)

    await conn.sendMessage(m.chat, { text : `${textx}` })

    i2++

    }

    await conn.sendMessage(m.chat, { text : `Spam Cleared Sorry :-` })

}



handler.command = /^(clearthis)$/i
export default handler