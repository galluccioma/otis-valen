'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer({ isContactPage = false }) {
  useEffect(() => {
    if (isContactPage) return

    const footer = document.querySelector('footer')
    const explosionContainer = document.querySelector('.explosion-container')
    let hasExploded = false

    const config = {
      gravity: 0.25,
      friction: 0.99,
      imageSize: 150,
      horizontalForce: 20,
      verticalForce: 15,
      rotationSpeed: 10,
      resetDelay: 500,
    }

    const imageParticleCount = 10
    const imagePaths = Array.from(
      { length: imageParticleCount },
      (_, i) => `/images/work-items/work-item-${i + 1}.jpg`
    )

    const createParticles = () => {
      explosionContainer.innerHTML = ''

      imagePaths.forEach((path) => {
        const particle = document.createElement('img')
        particle.src = path
        particle.classList.add('explosion-particle-img')
        particle.style.width = `${config.imageSize}px`
        explosionContainer.appendChild(particle)
      })
    }

    class Particle {
      constructor(element) {
        this.element = element
        this.x = 0
        this.y = 0
        this.vx = (Math.random() - 0.5) * config.horizontalForce
        this.vy = -config.verticalForce - Math.random() * 10
        this.rotation = 0
        this.rotationSpeed = (Math.random() - 0.5) * config.rotationSpeed
      }

      update() {
        this.vy += config.gravity
        this.vx *= config.friction
        this.vy *= config.friction
        this.rotationSpeed *= config.friction

        this.x += this.vx
        this.y += this.vy
        this.rotation += this.rotationSpeed

        this.element.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.rotation}deg)`
      }
    }

    const explode = () => {
      if (hasExploded) return
      hasExploded = true

      createParticles()

      const particleElements = document.querySelectorAll('.explosion-particle-img')
      const particles = Array.from(particleElements).map((element) => new Particle(element))

      let animationId

      const animate = () => {
        particles.forEach((particle) => particle.update())
        animationId = requestAnimationFrame(animate)

        if (particles.every((particle) => particle.y > explosionContainer.offsetHeight / 2)) {
          cancelAnimationFrame(animationId)
        }
      }

      animate()
    }

    const checkFooterPosition = () => {
      const footerRect = footer.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      if (footerRect.top > viewportHeight + 100) {
        hasExploded = false
      }

      if (!hasExploded && footerRect.top <= viewportHeight + 250) {
        explode()
      }
    }

    let checkTimeout
    const handleScroll = () => {
      clearTimeout(checkTimeout)
      checkTimeout = setTimeout(checkFooterPosition, 5)
    }

    const handleResize = () => {
      hasExploded = false
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    createParticles()
    setTimeout(checkFooterPosition, 500)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isContactPage])

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-symbols footer-symbols-1">
          <Image src="/images/global/s6.png" alt="" width={16} height={16} />
          <Image src="/images/global/s6.png" alt="" width={16} height={16} />
        </div>
        <div className="footer-symbols footer-symbols-2">
          <Image src="/images/global/s6.png" alt="" width={16} height={16} />
          <Image src="/images/global/s6.png" alt="" width={16} height={16} />
        </div>
        <div className="footer-header">
          <h1>Otis Valen</h1>
        </div>
        <div className="footer-row">
          <div className="footer-col">
            <p>Quick Jumps</p>
            <p><Link href="/work">Portfolio</Link></p>
            <p><Link href="/about">About</Link></p>
            <p><Link href="/contact">Contact</Link></p>
          </div>
          <div className="footer-col">
            <p>Side Streets</p>
            <p>Roll the Showreel</p>
            <p>Weird Shop</p>
            <p>Buy Me a Coffee</p>
          </div>
          <div className="footer-col">
            <p>Social Signals</p>
            <p>
              <a href="https://www.youtube.com/@codegrid" target="_blank">
                YouTube
              </a>
            </p>
            <p>
              <a href="https://codegrid.gumroad.com/l/codegridpro" target="_blank">
                Membership
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/codegridweb/" target="_blank">
                Instagram
              </a>
            </p>
          </div>
          <div className="footer-col">
            <p>Alt Dimensions</p>
            <p>Logo Dump</p>
            <p>Freelance Top 100</p>
          </div>
        </div>
        <div className="copyright-info">
          <p className="mn">MWT - MAY 2025</p>
          <p className="mn">//</p>
          <p className="mn">
            Built by{' '}
            <a href="https://www.youtube.com/@codegrid" target="_blank">
              Codegrid
            </a>
          </p>
        </div>
        <div className="explosion-container"></div>
      </div>
    </footer>
  )
}