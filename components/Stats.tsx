'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Stats() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(['.stats-item-1', '.stats-item-2', '.stats-item-3'], {
      scale: 0,
    })

    const statsAnimation = gsap.to(
      ['.stats-item-1', '.stats-item-2', '.stats-item-3'],
      {
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.stats',
          start: 'top 50%',
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      statsAnimation.scrollTrigger?.kill()
    }
  }, [])

  return (
    <section className="stats py-32 px-8 flex flex-col gap-8 max-md:flex-col">
      <div className="flex gap-8 max-md:flex-col">
        <div className="flex-1 flex flex-col justify-between max-md:w-full max-md:text-center max-md:gap-16 max-md:mb-8">
          <h1>I don't love numbers, but they love me</h1>
          <p className="text-xl font-semibold font-narrow leading-[1.125]">Some slightly unhinged stats from the Otis-verse</p>
        </div>
        <div className="stats-item-1 flex-1 aspect-[16/7] p-8 rounded-4 bg-custom-accent1 flex flex-col justify-between max-md:w-full max-md:text-center max-md:gap-16">
          <h1>32</h1>
          <p className="text-xl font-semibold font-narrow leading-[1.125]">
            Design projects that made me shout "this is the one" (every time)
          </p>
        </div>
      </div>
      <div className="flex gap-8 max-md:flex-col">
        <div className="stats-item-2 flex-[3] aspect-[16/7] p-8 rounded-4 bg-custom-accent3 flex flex-col justify-between max-md:w-full max-md:text-center max-md:gap-16">
          <h1>100%</h1>
          <p className="text-xl font-semibold font-narrow leading-[1.125]">Remote, independent, and allergic to open-plan offices</p>
        </div>
        <div className="stats-item-3 flex-[2] aspect-[16/7] p-8 rounded-4 bg-custom-fg text-custom-bg flex flex-col justify-between max-md:w-full max-md:text-center max-md:gap-16">
          <h1>30+</h1>
          <p className="text-xl font-semibold font-narrow leading-[1.125]">Clients who said "wow" — or at least made the face</p>
        </div>
      </div>
    </section>
  )
}