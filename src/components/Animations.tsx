import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: ScrollRevealProps) {
  const ref = useRef(null)
  
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 60, opacity: 0 }
      case 'down': return { y: -60, opacity: 0 }
      case 'left': return { x: 60, opacity: 0 }
      case 'right': return { x: -60, opacity: 0 }
      case 'none': return { opacity: 0 }
    }
  }

  const getFinalPosition = () => ({
    x: direction === 'left' || direction === 'right' ? 0 : undefined,
    y: direction === 'up' || direction === 'down' ? 0 : undefined,
    opacity: 1
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, className = '' }: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
