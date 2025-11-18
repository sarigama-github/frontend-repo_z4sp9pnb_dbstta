import { useState } from 'react'

const items = [
  {
    title: 'Брендинг и айдентика',
    short: 'Брендинг и айдентика',
    detail: `**Что делаем:**
— Разработка названия, позиционирования и смыслов бренда
— Создание визуальной айдентики: логотип, шрифтовая система, цветовая палитра, графика
— Бренд-гайд, правила использования фирменного стиля
— Переупаковка существующих брендов, ребрендинг
— Архитектура бренда, линейки продуктов, суббренды
— Концепция пространств: как бренд живёт в интерьере, на фасаде, в навигации

**Где это работает:**
— Клубы, бары, фестивали
— Рестораны, кафе, фуд-корты
— Девелоперские проекты и городские пространства
— Бренды, которые хотят звучать громче и выглядеть смелее`},
  {
    title: 'Digital и реклама',
    short: 'Digital и реклама',
    detail: `**Что делаем:**
— Креативные digital-кампании в соцсетях и на платформах
— Концепции рекламных кампаний: видео, баннеры, спецпроекты
— Креатив и продакшн контента для digital-каналов
— Лэндинги и промо-страницы под кампании и события
— Механики вовлечения: конкурсы, игры, UGC-кампании

**Фокус:**
— Не просто реклама, а истории, в которых людям хочется участвовать
— Связка онлайн и офлайн: digital как продолжение событий, фестивалей, запусков`},
  {
    title: 'Контент и сторителлинг',
    short: 'Контент и сторителлинг',
    detail: `**Что делаем:**
— Контент-стратегия бренда: что, где и как говорить
— Продюсирование фото- и видеосъёмок
— Лонгриды, тексты для медиа, спецпроекты
— Сценарии для роликов, подкастов, презентаций
— Рубрикаторы для соцсетей, сценарии контент-серий

**Задача:**
— Сделать так, чтобы голос бренда был узнаваемым, живым и честным
— Рассказывать истории, которые формируют культуру вокруг бренда`},
  {
    title: 'Events и Experiences',
    short: 'Events и Experiences',
    detail: `**Что делаем:**
— Концепция и режиссура событий: вечеринки, фестивали, открытия, pop-up-проекты
— Программирование: артисты, диджеи, перформеры, спикеры
— Пространственный сценарий: как гость двигается, что видит и чувствует
— Продюсирование и координация площадок, подрядчиков, партнёров
— Пост-коммуникация: как событие живёт в медиа и соцсетях после того, как свет погас

**Принцип:**
— Создаём события, которые становятся частью культурного кода города и сообществ, а не просто «ивентом на один вечер».`},
  {
    title: 'PR и Influence Collab',
    short: 'PR и Influence Collab',
    detail: `**Что делаем:**
— PR-стратегии для брендов, событий и пространств
— Работа с медиа: спецпроекты, публикации, партнёрства
— Influence-коллаборации: подбор амбассадоров, артистов, лидеров мнений
— PR сопровождение ночных клубов, ресторанов, фестивалей и городских проектов
— Стратегия присутствия бренда в культурной повестке

**Фокус:**
— Не одномоментный хайп, а выстраивание долгосрочного влияния бренда на культурную среду.`},
  {
    title: 'Дизайн и архитектура',
    short: 'Дизайн и архитектура',
    detail: `**Что делаем:**
— Концепции интерьеров для клубов, баров, ресторанов и общественных пространств
— Визуальные сценарии: свет, графика, навигация, медиаконтент
— Архитектурно-дизайнерские решения для событий и pop-up-пространств
— Визуальные системы для девелоперских проектов и городской среды

**Цель:**
— Сделать так, чтобы человек чувствовал бренд не только глазами и ушами, но и всем телом — через пространство, в котором он находится.`},
]

function Markdown({text}){
  return (
    <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{__html: text.replace(/\n/g,'<br/>').replace(/\*\*(.*?)\*\*/g,'<strong>$1<\/strong>')}} />
  )
}

export default function Services(){
  const [active, setActive] = useState(null)
  return (
    <section id="services" className="relative bg-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h3 className="text-3xl sm:text-5xl font-extrabold">Услуги KEYSIKS AGENCY</h3>
          <p className="text-white/60 mt-2">Тыкни куда-нибудь ;)</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx)=> (
            <button key={idx} onClick={()=>setActive(it)} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 text-left p-5 hover:shadow-[0_0_0_2px_#a3e635] transition-all">
              <div className="absolute inset-0 bg-[radial-gradient(400px_120px_at_20%_0%,rgba(163,230,53,0.15),transparent)] opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute right-4 top-4 text-xs text-white/60">{String(idx+1).padStart(2,'0')}</span>
              <div className="relative z-10 flex h-full items-end">
                <h4 className="text-xl font-bold group-hover:text-lime-300 transition">{it.title}</h4>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Drawer */}
      {active && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={()=>setActive(null)}>
          <div className="absolute right-0 top-0 h-full w-full sm:w-[520px] bg-zinc-900 border-l border-white/10 p-6 overflow-y-auto" onClick={e=>e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl font-bold">{active.title}</h4>
              <button onClick={()=>setActive(null)} className="text-white/60 hover:text-white">Закрыть</button>
            </div>
            <Markdown text={active.detail} />
          </div>
        </div>
      )}
    </section>
  )
}
