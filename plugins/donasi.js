let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [1313-290-0007]
│ • Telkomsel: [1226-444-0009]
│ • Smartfren: [1226-444-0009]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/13132900007
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
