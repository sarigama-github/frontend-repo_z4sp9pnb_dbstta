export default function Marquee(){
  const text = 'ИСКУССТВО — ЕСТЬ маркетинг · KEYSIKS AGENCY · клубы · бары · фестивали · концерты · арт-пространства · девелопмент · гастрономия · городская среда · бренды, которые не боятся быть живыми · бренды, которые создают культуру · ИСКУССТВО — ЕСТЬ маркетинг · KEYSIKS AGENCY · '
  return (
    <div className="relative bg-black text-white overflow-hidden py-3 border-y border-white/10">
      <div className="whitespace-nowrap will-change-transform animate-[marq_40s_linear_infinite]">
        {[...Array(6)].map((_,i)=> (
          <span key={i} className="mx-4 text-sm sm:text-lg tracking-wide text-white/80">{text}</span>
        ))}
      </div>
      <style>{`
        @keyframes marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}
