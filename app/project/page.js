'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Layout from '../../components/Layout'
import ContactCTA from '../../components/ContactCTA'
import Footer from '../../components/Footer'

export default function Project() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Project preview scroll animation
    ScrollTrigger.create({
      trigger: '.project-page-whitespace',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        const projectPreviewWrapper = document.querySelector('.project-preview-wrapper')
        const previewCols = document.querySelectorAll('.preview-col:not(.main-preview-col)')
        const mainPreviewImg = document.querySelector('.preview-img.main-preview-img img')

        if (!projectPreviewWrapper || !mainPreviewImg) return

        const previewScreenWidth = window.innerWidth
        const previewMaxScale = previewScreenWidth < 900 ? 4 : 2.65

        const scale = 1 + self.progress * previewMaxScale
        const yPreviewColTranslate = self.progress * 300
        const mainPreviewImgScale = 2 - self.progress * 0.85

        projectPreviewWrapper.style.transform = `translate(-50%, -50%) scale(${scale})`

        previewCols.forEach((previewCol) => {
          previewCol.style.transform = `translateY(${yPreviewColTranslate}px)`
        })

        mainPreviewImg.style.transform = `scale(${mainPreviewImgScale})`
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <Layout currentPage="work">
      <div className="page project-page">
        {/* Project Preview Gallery */}
        <section className="project-preview">
          <div className="project-preview-wrapper">
            <div className="preview-col">
              <div className="preview-img">
                <Image src="/images/work-items/work-item-8.jpg" alt="" width={400} height={600} />
              </div>
              <div className="preview-img">
                <Image src="/images/work-items/work-item-2.jpg" alt="" width={400} height={600} />
              </div>
              <div className="preview-img">
                <Image src="/images/work-items/work-item-3.jpg" alt="" width={400} height={600} />
              </div>
            </div>
            <div className="preview-col">
              <div className="preview-img">
                <Image src="/images/work-items/work-item-4.jpg" alt="" width={400} height={600} />
              </div>
              <div className="preview-img">
                <Image src="/images/work-items/work-item-5.jpg" alt="" width={400} height={600} />
              </div>
              <div className="preview-img">
                <Image src="/images/work-items/work-item-6.jpg" alt="" width={400} height={600} />
              </div>
            </div>
            <div className="preview-col main-preview-col">
              <div className="preview-img">
                <Image src="/images/work-items/work-item-7.jpg" alt="" width={400} height={600} />
              </div>
              <div className="preview-img main-preview-img">
                <Image src="/images/work-items/work-item-1.jpg" alt="" width={400} height={600} />
              </div>
              <div className="preview-img">
                <Image src="/images/work-items/work-item-9.jpg" alt="" width={400} height={600} />
              </div>
            </div>
            <div className="preview-col">
              <div className="preview-img">
                <Image src="/images/work-items/work-item-10.jpg" alt="" width={400} height={600} />
              </div>
              <div className="preview-img">
                <Image src="/images/work-items/work-item-8.jpg" alt="" width={400} height={600} />
              </div>
              <div className="preview-img">
                <Image src="/images/work-items/work-item-2.jpg" alt="" width={400} height={600} />
              </div>
            </div>
            <div className="preview-col">
              <div className="preview-img">
                <Image src="/images/work-items/work-item-3.jpg" alt="" width={400} height={600} />
              </div>
              <div className="preview-img">
                <Image src="/images/work-items/work-item-4.jpg" alt="" width={400} height={600} />
              </div>
              <div className="preview-img">
                <Image src="/images/work-items/work-item-5.jpg" alt="" width={400} height={600} />
              </div>
            </div>
          </div>
        </section>

        {/* Project Hero */}
        <section className="project-hero">
          <div className="project-hero-header">
            <div className="project-hero-header-h1">
              <Image src="/images/global/s6-dark.png" alt="" width={16} height={16} />
              <h1>Room 404</h1>
              <Image src="/images/global/s6-dark.png" alt="" width={16} height={16} />
            </div>
            <div className="project-tags">
              <p className="mn">3D Composition</p>
              <p className="mn">//</p>
              <p className="mn">Conceptual UI</p>
            </div>
          </div>
          <div className="project-hero-description">
            <p>
              Room 404 is a surreal interface study—built like a dream, styled
              like a glitch. Inspired by forgotten log-in screens, hotel lobbies
              in space, and retro-futurism at large, this project blends 3D
              visuals with UI elements that feel oddly familiar. It's not
              functional. It's not broken. It just... exists. Welcome in.
            </p>
          </div>
          <div className="project-hero-footer">
            <div className="project-hero-footer-symbols">
              <Image src="/images/global/symbols.png" alt="" width={100} height={16} />
            </div>
            <div className="project-hero-footer-scroll-down">
              <p className="mn">Scroll Down</p>
            </div>
            <div className="project-hero-footer-tags">
              <p className="mn">Project 0001</p>
            </div>
          </div>
        </section>

        {/* Project Whitespace */}
        <section className="project-page-whitespace"></section>

        {/* Project Client Feedback */}
        <section className="project-client-feedback">
          <div className="project-client-feedback-header">
            <h1>What They Said After</h1>
          </div>
          <div className="project-client-feedback-copy">
            <p>
              "Otis didn't just deliver a design — they delivered a whole
              experience. Every detail felt intentional, every color felt like it
              had a story. We came in with a vague idea and left with a brand that
              felt like it had its own personality. Also, they're weirdly good at
              naming buttons."
            </p>
          </div>
          <div className="project-client-info">
            <div className="project-client-icon">
              <Image
                src="/images/project/client-portrait.jpg"
                alt="Client portrait"
                width={100}
                height={100}
              />
            </div>
            <div className="project-client-bio">
              <p>Juno Merrick</p>
              <p className="mn">Director, WOW Studio</p>
            </div>
          </div>
        </section>

        {/* Project Snapshots */}
        <section className="project-snapshots">
          <div className="project-snapshot">
            <Image src="/images/work-items/work-item-6.jpg" alt="" width={800} height={450} />
          </div>
          <div className="project-snapshot">
            <Image src="/images/work-items/work-item-8.jpg" alt="" width={800} height={450} />
          </div>
          <div className="project-snapshot">
            <Image src="/images/work-items/work-item-10.jpg" alt="" width={800} height={450} />
          </div>
        </section>

        <ContactCTA />
        <Footer />
      </div>

      <style jsx>{`
        /* Project page specific styles */
        .project-preview {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          padding: 0;
          background-color: var(--fg);
          overflow: hidden;
        }

        .project-preview .project-preview-wrapper {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1);
          width: 160vw;
          height: 100vh;
          display: flex;
          gap: 4em;
        }

        .project-preview .project-preview-wrapper .preview-col {
          position: relative;
          flex: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 4em;
        }

        .project-preview .project-preview-wrapper .preview-img {
          flex: 1;
          border-radius: 1em;
          overflow: hidden;
        }

        .project-preview .project-preview-wrapper .preview-img.main-preview-img img {
          position: relative;
          transform: scale(2);
        }

        .project-hero {
          position: relative;
          width: 100vw;
          height: 100svh;
          padding: 2em;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6em;
          overflow: hidden;
          background-color: var(--bg);
        }

        .project-hero .project-hero-header {
          display: flex;
          flex-direction: column;
          gap: 2em;
        }

        .project-hero-header-h1 {
          display: flex;
          align-items: center;
          gap: 2em;
        }

        .project-hero-header-h1 img {
          width: 1rem;
          height: 1rem;
        }

        .project-hero .project-tags {
          display: flex;
          justify-content: center;
          gap: 1em;
        }

        .project-hero .project-hero-description {
          width: 50%;
          text-align: center;
        }

        .project-hero .project-hero-footer {
          position: absolute;
          width: 100%;
          bottom: 0;
          padding: 2em;
          display: flex;
          justify-content: space-between;
        }

        .project-hero .project-hero-footer .project-hero-footer-scroll-down {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .project-hero .project-hero-footer .project-hero-footer-symbols {
          height: 1rem;
        }

        .project-page-whitespace {
          width: 100vw;
          height: 600vh;
        }

        .project-client-feedback {
          position: relative;
          width: 100vw;
          padding: 8em 2em;
          background-color: var(--bg);
        }

        .project-client-feedback .project-client-feedback-header {
          text-align: center;
          margin-bottom: 8em;
        }

        .project-client-feedback .project-client-feedback-copy {
          width: 65%;
          margin: 2em auto 4em auto;
        }

        .project-client-feedback .project-client-feedback-copy p {
          text-align: center;
          font-size: 2.5rem;
        }

        .project-client-feedback .project-client-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 1.5em;
        }

        .project-client-feedback .project-client-icon {
          width: 100px;
          height: 100px;
          border-radius: 1em;
          overflow: hidden;
          border: 0.2em solid var(--fg);
          outline: 0.2em solid var(--accent1);
        }

        .project-client-feedback .project-client-bio {
          display: flex;
          flex-direction: column;
          gap: 0.25em;
        }

        .project-snapshots {
          position: relative;
          width: 100vw;
          padding: 4em 2em;
          background-color: var(--bg);
          display: flex;
          flex-direction: column;
          gap: 2em;
        }

        .project-snapshots .project-snapshot {
          aspect-ratio: 16/9;
          border-radius: 2em;
          overflow: hidden;
        }

        .project-page .contact-cta,
        .project-page footer {
          background-color: var(--bg);
        }

        @media (max-width: 1000px) {
          .project-hero .project-hero-footer .project-hero-footer-symbols {
            display: none;
          }

          .project-hero .project-hero-footer {
            display: flex;
            justify-content: flex-end;
          }

          .project-hero .project-hero-footer .project-hero-footer-scroll-down {
            left: 2em;
            transform: translateX(0%);
          }

          .project-hero .project-hero-description {
            width: 100%;
          }

          .project-preview .project-preview-wrapper {
            width: 250vw;
          }

          .project-client-feedback .project-client-feedback-copy {
            width: 100%;
          }

          .project-client-feedback .project-client-feedback-copy p {
            font-size: 1.5rem;
          }

          .project-snapshots .project-snapshot {
            aspect-ratio: 5/7;
          }
        }
      `}</style>
    </Layout>
  )
}