let handler =  m => m.reply(`
╭━━━━「 *SEWA* 」
┊⫹⫺ *8k:perbulan
┊⫹⫺ *15k:permanen
╰═┅═━––––––๑

💬: minat silahkan chat owner aja
Minat Hubungi Owner

`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
