import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_10%,rgba(192,255,0,0.1),transparent),radial-gradient(600px_200px_at_80%_90%,rgba(255,0,204,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl sm:text-5xl font-extrabold leading-tight">
          KEYSIKS AGENCY — креативное агентство из мира ночной жизни, клубной культуры и искусства.
        </motion.h2>
        <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} transition={{delay:0.1}} viewport={{once:true}} className="space-y-6 text-lg text-white/90">
          <p>Мы создаём проекты на стыке бизнеса, девелопмента, энергетики, гастрономии, развлечений и городской среды.</p>
          <p>Наши проекты — там, где бренды встречаются с реальными людьми: клубы, бары и рестораны, фестивали и концерты, арт-пространства, жилые комплексы, общественные проекты и общественные пространства.</p>
          <p>Мы работаем с брендами, которые не боятся быть живыми, громкими, эмоциональными и честными.</p>
          <p>Мы придумываем и реализуем стратегии, события, визуальную идентичность и коммуникации, которые превращают бренды в культурных игроков, а не просто рекламодателей.</p>
        </motion.div>
      </div>
    </section>
  )
}
