let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: MD BOT
╠➥ Script: @BaLa_DE19WA
║
╠➥ Telegram: https://t.me/WHIZQIDS
╠➥ Fb: @symbi4nerz
╠➥ Twitter: @BaLa_DE19WA
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ JEMBER LOVERS :)
║
╠═〘 DONASI 〙 ═
╠➥ SmartFren: 1226-444-0009
╠➥ Tsel: 1313-290-0007
╠➥ Indosat: 1226-444-0009
║
║>Request? Wa.me/13132900007
║
╠═〘 MD BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
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

