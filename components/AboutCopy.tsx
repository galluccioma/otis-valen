'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AboutCopy() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (window.innerWidth > 1000) {
      const animations = [
        { id: '#tag-1', y: -300, rotation: -45 },
        { id: '#tag-2', y: -150, rotation: 70 },
        { id: '#tag-3', y: -400, rotation: 120 },
        { id: '#tag-4', y: -350, rotation: -60 },
        { id: '#tag-5', y: -200, rotation: 100 }
      ]

      const scrollTriggers = animations.map(({ id, y, rotation }) =>
        gsap.to(id, {
          y,
          rotation,
          scrollTrigger: {
            trigger: '.about-copy',
            start: 'top bottom',
            end: 'bottom+=100% top',
            scrub: 1,
          },
        })
      )

      return () => {
        scrollTriggers.forEach(animation => animation.scrollTrigger?.kill())
      }
    }
  }, [])

  return (
    <section className="about-copy relative w-screen h-full py-32 px-8">
      <div className="text-center w-1/2 mx-auto flex flex-col bg-custom-accent1 border-[0.25em] border-custom-fg rounded-4 py-12 px-8 gap-8 max-md:w-full">
        <h3 className="font-normal text-2xl">
          I design things that click — literally and emotionally. From
          <span className="font-black"> bold</span> brands to <span className="font-black">pixel-perfect</span> websites, my work lives in the
          digital space where color, energy, and <span className="font-black">clever</span> details
          come out to play. I'm not here to decorate; I\'m here to
          <span className="font-black"> connect</span>.
        </h3>
        <h3 className="font-normal text-2xl">
          Every project I take on is a <span className="font-black">sandbox</span> — where ideas get
          messy, buttons have <span className="font-black">feelings</span>, and layouts get
          <span className="font-black"> personality</span>. I like clean design with a
          <span className="font-black"> wild</span> side, smart systems that don't take themselves too
          <span className="font-black"> seriously</span>, and interfaces that move like they mean it.
        </h3>
        <h3 className="font-normal text-2xl">
          Otis Valen isn't just a name — it's a creative habit. I've spent the
          last few years building visual identities,
          <span className="font-black"> interactive</span> sites, and <span className="font-black">playful</span> experiences
          for clients who love good design but aren't afraid to have fun with
          it. If that sounds like you, let's make <span className="font-black">cool</span> stuff.
        </h3>
      </div>

      {/* Tags - hidden on mobile */}
      <div className="tag absolute w-max bg-custom-fg rounded-2 top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 rotate-[20deg] max-md:hidden" id="tag-1">
        <p className="uppercase text-custom-bg text-base py-3 px-2 pb-2">Interactive</p>
      </div>
      <div className="tag absolute w-max bg-custom-fg rounded-2 top-[65%] left-[10%] -translate-x-1/2 -translate-y-1/2 -rotate-[45deg] max-md:hidden" id="tag-2">
        <p className="uppercase text-custom-bg text-base py-3 px-2 pb-2">Joyful</p>
      </div>
      <div className="tag absolute w-max bg-custom-fg rounded-2 top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 rotate-[5deg] max-md:hidden" id="tag-3">
        <p className="uppercase text-custom-bg text-base py-3 px-2 pb-2">Precise</p>
      </div>
      <div className="tag absolute w-max bg-custom-fg rounded-2 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[45deg] max-md:hidden" id="tag-4">
        <p className="uppercase text-custom-bg text-base py-3 px-2 pb-2">Curious</p>
      </div>
      <div className="tag absolute w-max bg-custom-fg rounded-2 top-full left-4/5 -translate-x-1/2 -translate-y-1/2 -rotate-[60deg] max-md:hidden" id="tag-5">
        <p className="uppercase text-custom-bg text-base py-3 px-2 pb-2">Personality</p>
      </div>
    </section>
  )
}