'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ServiceCardProps {
  id: string
  title: string
  image: string
  bgColor: string
  textColor?: string
}

const ServiceCard = ({ id, title, image, bgColor, textColor = 'text-custom-fg' }: ServiceCardProps) => (
  <div className="service-card relative min-h-[300px]" id={id}>
    <div className="service-card-inner relative w-[calc(100vw-4em)] h-full mx-auto px-8 py-8 flex gap-16 rounded-[2em] min-h-[500px] max-md:min-h-0 max-md:flex-col max-md:justify-center max-md:gap-4 max-md:text-center max-md:border-[0.2em] max-md:border-custom-fg max-md:rounded-4"
         style={{ willChange: 'transform', backgroundColor: bgColor }}>
      <div className={`flex-[3] flex flex-col gap-8 ${textColor}`}>
        <h1>{title}</h1>
      </div>
      <div className="flex-1 aspect-[4/5] rounded-[2em] overflow-hidden max-md:aspect-[5/3] max-md:border-[0.2em] max-md:border-custom-fg max-md:rounded-4">
        <Image
          src={image}
          alt="Service"
          width={400}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
)

export default function Services() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const initServices = () => {
      if (window.innerWidth <= 1000) return

      const services = gsap.utils.toArray('.service-card')

      services.forEach((service: any, index) => {
        const isLastServiceCard = index === services.length - 1
        const serviceCardInner = service.querySelector('.service-card-inner')

        if (!isLastServiceCard) {
          ScrollTrigger.create({
            trigger: service,
            start: 'top 45%',
            endTrigger: '.contact-cta',
            end: 'top 90%',
            pin: true,
            pinSpacing: false,
          })

          gsap.to(serviceCardInner, {
            y: `-${(services.length - index) * 14}vh`,
            ease: 'none',
            scrollTrigger: {
              trigger: service,
              start: 'top 45%',
              endTrigger: '.contact-cta',
              end: 'top 90%',
              scrub: true,
            },
          })
        }
      })
    }

    initServices()

    const handleResize = () => {
      ScrollTrigger.refresh()
      initServices()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const services = [
    {
      id: 'service-card-1',
      title: 'Visual DNA',
      image: '/images/services/service-1.jpg',
      bgColor: 'var(--accent1)'
    },
    {
      id: 'service-card-2',
      title: 'Brand Alchemy',
      image: '/images/services/service-2.jpg',
      bgColor: 'var(--accent2)'
    },
    {
      id: 'service-card-3',
      title: 'Feel First Design',
      image: '/images/services/service-3.jpg',
      bgColor: 'var(--accent3)'
    },
    {
      id: 'service-card-4',
      title: 'Human Clicks',
      image: '/images/services/service-4.jpg',
      bgColor: 'var(--fg)',
      textColor: 'text-custom-bg'
    }
  ]

  return (
    <section className="services max-md:flex max-md:flex-col max-md:gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </section>
  )
}