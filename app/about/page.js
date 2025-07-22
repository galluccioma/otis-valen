'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Layout from '../../components/Layout'
import ContactCTA from '../../components/ContactCTA'
import Footer from '../../components/Footer'

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let scrollTriggerInstances = []

    const initAnimations = () => {
      scrollTriggerInstances.forEach((instance) => {
        if (instance) instance.kill()
      })
      scrollTriggerInstances = []

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
      scrollTriggerInstances.push(statsAnimation.scrollTrigger)

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
        scrollTriggerInstances.push(portraitAnimation.scrollTrigger)

        const tag1Animation = gsap.to('#tag-1', {
          y: -300,
          rotation: -45,
          scrollTrigger: {
            trigger: '.about-copy',
            start: 'top bottom',
            end: 'bottom+=100% top',
            scrub: 1,
          },
        })
        scrollTriggerInstances.push(tag1Animation.scrollTrigger)

        const tag2Animation = gsap.to('#tag-2', {
          y: -150,
          rotation: 70,
          scrollTrigger: {
            trigger: '.about-copy',
            start: 'top bottom',
            end: 'bottom+=100% top',
            scrub: 1,
          },
        })
        scrollTriggerInstances.push(tag2Animation.scrollTrigger)

        const tag3Animation = gsap.to('#tag-3', {
          y: -400,
          rotation: 120,
          scrollTrigger: {
            trigger: '.about-copy',
            start: 'top bottom',
            end: 'bottom+=100% top',
            scrub: 1,
          },
        })
        scrollTriggerInstances.push(tag3Animation.scrollTrigger)

        const tag4Animation = gsap.to('#tag-4', {
          y: -350,
          rotation: -60,
          scrollTrigger: {
            trigger: '.about-copy',
            start: 'top bottom',
            end: 'bottom+=100% top',
            scrub: 1,
          },
        })
        scrollTriggerInstances.push(tag4Animation.scrollTrigger)

        const tag5Animation = gsap.to('#tag-5', {
          y: -200,
          rotation: 100,
          scrollTrigger: {
            trigger: '.about-copy',
            start: 'top bottom',
            end: 'bottom+=100% top',
            scrub: 1,
          },
        })
        scrollTriggerInstances.push(tag5Animation.scrollTrigger)
      }
    }

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

  return (
    <Layout currentPage="about">
      <div className="page about-page">
        {/* About Hero */}
        <section className="about-hero">
          <div className="about-hero-header">
            <h1>This is</h1>
            <h1>Otis Valen</h1>
          </div>
          <div className="about-hero-bio">
            <p className="ss">
              I'm a digital designer who thrives on color chaos, joyful details,
              and ideas that make you tilt your head and grin. My work blends
              playful thinking with clean execution — whether it's a brand, a
              website, or a weird little concept that shouldn't work (but totally
              does). If it moves, clicks, scrolls, or shimmers — I'm into it.
            </p>
            <p className="mn">Inside my head / slightly filtered</p>
          </div>
          <div className="about-hero-portrait">
            <Image
              src="/images/services-header/portrait.jpeg"
              alt="Otis Valen portrait"
              width={200}
              height={280}
            />
          </div>
        </section>

        {/* About Copy */}
        <section className="about-copy">
          <div className="about-copy-content">
            <h3>
              I design things that click — literally and emotionally. From
              <span> bold</span> brands to <span>pixel-perfect</span> websites, my work lives in the
              digital space where color, energy, and <span>clever</span> details
              come out to play. I'm not here to decorate; I\'m here to
              <span> connect</span>.
            </h3>
            <h3>
              Every project I take on is a <span>sandbox</span> — where ideas get
              messy, buttons have <span>feelings</span>, and layouts get
              <span> personality</span>. I like clean design with a
              <span> wild</span> side, smart systems that don't take themselves too
              <span> seriously</span>, and interfaces that move like they mean it.
            </h3>
            <h3>
              Otis Valen isn't just a name — it's a creative habit. I've spent the
              last few years building visual identities,
              <span> interactive</span> sites, and <span>playful</span> experiences
              for clients who love good design but aren't afraid to have fun with
              it. If that sounds like you, let's make <span>cool</span> stuff.
            </h3>
          </div>
          <div className="tag" id="tag-1"><p>Interactive</p></div>
          <div className="tag" id="tag-2"><p>Joyful</p></div>
          <div className="tag" id="tag-3"><p>Precise</p></div>
          <div className="tag" id="tag-4"><p>Curious</p></div>
          <div className="tag" id="tag-5"><p>Personality</p></div>
        </section>

        {/* Skills */}
        <section className="skills">
          <div className="skills-copy">
            <p className="mn">01........................Illustration</p>
            <p className="mn">02......................VisualIdentity</p>
            <p className="mn">03..........................Typography</p>
            <p className="mn">04......................CreativeCoding</p>
            <p className="mn">05............................Branding</p>
            <p className="mn">06.........................Filmography</p>
            <p className="mn">07......................MotionGraphics</p>
          </div>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="stats-row">
            <div className="stats-col stats-header">
              <h1>I don't love numbers, but they love me</h1>
              <p>Some slightly unhinged stats from the Otis-verse</p>
            </div>
            <div className="stats-col stats-item-1">
              <h1>32</h1>
              <p>
                Design projects that made me shout "this is the one" (every time)
              </p>
            </div>
          </div>
          <div className="stats-row">
            <div className="stats-col stats-item-2">
              <h1>100%</h1>
              <p>Remote, independent, and allergic to open-plan offices</p>
            </div>
            <div className="stats-col stats-item-3">
              <h1>30+</h1>
              <p>Clients who said "wow" — or at least made the face</p>
            </div>
          </div>
        </section>

        <ContactCTA />
        <Footer />
      </div>

      <style jsx>{`
        /* About page specific styles */
        .about-hero {
          position: relative;
          width: 100vw;
          height: 100svh;
          padding: 8em 2em 6em 2em;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          background-color: var(--fg);
          color: var(--bg);
          overflow: hidden;
        }

        .about-hero .about-hero-header {
          text-align: center;
        }

        .about-hero .about-hero-header h1 {
          font-size: 7.5rem;
        }

        .about-hero .about-hero-bio {
          text-align: center;
          width: 50%;
        }

        .about-hero .about-hero-portrait {
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(10deg);
          width: 15%;
          aspect-ratio: 5/7;
          border-radius: 1em;
          overflow: hidden;
          border: 0.25em solid var(--accent3);
          outline: 0.25em solid var(--accent1);
        }

        .about-hero .about-hero-bio {
          display: flex;
          flex-direction: column;
          gap: 2em;
        }

        .about-copy {
          position: relative;
          width: 100vw;
          height: 100%;
          padding: 8em 2em 8em 2em;
        }

        .about-copy .about-copy-content {
          text-align: center;
          width: 50%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          background-color: var(--accent1);
          border: 0.25em solid var(--fg);
          border-radius: 1em;
          padding: 3em 2em;
          gap: 2em;
        }

        .about-copy .about-copy-content h3 {
          font-weight: 400;
        }

        .about-copy .about-copy-content h3 span {
          font-weight: 900;
        }

        .about-copy .tag {
          position: absolute;
          width: max-content;
          background-color: var(--fg);
          border-radius: 0.5em;
        }

        .about-copy .tag p {
          text-transform: uppercase;
          color: var(--bg);
          font-size: 1rem;
          padding: 0.75em 0.5em 0.5em 0.5em;
        }

        .about-copy #tag-1 {
          top: 50%;
          left: 25%;
          transform: translate(-50%, -50%) rotate(20deg);
        }

        .about-copy #tag-2 {
          top: 65%;
          left: 10%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        .about-copy #tag-3 {
          top: 50%;
          left: 75%;
          transform: translate(-50%, -50%) rotate(5deg);
        }

        .about-copy #tag-4 {
          top: 75%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .about-copy #tag-5 {
          top: 100%;
          left: 80%;
          transform: translate(-50%, -50%) rotate(-60deg);
        }

        .skills {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 4em 2em 4em 2em;
        }

        .skills .skills-copy {
          margin: 0 auto;
          padding: 2em;
          width: max-content;
          text-align: center;
          border: 0.2em dashed var(--fg);
          border-radius: 1em;
        }

        .stats {
          padding: 8em 2em;
          display: flex;
          flex-direction: column;
          gap: 2em;
        }

        .stats .stats-row {
          display: flex;
          gap: 2em;
        }

        .stats .stats-header {
          flex: 1;
        }

        .stats .stats-item-1 {
          flex: 1;
          background-color: var(--accent1);
        }

        .stats .stats-item-2 {
          flex: 3;
          background-color: var(--accent3);
        }

        .stats .stats-item-3 {
          flex: 2;
          background-color: var(--fg);
          color: var(--bg);
        }

        .stats .stats-item-1,
        .stats .stats-item-2,
        .stats .stats-item-3 {
          aspect-ratio: 16/7;
          padding: 2em;
          border-radius: 1em;
        }

        .stats .stats-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media (max-width: 1000px) {
          .about-hero {
            padding: 8em 2em 4em 2em;
          }

          .about-hero .about-hero-header h1 {
            font-size: 4rem;
          }

          .about-hero .about-hero-bio {
            width: 100%;
          }

          .about-hero .about-hero-portrait {
            width: 25%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(0deg);
          }

          .about-copy .about-copy-content {
            width: 100%;
          }

          .about-copy .about-copy-content h3 {
            font-size: 1.5rem;
          }

          .about-copy .tag {
            display: none;
          }

          .skills .skills-copy {
            padding: 0;
            width: 100%;
            text-align: center;
            border: none;
            border-radius: 0;
          }

          .stats .stats-row {
            flex-direction: column;
          }

          .stats .stats-col {
            width: 100%;
            text-align: center;
            gap: 4em;
          }

          .stats .stats-header {
            gap: 2em;
            margin-bottom: 2em;
          }
        }
      `}</style>
    </Layout>
  )
}