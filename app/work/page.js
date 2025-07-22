'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'

export default function Work() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let scrollTriggerInstances = []

    const initHeaderAnimations = () => {
      gsap.set('.work-profile-icon', { scale: 0 })
      gsap.set('.work-header-arrow-icon', { scale: 0 })

      const headerTl = gsap.timeline({ delay: 0.75 })

      headerTl.to('.work-profile-icon', {
        scale: 1,
        duration: 1,
        ease: 'power4.out',
      })

      headerTl.to(
        '.work-header-arrow-icon',
        {
          scale: 1,
          duration: 0.75,
          ease: 'power4.out',
        },
        '-=0.9'
      )
    }

    const initAnimations = () => {
      scrollTriggerInstances.forEach((instance) => {
        if (instance) instance.kill()
      })
      scrollTriggerInstances = []

      gsap.set('.work-item', {
        opacity: 0,
        scale: 0.75,
      })

      document.querySelectorAll('.work-items .row').forEach((row, index) => {
        const workItems = row.querySelectorAll('.work-item')

        workItems.forEach((item, itemIndex) => {
          const fromLeft = itemIndex % 2 === 0

          gsap.set(item, {
            x: fromLeft ? -1000 : 1000,
            rotation: fromLeft ? -50 : 50,
            transformOrigin: 'center center',
          })
        })

        const trigger = ScrollTrigger.create({
          trigger: row,
          start: 'top 75%',
          onEnter: () => {
            gsap.timeline().to(workItems, {
              duration: 1,
              x: 0,
              rotation: 0,
              opacity: 1,
              scale: 1,
              ease: 'power4.out',
            })
          },
        })
        scrollTriggerInstances.push(trigger)
      })

      ScrollTrigger.refresh()
    }

    initHeaderAnimations()
    initAnimations()

    const handleResize = () => {
      initAnimations()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      scrollTriggerInstances.forEach((instance) => {
        if (instance) instance.kill()
      })
    }
  }, [])

  const workItems = [
    { id: 1, title: 'Cosmic Deli', category: 'Character Design', image: 'work-item-1.jpg' },
    { id: 2, title: 'Skull Pop 7', category: 'Color Exploration', image: 'work-item-2.jpg' },
    { id: 3, title: 'Room 404', category: '3D Composition', image: 'work-item-3.jpg' },
    { id: 4, title: 'Red Dot Mission', category: 'Narrative Design', image: 'work-item-4.jpg' },
    { id: 5, title: 'Sweetbones', category: 'Editorial Illustration', image: 'work-item-5.jpg' },
    { id: 6, title: 'Carnival Bloom 31', category: 'Pattern Design', image: 'work-item-6.jpg' },
    { id: 7, title: 'Soft Noise', category: 'Typography Play', image: 'work-item-7.jpg' },
    { id: 8, title: 'Cloud Valley Echo', category: 'Creative Direction', image: 'work-item-8.jpg' },
    { id: 9, title: 'Heartbyte', category: 'Logo Concept', image: 'work-item-9.jpg' },
    { id: 10, title: 'Orbit Quilt', category: 'Digital Collage', image: 'work-item-10.jpg' },
  ]

  const rows = []
  for (let i = 0; i < workItems.length; i += 2) {
    rows.push(workItems.slice(i, i + 2))
  }

  return (
    <Layout currentPage="work">
      <div className="page work-page">
        {/* Work Header */}
        <section className="work-header">
          <div className="work-header-content">
            <div className="work-profile-icon">
              <Image
                src="/images/work-header/work-portrait.jpg"
                alt="Otis Valen portrait"
                width={100}
                height={100}
              />
            </div>
            <p>Feast your eyes, friend</p>
            <div className="work-header-title">
              <h1>I'm Kinda Proud Of</h1>
              <h1>Stuff I Made</h1>
            </div>
            <div className="work-header-arrow-icon">
              <h1>&#8595;</h1>
            </div>
          </div>
          <div className="work-footer">
            <div className="work-footer-symbols">
              <Image src="/images/global/symbols.png" alt="" width={100} height={16} />
            </div>
            <div className="work-footer-scroll-down">
              <p className="mn">Enter the Archive</p>
            </div>
            <div className="work-footer-tags">
              <p className="mn">The Goods / 2025</p>
            </div>
          </div>
        </section>

        {/* Work Items */}
        <section className="work-items">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((item) => (
                <div key={item.id} className="work-item">
                  <div className="work-item-img">
                    <Link href="/project">
                      <Image
                        src={`/images/work-items/${item.image}`}
                        alt={item.title}
                        width={600}
                        height={360}
                      />
                    </Link>
                  </div>
                  <div className="work-item-content">
                    <h3>{item.title}</h3>
                    <p className="mn">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>

        <Footer />
      </div>

      <style jsx>{`
        /* Work page specific styles */
        .work-header {
          position: relative;
          width: 100vw;
          height: 100vh;
          padding: 2em;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .work-header .work-profile-icon {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 1em;
          margin-bottom: 1em;
          outline: 0.25rem solid var(--accent1);
          border: 0.25rem solid var(--fg);
          overflow: hidden;
        }

        .work-header .work-header-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1em;
        }

        .work-header .work-header-title {
          margin-bottom: 6em;
        }

        .work-header .work-footer {
          position: absolute;
          width: 100%;
          bottom: 0;
          padding: 2em;
          display: flex;
          justify-content: space-between;
        }

        .work-header .work-footer .work-footer-scroll-down {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .work-header .work-footer .work-footer-symbols {
          height: 1rem;
        }

        .work-items {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 100%;
          padding: 2em;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          gap: 4em;
          margin-bottom: 8em;
        }

        .work-items .row {
          display: flex;
          gap: 2em;
        }

        .work-items .row .work-item {
          position: relative;
          flex: 1;
        }

        .work-items .row .work-item .work-item-img {
          aspect-ratio: 5/3;
          border-radius: 1em;
          overflow: hidden;
          margin-bottom: 1em;
        }

        .work-items .row .work-item .work-item-content {
          display: flex;
          flex-direction: column;
          gap: 0.5em;
        }

        @media (max-width: 1000px) {
          .work-header .work-footer .work-footer-symbols {
            display: none;
          }

          .work-header .work-footer {
            display: flex;
            justify-content: flex-end;
          }

          .work-header .work-footer .work-footer-scroll-down {
            left: 2em;
            transform: translateX(0%);
          }

          .work-items .row {
            flex-direction: column;
          }
        }
      `}</style>
    </Layout>
  )
}