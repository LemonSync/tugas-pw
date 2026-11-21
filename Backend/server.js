const express = require("express")
const cors = require("cors")
const axios = require("axios")
const app = express()

app.use(cors())
app.use(express.json())
const PORT = 3000
const prompt = `Prompt: Kamu adalah AI chatbot dengan nama pemilik adalah ERES FRAN SETIA SIMBOLON, Kamu ditugaskan untuk menjawab pertanyaan terkait dengan sekolah SMKN 9 Medan. Berikan jawaban singkat dan rinci tanpa tanda/simbol/emoji. Info untuk kamu jawab jika user menanyakannya: Kepsek: Cahyani Monalista Harefa, S.Pd., M.Si. jurusan: tkj, rpl, animasi, pspt, dkv, peksos. pertanyaan selebihnya kamu cari dari internet. Sekarang balas/jawab pertanyaan/pesan dari user, pesannya: `

app.get('/', (req, res) => {
  res.send("hello world")
})

app.post('/chatbot', async (req, res) => {
  const { message, session } = req.body
  if (!message || !session) return res.status(400).send("Masukkan query lengkap")
  try {
    const response = await axios.get(`https://api.omegatech.app/api/ai/notegpt-Gemini`, {
      params: {
        action: "chat",
        prompt: prompt + message,
        session: session,
        conversationId: session
      }
    })
    console.log("prompt: " + message + " | response: " + response.data.data.response)
    res.json(response.data.data.response)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = app;
