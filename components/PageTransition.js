'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function PageTransition() {
  useEffect(() => {
    // Initial reveal transition
    const revealTransition = () => {
      gsap.set('.transition-overlay', { scaleY: 1, transformOrigin: 'top' })
      gsap.to('.transition-overlay', {
        scaleY: 0,
        duration: 0.6,
        stagger: -0.1,
        ease: 'power2.inOut',
      })
    }

    revealTransition()
  }, [])

  return (
    <div className="transition">
      <div className="transition-overlay overlay-1"></div>
      <div className="transition-overlay overlay-2"></div>
      <div className="transition-overlay overlay-3"></div>
      <div className="transition-overlay overlay-4"></div>
      <div className="transition-overlay overlay-5"></div>
    </div>
  )
}