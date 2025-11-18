import Tilt from './Tilt'
import { useEffect, useState } from 'react'

const groups = [
  {
    title: '🕺 Nightlife & Event',
    items: [
      { name: '«Ботаника»', desc: 'Клуб, в котором зелень, свет и музыка собирают вокруг себя городское сообщество ночной жизни.', img: 'https://keysiksagency.com/wp-content/uploads/2025/11/7.webp'},
      { name: '«Клуб Союзники»', desc: 'Пространство, где вечеринки превращаются в сериалы, а гости — в постоянный каст.', img: 'https://keysiksagency.com/wp-content/uploads/2025/11/8.webp'},
      { name: '«WERK»', desc: 'Индустриальная площадка, где рейв становится частью городской культуры.', img: 'https://keysiksagency.com/wp-content/uploads/2025/11/9.webp'},
      { name: '«REX (Gosha Rubchinskiy)»', desc: 'Pop-up ивенты и спецпроекты с легендарным брендом, работа с субкультурной аудиторией.', img: 'https://keysiksagency.com/wp-content/uploads/2025/11/10.webp'},
      { name: '«Electric Pawn Shop»', desc: 'Коллаборации и pop-up-проекты для клуба в Дубае, перенос московской энергии в другие города.', img: 'https://keysiksagency.com/wp-content/uploads/2025/11/11.webp'},
    ]
  },
  {
    title: '🚗 Авто и Мобильность «TwoBros (Rentcar, Dubai)»',
    items: [
      { name: 'TwoBros (Rentcar, Dubai)', desc: 'Автомобильный бренд из Дубая, который мы упаковали не как прокат, а как lifestyle-опыт:\n— Айдентика и визуальная система\n— Контент и digital-присутствие\n— Подсветка ночной, городской и туристической аудитории\n\nЗадача: сделать бренд притяжения для тех, кто живёт быстро и ярко.', img: 'https://keysiksagency.com/wp-content/uploads/2025/10/avtomobiliti.jpeg'},
    ]
  },
  {
    title: '🥡 Food & Hospitality «Аутсайдерс Котлетикс»',
    items: [
      { name: 'Аутсайдерс Котлетикс', desc: 'Гастрономический проект, который стал больше, чем местом, где едят:\n— Концепция бренда и позиционирование\n— Айдентика и визуальные образы\n— Оформление пространства и коммуникаций\n— Работа с сообществом гостей\n\nВажно показать, как через еду можно строить городские коммьюнити.', img: 'https://keysiksagency.com/wp-content/uploads/2025/11/12.webp'},
    ]
  },
  {
    title: '🏙 Infrastructure & Corporate «Башспирт», «Восточный въезд», девелопмент',
    items: [
      { name: 'Башспирт', desc: 'Региональный бренд, с которым мы работаем на стыке алкоголя, городской культуры и событий.', img: 'https://keysiksagency.com/wp-content/uploads/2025/10/sibur.jpeg'},
      { name: 'Восточный въезд', desc: 'Инфраструктурный проект, для которого мы придумываем, как превращать транзитные точки в места силы.', img: 'https://keysiksagency.com/wp-content/uploads/2025/11/13.webp'},
      { name: 'Девелоперские проекты', desc: 'Жилые комплексы и городские пространства, где бренд-коммуникация продолжается во дворе, подъезде, паблик-спейсах.', img: 'https://keysiksagency.com/wp-content/uploads/2025/11/14.webp'},
    ]
  },
  {
    title: '💎 Collabs & Campaigns «Atelier», «Rocketbank» и др.',
    items: [
      { name: 'Atelier', desc: 'Проекты на стыке моды, искусства и ночной жизни.', img: 'https://keysiksagency.com/wp-content/uploads/2025/11/15.webp'},
      { name: 'РокетБанк', desc: 'Финансовые и технологические бренды, с которыми мы делаем кампании, встроенные в городскую и культурную повестку.', img: 'https://keysiksagency.com/wp-content/uploads/2025/11/16.webp'},
    ]
  },
]

export default function Cases(){
  const [gIndex, setGIndex] = useState(0)
  const [itemIndex, setItemIndex] = useState(0)

  // auto-slide within group
  useEffect(()=>{
    const id = setInterval(()=>{
      setItemIndex((i)=> (i+1) % groups[gIndex].items.length)
    }, 4000)
    return ()=> clearInterval(id)
  }, [gIndex])

  return (
    <section id="cases" className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {groups.map((g, gi)=> (
          <div key={gi}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl sm:text-4xl font-extrabold">{g.title}</h3>
              <div className="flex gap-2">
                {g.items.map((_, i)=> (
                  <button
                    key={i}
                    onClick={()=>{ setGIndex(gi); setItemIndex(i) }}
                    className={`h-2 w-6 rounded-full transition-colors ${gi===gIndex && i===itemIndex ? 'bg-fuchsia-500' : 'bg-white/20 hover:bg-white/40'}`}
                    aria-label={`Показать слайд ${i+1}`}
                  />
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {g.items.map((it, ii)=> (
                <Tilt key={ii} className={`group relative overflow-hidden rounded-xl border border-white/10 ${gi===gIndex && ii===itemIndex ? 'sm:col-span-2 lg:col-span-3' : ''}`}>
                  <div className="relative">
                    <img src={it.img} alt={it.name} className="h-60 w-full object-cover group-hover:scale-105 transition duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-xl group-hover:text-fuchsia-300 transition">{it.name}</h4>
                    <p className="text-white/80 text-sm whitespace-pre-line">{it.desc}</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
