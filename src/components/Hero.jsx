import { motion } from 'framer-motion'

const slides = [
  'https://keysiksagency.com/wp-content/uploads/2025/11/1.webp',
  'https://keysiksagency.com/wp-content/uploads/2025/11/2.webp',
  'https://keysiksagency.com/wp-content/uploads/2025/11/3.webp',
  'https://keysiksagency.com/wp-content/uploads/2025/11/4.webp',
  'https://keysiksagency.com/wp-content/uploads/2025/11/5.webp',
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="https://keysiksagency.com/wp-content/uploads/2025/10/keysiksagency.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

      {/* subtle slideshow drifting in z */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40">
        <div className="absolute inset-0 animate-[slideshow_40s_linear_infinite]" style={{backgroundImage:`url(${slides[0]})`, backgroundSize:'cover', backgroundPosition:'center'}} />
        <div className="absolute inset-0 animate-[slideshow_40s_linear_infinite_10s]" style={{backgroundImage:`url(${slides[1]})`, backgroundSize:'cover', backgroundPosition:'center'}} />
        <div className="absolute inset-0 animate-[slideshow_40s_linear_infinite_20s]" style={{backgroundImage:`url(${slides[2]})`, backgroundSize:'cover', backgroundPosition:'center'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-white/70 mb-4 tracking-widest text-xs uppercase">
          Architecture of creative industries
        </motion.p>
        <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
          Мы не делаем маркетинг. Мы и есть маркетинг!
        </motion.h1>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}} className="max-w-3xl mt-6 text-lg sm:text-xl text-white/90 leading-relaxed">
          <p>Мы выросли из ночной жизни.</p>
          <p>Из мира, где свет и музыка рождали сообщества, а события становились культурным кодом.</p>
          <p>Где пиар и ивенты были не профессией, а ритмом нашего дыхания.</p>
          <p>Теперь очередь брендов.</p>
          <p>Включаем свет. Поднимаем занавес. Начинаем спектакль.</p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#cases" className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium overflow-hidden">
            <span className="absolute inset-0 bg-lime-400 translate-y-full group-hover:translate-y-0 transition-transform" />
            <span className="relative z-10">Показать кейсы</span>
          </a>
          <a href="#contact" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white hover:border-fuchsia-400 hover:text-fuchsia-300 transition">
            Заказать проект
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideshow { 0%{transform:scale(1)} 50%{transform:scale(1.08)} 100%{transform:scale(1)} }
        .animate-[slideshow_40s_linear_infinite]{ animation: slideshow 40s linear infinite; }
        .animate-[slideshow_40s_linear_infinite_10s]{ animation: slideshow 40s linear infinite; animation-delay:10s; }
        .animate-[slideshow_40s_linear_infinite_20s]{ animation: slideshow 40s linear infinite; animation-delay:20s; }
      `}</style>
    </section>
  )
}
