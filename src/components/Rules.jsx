import { useState, useEffect } from 'react'

const lines = [
  '(01) МЫ НЕ СОЗДАЕМ "КАК У ВСЕХ"',
  '(02) НАШИ СЛОВА СТАНОВЯТСЯ ЧАСТЬЮ КУЛЬТУРНОГО КОДА',
  '(03) МЫ ЛЮБИМ БРЕНДЫ, КОТОРЫЕ НЕ БОЯТСЯ БЫТЬ ГРОМКИМИ, ЖИВЫМИ И ЧЕСТНЫМИ',
  '(04) МЫ НЕ ВЫПОЛНЯЕМ ТЗ — МЫ СОЗДАЕМ МИР ВОКРУГ БРЕНДА',
  '(05) МЫ НЕ ГОВОРИМ "ЭТО НЕВОЗМОЖНО" — МЫ СПРАШИВАЕМ "КАК СДЕЛАТЬ ТАК, ЧТОБЫ ЭТО РАБОТАЛО"',
  '(06) МЫ РАБОТАЕМ НА СТЫКЕ ИСКУССТВА И БИЗНЕСА, НО БЕЗ СКУЧНЫХ ПРЕЗЕНТАЦИЙ',
  '(07) МЫ ДУМАЕМ НЕ КАТЕГОРИЯМИ КАМПАНИЙ, А КАТЕГОРИЯМИ ВЛИЯНИЯ',
  '(08) МЫ ДЕЛАЕМ ТАК, ЧТОБЫ ЛЮДИ ХОТЕЛИ УЧАСТВОВАТЬ, А НЕ ПРОСТО СМОТРЕТЬ',
  '(09) МЫ НЕ СОБИРАЕМ ПОРТФОЛИО — МЫ СОЗДАЕМ СООБЩЕСТВА',
  '(10) КЕЙСИКС — ЭТО МЕСТО, ГДЕ МАРКЕТИНГ ПРЕВРАЩАЕТСЯ В ИСКУССТВО, А ИСКУССТВО — В РЕЗУЛЬТАТЫ',
]

export default function Rules(){
  const [index, setIndex] = useState(lines.length)
  const [resetKey, setResetKey] = useState(0)

  useEffect(()=>{
    setIndex(0)
    const id = setInterval(()=>{
      setIndex(prev => (prev < lines.length ? prev + 1 : prev))
    }, 900)
    return ()=> clearInterval(id)
  }, [resetKey])

  return (
    <section className="relative bg-gradient-to-b from-black to-zinc-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-3xl sm:text-5xl font-extrabold">«Правила KEYSIKS»</h3>
            <p className="text-xs text-white/60 mt-2">Тыкни ещё раз, если хочешь перечитать манифест</p>
          </div>
          <button onClick={()=>setResetKey(k=>k+1)} className="px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition">Ещё раз</button>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {lines.slice(0, index).map((l, i)=> (
            <div key={i} className="py-4 sm:py-6">
              <p className="text-lg sm:text-2xl tracking-tight">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
