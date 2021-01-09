let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: MR D1CK
╠➥ Script: @QIDS
║
╠➥ Github: https://github.com/WHIZQID/MDBOT
╠➥ Telegram: @WHIZQIDS
╠➥ Twitter: @BaLa_DE19WA
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ Jember Lovers
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ SmartFren: 1226-444-0009
╠➥ Tsel: 0852-3666-5266
╠➥ Tsel: 0822-3020-8677
║
║>Request? Wa.me/13132900007
║
╠═〘 MD BOT 〙 ═
`.trim(), m)
}
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

