let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠════〘 INFO BOT 〙 ═══
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: MD BOT
╠➥ Script: @BaLa_DE19WA
║
╠➥ Telegram: https://t.me/WHIZQIDS
╠➥ Fb: @symbi4nerz
╠➥ Twitter: @BaLa_DE19WA
║
╠════〘 Thanks To 〙 ═══
╠➥ MR D1CK
╠➥ WHIZQID
╠➥ BALADEWA
╠➥ JEMBER LOVERS :)
║
╠════〘 DONASI 〙 ═════
╠➥ Tsel1: 1226-444-0009
╠➥ Tsel2: 1313-290-0007
╠➥ Tsel3: 1226-444-0009
║
║>Request? Wa.me/13132900007
║
╠═══〘 POWERED BY 〙 ═══
║
║────────╔╗╔╗───╔╗─
║╔══╗╔╦╗╔╝║╠╣╔═╗║╠╗
║║║║║║╔╝║╬║║║║═╣║═╣
║╚╩╩╝╚╝─╚═╝╚╝╚═╝╚╩╝
║
╠═════〘 MD BOT 〙 ═════
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

