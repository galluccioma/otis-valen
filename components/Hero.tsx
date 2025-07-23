'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(1)
  const totalImages = 10

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => prev >= totalImages ? 1 : prev + 1)
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className="relative w-screen h-screen px-8 flex flex-col justify-center items-center overflow-x-hidden">
        <div className="hero-header-wrapper">
          <div className="hero-header hero-header-1 relative -translate-x-1/5 -z-10">
            <h1 className="text-[20vw] leading-[0.9]">umazing</h1>
          </div>
          <div className="hero-header hero-header-2 relative translate-x-1/5 z-[2]">
            <h1 className="text-[20vw] leading-[0.9]">studio</h1>
          </div>
        </div>
        <div className="absolute w-full bottom-0 px-8 flex justify-between">
          <div className="h-4 max-md:hidden">
            <Image src="/images/global/symbols.png" alt="" width={100} height={16} />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 max-md:left-8 max-md:translate-x-0">
            <p className="text-sm uppercase font-mono font-medium">Pixels by Otis / 2025</p>
          </div>
          <div>
            <p className="text-sm uppercase font-mono font-medium">Portfolio Mode: ON</p>
          </div>
        </div>
      </section>

      <section className="hero-img-holder relative w-screen h-screen px-8">
        <div className="hero-img relative w-full h-full border-[0.3em] border-custom-fg rounded-[2em] overflow-hidden">
          <Image 
            src={`/images/work-items/work-item-${currentImageIndex}.jpg`} 
            alt="Hero image" 
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <style jsx>{`
          .hero-img {
            transform: translateY(-110%) scale(0.25) rotate(-15deg);
          }
        `}</style>
      </section>
    </>
  )
}