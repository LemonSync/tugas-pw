<script setup>
import { ref, nextTick } from 'vue'

const terbuka = ref(false)
const input = ref('')
const loading = ref(false)
const session = 'rpl-' + Math.random().toString(36).slice(2, 10)
const kotakPesan = ref(null)

const daftarPesan = ref([
  { dari: 'bot', teks: 'Halo! Saya asisten AI SMKN 9 Medan. Silakan bertanya apa saja.' },
])

async function kirim() {
  const teks = input.value.trim()
  if (!teks || loading.value) return

  daftarPesan.value.push({ dari: 'user', teks })
  input.value = ''
  loading.value = true
  await gulirBawah()

  try {
    const res = await fetch('https://tugas-pw-backend-eres.vercel.app/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: teks, session }),
    })
    const data = await res.json()

    if (typeof data === 'string') {
      daftarPesan.value.push({ dari: 'bot', teks: data })
    } else {
      daftarPesan.value.push({ dari: 'bot', teks: data.error || 'Maaf, saya tidak mengerti.' })
    }
  } catch {
    daftarPesan.value.push({ dari: 'bot', teks: 'Server AI tidak bisa dihubungi.' })
  } finally {
    loading.value = false
    await gulirBawah()
  }
}

async function gulirBawah() {
  await nextTick()
  if (kotakPesan.value) kotakPesan.value.scrollTop = kotakPesan.value.scrollHeight
}
</script>

<template>
  <button class="chat-tombol" @click="terbuka = !terbuka">
    <svg
      v-if="terbuka"
      class="ikon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
    <svg v-else class="ikon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </svg>
    <span>{{ terbuka ? 'Tutup' : 'Chat AI' }}</span>
  </button>

  <div v-if="terbuka" class="chat-panel">
    <div class="chat-header">
      <span class="chat-judul">
        <svg
          class="ikon-bot"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <rect x="4" y="8" width="16" height="12" />
          <path d="M12 8V4" />
          <circle cx="12" cy="3" r="1.2" fill="currentColor" stroke="none" />
          <path d="M9 13.5v1M15 13.5v1" stroke-width="2.6" />
          <path d="M9 17.5h6" />
        </svg>
        Chatbot SMKN 9 Medan
      </span>
      <button class="chat-close" aria-label="Tutup" @click="terbuka = false">&times;</button>
    </div>

    <div ref="kotakPesan" class="chat-body">
      <div v-for="(pesan, i) in daftarPesan" :key="i" class="chat-balon" :class="pesan.dari">
        {{ pesan.teks }}
      </div>
      <div v-if="loading" class="chat-balon bot loading">Mengetik...</div>
    </div>

    <form class="chat-input" @submit.prevent="kirim">
      <input v-model="input" type="text" placeholder="Tulis pesan..." />
      <button type="submit" :disabled="loading">Kirim</button>
    </form>
  </div>
</template>

<style>
.chat-tombol {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: #1b4332;
  color: #ffffff;
  border: none;
  padding: 12px 18px;
  font-size: 1rem;
  cursor: pointer;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 8px;
}

.chat-tombol .ikon {
  width: 20px;
  height: 20px;
  display: block;
}

.chat-tombol:hover {
  background: #2d6a4f;
}

.chat-panel {
  position: fixed;
  right: 20px;
  bottom: 78px;
  width: 330px;
  height: 440px;
  background: #ffffff;
  border: 1px solid #e0d7c4;
  box-shadow: 6px 6px 0 #e6ddca;
  display: flex;
  flex-direction: column;
  z-index: 50;
}

.chat-header {
  background: #1b4332;
  color: #ffffff;
  padding: 10px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.chat-judul {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ikon-bot {
  width: 20px;
  height: 20px;
  display: block;
}

.chat-close {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
}

.chat-body {
  flex: 1;
  overflow-y: auto;
  background: #f3efe6;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.chat-balon {
  max-width: 80%;
  padding: 8px 10px;
  font-size: 0.95rem;
  line-height: 1.4;
}

.chat-balon.user {
  align-self: flex-end;
  background: #2d6a4f;
  color: #ffffff;
}

.chat-balon.bot {
  align-self: flex-start;
  background: #ffffff;
  border: 1px solid #e0d7c4;
  color: #33302a;
}

.chat-balon.loading {
  color: #8b5e34;
  font-style: italic;
  background: none;
  border: none;
}

.chat-input {
  display: flex;
  border-top: 1px solid #e0d7c4;
}

.chat-input input {
  flex: 1;
  border: none;
  padding: 12px;
  font-size: 1rem;
}

.chat-input input:focus {
  outline: 2px solid #2d6a4f;
}

.chat-input button {
  background: #8b5e34;
  color: #ffffff;
  border: none;
  padding: 0 16px;
  font-size: 1rem;
  cursor: pointer;
}

.chat-input button:hover {
  background: #6f4e37;
}

.chat-input button:disabled {
  background: #c4b8a8;
  cursor: not-allowed;
}

/* Di HP, panel melebar mengisi layar */
@media (max-width: 600px) {
  .chat-panel {
    left: 12px;
    right: 12px;
    width: auto;
  }
}
</style>
