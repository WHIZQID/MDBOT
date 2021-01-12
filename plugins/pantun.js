let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pantun)}”`, m)
}
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/amp/tips/pantun-lucu/
global.pantun = [
1] Sumedang dulu sebelum Bandung
Di jalanan naik sepeda
Sejak dulu hatiku bingung
Benar ternyata kamu mendua
2]Ikan patin jadi masakan
Dimasaknya di kota Palembang
Kurus badan bukan kurang makan
Kurus memikirkan kamu seorang
3] Masuk debu pedihlah mata
Pergi ke desa naik kereta
Menatap kamu makin cinta
Apakah impian kan jadi nyata?
4] Kalau ingin batu permata
Menyelamlah ke samudera.
Kalau ingin sebuah cinta
Aku siap memberikannya
5] Bila ingin ikan petis
Datang saja ke Maluku
Jika ingin lelaki romantis
Datang saja kepadaku
6] Kayu meranti kayu telugu
Tumbuh anggrek jadi benalu
Kamu menanti aku menunggu
Mengatakan cinta rasanya malu
7] Anak ikan main di paya
Banyak berudu tiada induknya
Tolong katakan kepada saya
Kalau rindu apa obatnya?
8] Ada orang Maluku dijitak
Dijitak sama orang Batak
Selama jantungku masih berdetak
Cintaku tak akan luluh lantak
9] Suara si pungguk mendayu-dayu
Memuja bulan tak pernah jemu
Biar di dunia kuhimpun rindu
Di akhirat sana kumohon bertemu
10] Potong sebahu
biar ga sendu
Kamu tahu?
Aku rindu.
11] Ke Pontianak beli kopiah
Kopiah indah kau dapati
Begitu banyak gadis yang singgah
Hanya dinda yang memikat hati
12] Burung perkutut tersambar petir
Kayu jati untuk diukir
Jangan takut jangan khawatir
Hatiku setia sampai akhir
13] Naik delman dekat pak kusir
Banyak lubang lambat jalannya
Pantas saja saya naksir
Kamu memang cantik orangnya
14] Pergi ke kebun ambil pepaya
Banyak petani sedang bekerja
Tolong obati hati saya
Dengan cinta darimu saja
15] Minum jamu sambil berdiri
Diseduhnya di atas panci
Bila hatimu masih sendiri
Bolehkah aku yang mengisi
]
