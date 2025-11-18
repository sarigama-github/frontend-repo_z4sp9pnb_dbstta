import { useRef } from 'react'

export default function Magnetic({children, strength = 20, className = ''}){
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if(!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width/2
    const relY = e.clientY - rect.top - rect.height/2
    const tx = (relX / (rect.width/2)) * strength
    const ty = (relY / (rect.height/2)) * strength
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
  }
  const onLeave = () => {
    const el = ref.current
    if(!el) return
    el.style.transform = 'translate3d(0,0,0)'
  }

  return (
    <span
      className={`inline-block will-change-transform transition-transform duration-150 ${className}`}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </span>
  )
}
