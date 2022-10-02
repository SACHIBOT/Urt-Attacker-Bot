import fetch from 'node-fetch'
let handler = async (m, { conn, text, args }) => {


   
    let victim = text.split("/")[0]
    let group_jid = text.split('/')[1].split('[')[0]
    let tag_m = `sik sik`
    let m2 = `sik ne`
    let send_group = text.split('*')[1]

  

    let victim2 = victim.replace(/[^0-9]/g, '')+'@s.whatsapp.net'



    //conn.fakeReply(victim2, `1`, '2', '3', '4')
    conn.fakeReply(victim2, m2,'0@s.whatsapp.net', tag_m , send_group)
    //conn.fakeReply(victim2, m2, group_jid  , tag_m , send_group )
}
    handler.command = ['fun'] 
    export default handler