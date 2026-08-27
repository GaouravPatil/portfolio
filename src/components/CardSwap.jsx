import React, { useState, useEffect, useRef, Children } from 'react'

export function Card({ children, className = '', style = {} }) {
  return (
    <div className={`card-swap-item ${className}`} style={style}>
      {children}
    </div>
  )
}

export default function CardSwap({
  children,
  cardDistance = 40,
  verticalDistance = 50,
  delay = 5000,
  pauseOnHover = true,
}) {
  const cards = Children.toArray(children)
  const [order, setOrder] = useState(() => cards.map((_, i) => i))
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef(null)

  const swap = () => {
    setOrder(prev => {
      const next = [...prev]
      const first = next.shift()
      next.push(first)
      return next
    })
  }

  useEffect(() => {
    if (cards.length <= 1) return
    if (pauseOnHover && isHovered) return

    timerRef.current = setInterval(() => {
      swap()
    }, delay)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [cards.length, delay, pauseOnHover, isHovered])

  return (
    <div
      className="card-swap-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={swap}
    >
      <div className="card-swap-stack">
        {cards.map((card, originalIndex) => {
          const posIndex = order.indexOf(originalIndex)
          const total = cards.length

          const offsetY = posIndex * (verticalDistance * 0.45)
          const scale = 1 - posIndex * 0.04
          const zIndex = total - posIndex
          const opacity = posIndex > 2 ? 0 : 1 - posIndex * 0.12

          return (
            <div
              key={originalIndex}
              className={`card-swap-wrapper ${posIndex === 0 ? 'is-top' : ''}`}
              style={{
                transform: `translate3d(0, ${offsetY}px, ${-posIndex * cardDistance}px) scale(${scale})`,
                zIndex,
                opacity,
              }}
            >
              {card}
            </div>
          )
        })}
      </div>

      <div className="card-swap-controls">
        {cards.map((_, idx) => (
          <button
            key={idx}
            className={`card-swap-dot ${order[0] === idx ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              setOrder(prev => {
                const targetPos = prev.indexOf(idx)
                const next = [...prev]
                const rotated = next.slice(targetPos).concat(next.slice(0, targetPos))
                return rotated
              })
            }}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
