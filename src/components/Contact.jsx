import { useState } from 'react'
import { Instagram, Send, Mail, MessageCircle } from 'lucide-react'

const API_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact(){
  const [form, setForm] = useState({name:'', phone:'', email:'', company:'', task:''})
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handle = (e) => setForm({...form, [e.target.name]: e.target.value})

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'landing' })
      })
      if(!res.ok) throw new Error('Ошибка отправки')
      const data = await res.json()
      setStatus({ ok: true, id: data.id })
      setForm({name:'', phone:'', email:'', company:'', task:''})
    } catch (err){
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative bg-gradient-to-b from-black to-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl sm:text-6xl font-black mb-4">УСПЕХ НЕИЗБЕЖЕН ;)</h2>
          <p className="text-white/80 mb-8">Оставь контакты — и мы напишем сценарий следующего большого проекта для твоего бренда.</p>
          <a href="#contact" className="inline-block mb-6 px-5 py-2 rounded-full bg-fuchsia-500 text-black font-bold hover:bg-lime-400 transition">ТЫКНИ СЮДА!</a>

          <div className="flex items-center gap-4 mt-8">
            <a href="mailto:Keysiks.agency@gmail.com" className="inline-flex items-center gap-2 text-white/80 hover:text-white"><Mail size={18}/> Keysiks.agency@gmail.com</a>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <a href="https://www.instagram.com/keysiks.agency?igsh=MTZwYjVqMmhub3N0cQ==" target="_blank" className="p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition" aria-label="Instagram"><Instagram size={18}/></a>
            <a href="https://t.me/keysiksagency" target="_blank" className="p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition" aria-label="Telegram"><Send size={18}/></a>
            <a href="https://vk.com/keysiksagency" target="_blank" className="p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition" aria-label="VK"><MessageCircle size={18}/></a>
          </div>
        </div>

        <form onSubmit={submit} className="bg-zinc-900/80 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/60 mb-1">Имя</label>
              <input required name="name" value={form.name} onChange={handle} placeholder="Ваше имя" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400" />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Телефон</label>
              <input name="phone" value={form.phone} onChange={handle} placeholder="Телефон" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400" />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">E-mail</label>
              <input name="email" value={form.email} onChange={handle} placeholder="E-mail" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400" />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Компания или бренд</label>
              <input name="company" value={form.company} onChange={handle} placeholder="Компания или бренд" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/60 mb-1">Расскажи о задаче</label>
              <textarea name="task" value={form.task} onChange={handle} placeholder="Кратко опиши, что вы хотите сделать" rows={5} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400" />
            </div>
          </div>
          <button disabled={loading} type="submit" className="mt-6 w-full px-6 py-3 rounded-full bg-lime-400 text-black font-bold hover:bg-fuchsia-500 transition disabled:opacity-60 disabled:cursor-not-allowed">{loading ? 'Отправка...' : 'Заказать проект'}</button>
          {status && (
            <p className={`text-sm mt-3 ${status.ok ? 'text-lime-400' : 'text-red-400'}`}>{status.ok ? 'Заявка отправлена. Мы на связи!' : `Ошибка: ${status.message}`}</p>
          )}
          <p className="text-xs text-white/60 mt-3">Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных.</p>
        </form>
      </div>
    </section>
  )
}
