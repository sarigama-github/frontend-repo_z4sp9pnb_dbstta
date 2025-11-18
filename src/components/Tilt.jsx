import { useRef } from 'react'

export default function Tilt({ children, max = 12, glare = false, className = '' }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * -2 * max
    const ry = (px - 0.5) * 2 * max
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`
    if (glare) {
      el.style.setProperty('--glare-x', `${px * 100}%`)
      el.style.setProperty('--glare-y', `${py * 100}%`)
    }
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`will-change-transform transition-transform duration-200 ${className}`}
      style={glare ? {
        position: 'relative',
        isolation: 'isolate',
      } : undefined}
    >
      {children}
      {glare && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 transition-opacity"
          style={{
            background: `radial-gradient(300px 200px at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,0.25), transparent 60%)`
          }}
        />
      )}
    </div>
  )
}
