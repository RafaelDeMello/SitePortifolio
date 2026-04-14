import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

interface TrailPoint {
  x: number
  y: number
  id: number
}

export function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const trailIdRef = useRef(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      
      setTrail(prev => {
        const newPoint = { x: e.clientX, y: e.clientY, id: trailIdRef.current++ }
        return [...prev, newPoint].slice(-12)
      })
    }

    window.addEventListener('mousemove', moveCursor)

    const interval = setInterval(() => {
      setTrail(prev => prev.slice(1))
    }, 50)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      clearInterval(interval)
    }
  }, [cursorX, cursorY])

  if (!mounted) return null

  return (
    <>
      {trail.map((point, i) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50"
          style={{
            x: point.x - 4,
            y: point.y - 4,
            opacity: (i / trail.length) * 0.3,
            scale: (i / trail.length) * 0.8 + 0.2,
            backgroundColor: '#4A7A9B'
          }}
        />
      ))}
    </>
  )
}
