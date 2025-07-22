'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'

export default function Contact() {
  useEffect(() => {
    const container = document.querySelector('.trail-container')
    let isDesktop = window.innerWidth > 1000
    let animationId = null
    let mouseMoveListener = null

    const config = {
      imageCount: 10,
      imageLifespan: 750,
      removalDelay: 50,
      mouseThreshold: 100,
      inDuration: 750,
      outDuration: 1000,
      inEasing: 'cubic-bezier(.07,.5,.5,1)',
      outEasing: 'cubic-bezier(.87, 0, .13, 1)',
    }

    const images = Array.from(
      { length: config.imageCount },
      (_, i) => `/images/work-items/work-item-${i + 1}.jpg`
    )
    const trail = []

    let mouseX = 0,
      mouseY = 0,
      lastMouseX = 0,
      lastMouseY = 0
    let isCursorInContainer = false
    let lastRemovalTime = 0

    const isInContainer = (x, y) => {
      const rect = container.getBoundingClientRect()
      return (
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      )
    }

    const hasMovedEnough = () => {
      const distance = Math.sqrt(
        Math.pow(mouseX - lastMouseX, 2) + Math.pow(mouseY - lastMouseY, 2)
      )
      return distance > config.mouseThreshold
    }

    const createImage = () => {
      const img = document.createElement('img')
      img.classList.add('trail-img')

      const randomIndex = Math.floor(Math.random() * images.length)
      const rotation = (Math.random() - 0.5) * 50
      img.src = images[randomIndex]

      const rect = container.getBoundingClientRect()
      const relativeX = mouseX - rect.left
      const relativeY = mouseY - rect.top

      img.style.left = `${relativeX}px`
      img.style.top = `${relativeY}px`
      img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`
      img.style.transition = `transform ${config.inDuration}ms ${config.inEasing}`

      container.appendChild(img)

      setTimeout(() => {
        img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`
      }, 10)

      trail.push({
        element: img,
        rotation: rotation,
        removeTime: Date.now() + config.imageLifespan,
      })
    }

    const removeOldImages = () => {
      const now = Date.now()

      if (now - lastRemovalTime < config.removalDelay || trail.length === 0)
        return

      const oldestImage = trail[0]
      if (now >= oldestImage.removeTime) {
        const imgToRemove = trail.shift()

        imgToRemove.element.style.transition = `transform ${config.outDuration}ms ${config.outEasing}`
        imgToRemove.element.style.transform = `translate(-50%, -50%) rotate(${imgToRemove.rotation}deg) scale(0)`

        lastRemovalTime = now

        setTimeout(() => {
          if (imgToRemove.element.parentNode) {
            imgToRemove.element.parentNode.removeChild(imgToRemove.element)
          }
        }, config.outDuration)
      }
    }

    const startAnimation = () => {
      if (!isDesktop) return

      mouseMoveListener = (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
        isCursorInContainer = isInContainer(mouseX, mouseY)

        if (isCursorInContainer && hasMovedEnough()) {
          lastMouseX = mouseX
          lastMouseY = mouseY
          createImage()
        }
      }

      document.addEventListener('mousemove', mouseMoveListener)

      const animate = () => {
        removeOldImages()
        animationId = requestAnimationFrame(animate)
      }
      animate()
    }

    const stopAnimation = () => {
      if (mouseMoveListener) {
        document.removeEventListener('mousemove', mouseMoveListener)
        mouseMoveListener = null
      }

      if (animationId) {
        cancelAnimationFrame(animationId)
        animationId = null
      }

      trail.forEach((item) => {
        if (item.element.parentNode) {
          item.element.parentNode.removeChild(item.element)
        }
      })
      trail.length = 0
    }

    const handleResize = () => {
      const wasDesktop = isDesktop
      isDesktop = window.innerWidth > 1000

      if (isDesktop && !wasDesktop) {
        startAnimation()
      } else if (!isDesktop && wasDesktop) {
        stopAnimation()
      }
    }

    window.addEventListener('resize', handleResize)

    if (isDesktop) {
      startAnimation()
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      stopAnimation()
    }
  }, [])

  return (
    <Layout currentPage="contact">
      <div className="page contact-page">
        {/* Contact */}
        <section className="contact trail-container">
          <div className="contact-card contact-card-1">
            <div className="contact-card-header-main">
              <h1>Otis is listening</h1>
              <p>
                Got a wild idea? Need a brand facelift? Or just wanna send a
                design meme? I'm all ears. Whether it's a proper brief or just a
                "hey, let's build something," the inbox is open and slightly
                buzzing.
              </p>
            </div>
            <p className="mn contact-card-header">Project Proposals</p>
            <p className="mn">inquiry@otisvalen.com</p>
            <br />
            <p className="mn contact-card-header">Just Vibes</p>
            <p className="mn">hi@otisvalen.com</p>
          </div>
          <div className="contact-card contact-card-2">
            <p className="mn contact-card-header">Drop a Line &#8599;</p>
          </div>
          <div className="contact-symbol">
            <Image src="/images/global/symbols.png" alt="" width={100} height={16} />
          </div>
        </section>
      </div>

      <style jsx>{`
        /* Contact page specific styles */
        .contact {
          position: relative;
          width: 100vw;
          height: 100svh;
          padding: 2em;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          background-color: var(--bg);
          overflow: hidden;
        }

        .contact .trail-img {
          position: absolute;
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 1em;
          transform-origin: center;
          pointer-events: none;
          will-change: transform;
        }

        .contact-card {
          border-radius: 1em;
          display: flex;
          flex-direction: column;
          gap: 0.5em;
        }

        .contact .contact-card-header-main {
          margin-bottom: 4em;
          display: flex;
          flex-direction: column;
          gap: 1em;
        }

        .contact .contact-card-header-main p {
          width: 50%;
        }

        .contact p.contact-card-header {
          padding: 0.25em 0.5em;
          border-radius: 0.25em;
          width: max-content;
          background-color: var(--fg);
          color: var(--bg);
        }

        .contact .contact-symbol {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 1rem;
        }

        @media (max-width: 1000px) {
          .contact {
            height: 100svh;
            padding: 2em;
            flex-direction: column;
            text-align: center;
            justify-content: flex-end;
            gap: 4em;
          }

          .contact .contact-card {
            width: 100%;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .contact .contact-card-header-main p {
            width: 100%;
          }

          .contact .contact-symbol {
            display: none;
          }
        }
      `}</style>
    </Layout>
  )
}