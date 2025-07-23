'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FeaturedWork from '../components/FeaturedWork'
import ServicesHeader from '../components/ServicesHeader'
import Services from '../components/Services'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Hero image scroll animation
    const heroScrollTrigger = ScrollTrigger.create({
      trigger: '.hero-img-holder',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const heroImg = document.querySelector('.hero-img')
        if (heroImg) {
          const progress = self.progress
          const translateY = -110 + (progress * 120)
          const scale = 0.25 + (progress * 0.75)
          const rotate = -15 + (progress * 15)
          gsap.set(heroImg, {
            y: `${translateY}%`,
            scale: scale,
            rotation: rotate,
          })
        }
      },
    })

    return () => {
      heroScrollTrigger.kill()
    }
  }, [])

  return (
    <Layout currentPage="home">
      <div className="page home-page">
        <Hero />
        <FeaturedWork />
        <ServicesHeader />
        <Services />
        <Hero />
        <FeaturedWork />
        <ServicesHeader />
        <Services />

        <ContactCTA />
        <Footer />
      </div>
    </Layout>
  )
}