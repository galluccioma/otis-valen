'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AboutHero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (window.innerWidth > 1000) {
      const portraitAnimation = gsap.to('.about-hero-portrait', {
        y: -200,
        rotation: -25,
        scrollTrigger: {
          trigger: '.about-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      return () => {
        portraitAnimation.scrollTrigger?.kill()
      }
    }
  }, [])

  return (
    <section className="about-hero relative w-screen h-screen py-32 px-8 pb-24 flex flex-col justify-between items-center bg-custom-fg text-custom-bg overflow-hidden max-md:py-32 max-md:px-8 max-md:pb-16">
      <div className="text-center">
        <h1 className="text-[7.5rem] max-md:text-[4rem]">This is</h1>
        <h1 className="text-[7.5rem] max-md:text-[4rem]">Otis Valen</h1>
      </div>
      
      <div className="text-center w-1/2 flex flex-col gap-8 max-md:w-full">
        <p className="text-xl font-semibold font-narrow leading-[1.125]">
          I'm a digital designer who thrives on color chaos, joyful details,
          and ideas that make you tilt your head and grin. My work blends
          playful thinking with clean execution — whether it's a brand, a
          website, or a weird little concept that shouldn't work (but totally
          does). If it moves, clicks, scrolls, or shimmers — I'm into it.
        </p>
        <p className="text-sm uppercase font-mono font-medium">Inside my head / slightly filtered</p>
      </div>
      
      <div className="about-hero-portrait absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[10deg] w-[15%] aspect-[5/7] rounded-4 overflow-hidden border-[0.25em] border-custom-accent3 outline outline-[0.25em] outline-custom-accent1 max-md:w-1/4 max-md:top-1/2 max-md:rotate-0">
        <Image
          src="/images/services-header/portrait.jpeg"
          alt="Otis Valen portrait"
          width={200}
          height={280}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}