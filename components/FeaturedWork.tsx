'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function FeaturedWork() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const initFeaturedWork = () => {
      if (window.innerWidth <= 1000) return

      const indicatorContainer = document.querySelector('.featured-work-indicator')
      if (!indicatorContainer) return

      indicatorContainer.innerHTML = ''

      for (let section = 1; section <= 5; section++) {
        const sectionNumber = document.createElement('p')
        sectionNumber.className = 'text-sm uppercase font-mono font-medium'
        sectionNumber.textContent = `0${section}`
        indicatorContainer.appendChild(sectionNumber)

        for (let i = 0; i < 10; i++) {
          const indicator = document.createElement('div')
          indicator.className = 'indicator w-full h-[1.5px] bg-custom-bg opacity-20'
          indicatorContainer.appendChild(indicator)
        }
      }

      const featuredCardPosSmall = [
        { y: 100, x: 1000 },
        { y: 1500, x: 100 },
        { y: 1250, x: 1950 },
        { y: 1500, x: 850 },
        { y: 200, x: 2100 },
        { y: 250, x: 600 },
        { y: 1100, x: 1650 },
        { y: 1000, x: 800 },
        { y: 900, x: 2200 },
        { y: 150, x: 1600 },
      ]

      const featuredCardPosLarge = [
        { y: 800, x: 5000 },
        { y: 2000, x: 3000 },
        { y: 240, x: 4450 },
        { y: 1200, x: 3450 },
        { y: 500, x: 2200 },
        { y: 750, x: 1100 },
        { y: 1850, x: 3350 },
        { y: 2200, x: 1300 },
        { y: 3000, x: 1950 },
        { y: 500, x: 4500 },
      ]

      const featuredCardPos = window.innerWidth >= 1600 ? featuredCardPosLarge : featuredCardPosSmall
      const featuredTitles = document.querySelector('.featured-titles')
      const moveDistance = window.innerWidth * 4
      const imagesContainer = document.querySelector('.featured-images')

      if (!imagesContainer) return

      imagesContainer.innerHTML = ''

      for (let i = 1; i <= 10; i++) {
        const featuredImgCard = document.createElement('div')
        featuredImgCard.className = `featured-img-card featured-img-card-${i} absolute w-[300px] h-[300px] rounded-[2em] overflow-hidden`

        const img = document.createElement('img')
        img.src = `/images/work-items/work-item-${i}.jpg`
        img.alt = `featured work image ${i}`
        img.className = 'w-full h-full object-cover'
        featuredImgCard.appendChild(img)

        const position = featuredCardPos[i - 1]

        gsap.set(featuredImgCard, {
          x: position.x,
          y: position.y,
          z: -1500,
          scale: 0,
        })

        imagesContainer.appendChild(featuredImgCard)
      }

      const featuredImgCards = document.querySelectorAll('.featured-img-card')

      ScrollTrigger.create({
        trigger: '.featured-work',
        start: 'top top',
        end: `+=${window.innerHeight * 5}px`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const xPosition = -moveDistance * self.progress
          gsap.set(featuredTitles, {
            x: xPosition,
          })

          featuredImgCards.forEach((featuredImgCard, index) => {
            const staggerOffset = index * 0.075
            const scaledProgress = (self.progress - staggerOffset) * 2
            const individualProgress = Math.max(0, Math.min(1, scaledProgress))
            const newZ = -1500 + (1500 + 1500) * individualProgress
            const scaleProgress = Math.min(1, individualProgress * 10)
            const scale = Math.max(0, Math.min(1, scaleProgress))

            gsap.set(featuredImgCard, {
              z: newZ,
              scale: scale,
            })
          })

          const indicators = document.querySelectorAll('.indicator')
          const totalIndicators = indicators.length
          const progressPerIndicator = 1 / totalIndicators

          indicators.forEach((indicator, index) => {
            const indicatorStart = index * progressPerIndicator
            const indicatorOpacity = self.progress > indicatorStart ? 1 : 0.2

            gsap.to(indicator, {
              opacity: indicatorOpacity,
              duration: 0.3,
            })
          })
        },
      })
    }

    initFeaturedWork()

    const handleResize = () => {
      ScrollTrigger.refresh()
      initFeaturedWork()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="featured-work relative w-screen h-screen overflow-hidden max-md:h-auto max-md:py-16">
      <div className="featured-images absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] max-md:hidden"
           style={{ transformStyle: 'preserve-3d', perspective: '500px' }}>
      </div>
      
      <div className="featured-titles relative w-[500vw] h-screen flex max-md:w-screen max-md:h-auto max-md:flex-col max-md:gap-8"
           style={{ willChange: 'transform' }}>
        <div className="flex-1 flex flex-col justify-center items-center gap-4 max-md:mb-8">
          <h1 className="text-center -translate-y-2 max-md:translate-y-0 max-md:w-3/4">Work Playground</h1>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
          <div className="featured-title-img relative w-[calc(100%-4em)] h-[150px] border-[0.2em] border-custom-fg rounded-4 overflow-hidden hidden max-md:block max-md:aspect-[5/3] max-md:border-[0.2em] max-md:border-custom-fg max-md:rounded-4">
            <Image src="/images/work-items/work-item-1.jpg" alt="" width={400} height={150} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-center -translate-y-2 max-md:translate-y-0 max-md:w-3/4">Cosmic Deli</h1>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
          <div className="featured-title-img relative w-[calc(100%-4em)] h-[150px] border-[0.2em] border-custom-fg rounded-4 overflow-hidden hidden max-md:block max-md:aspect-[5/3] max-md:border-[0.2em] max-md:border-custom-fg max-md:rounded-4">
            <Image src="/images/work-items/work-item-2.jpg" alt="" width={400} height={150} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-center -translate-y-2 max-md:translate-y-0 max-md:w-3/4">Skull Pop 7</h1>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
          <div className="featured-title-img relative w-[calc(100%-4em)] h-[150px] border-[0.2em] border-custom-fg rounded-4 overflow-hidden hidden max-md:block max-md:aspect-[5/3] max-md:border-[0.2em] max-md:border-custom-fg max-md:rounded-4">
            <Image src="/images/work-items/work-item-3.jpg" alt="" width={400} height={150} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-center -translate-y-2 max-md:translate-y-0 max-md:w-3/4">Red Dot Mission</h1>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
          <div className="featured-title-img relative w-[calc(100%-4em)] h-[150px] border-[0.2em] border-custom-fg rounded-4 overflow-hidden hidden max-md:block max-md:aspect-[5/3] max-md:border-[0.2em] max-md:border-custom-fg max-md:rounded-4">
            <Image src="/images/work-items/work-item-4.jpg" alt="" width={400} height={150} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-center -translate-y-2 max-md:translate-y-0 max-md:w-3/4">Sweetbones</h1>
        </div>
      </div>

      <div className="featured-work-indicator absolute top-1/2 right-8 -translate-y-1/2 w-8 h-max py-5 px-[0.65rem] bg-custom-fg text-custom-bg rounded-[40px] flex flex-col justify-center items-center gap-[0.35rem] z-10 max-md:hidden">
      </div>

      <div className="absolute bottom-0 w-full px-8 flex justify-between items-center z-[2] max-md:relative max-md:mt-16 max-md:justify-center">
        <p className="text-sm uppercase font-mono font-medium max-md:hidden">Visual Vault [ 10 ]</p>
        <p className="text-sm uppercase font-mono font-medium max-md:hidden">///////////////////</p>
        <p className="text-sm uppercase font-mono font-medium">
          <a href="/work">Browse Full Bizarre</a>
        </p>
      </div>
    </section>
  )
}