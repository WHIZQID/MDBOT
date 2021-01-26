let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~MR D1CK*

_Bisa kalian liat tutorialnya di_
*Telegram kami:*
https://t.me/WHIZQIDS
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

