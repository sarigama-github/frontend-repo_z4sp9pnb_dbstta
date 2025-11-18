export default function Clients(){
  return (
    <section id="clients" className="relative bg-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl sm:text-5xl font-extrabold mb-6">Клиенты</h3>
        <p className="text-white/80 max-w-3xl mb-10">SIBUR, Башспирт, девелоперские и инфраструктурные проекты, ночные клубы и фестивали, гастрономические бренды, международные площадки (в том числе в Дубае) и коллаборации с модными домами и финансовыми сервисами.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            'https://keysiksagency.com/wp-content/uploads/2025/10/sibur.jpeg',
            'https://keysiksagency.com/wp-content/uploads/2025/10/avtomobiliti.jpeg',
            'https://keysiksagency.com/wp-content/uploads/2025/11/photo_2025-11-14_19-14-56.jpg',
            'https://keysiksagency.com/wp-content/uploads/2025/11/photo_2025-11-14_19-14-57.jpg',
            'https://keysiksagency.com/wp-content/uploads/2025/11/photo_2025-11-14_19-14-57-2.jpg',
            'https://keysiksagency.com/wp-content/uploads/2025/11/photo_2025-11-14_19-14-58.jpg',
          ].map((src, i)=> (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
              <img src={src} alt="client" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
