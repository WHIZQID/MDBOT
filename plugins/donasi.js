let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tsel [082230208677]
│ • Tsel [085236665266]
│ • Tsel [12264440009]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/13132900007
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
