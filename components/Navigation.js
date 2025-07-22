'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

export default function Navigation({ currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleMenu = () => {
    if (isAnimating) {
      gsap.killTweensOf(['.nav-overlay', '.open-label', '.close-label', '.nav-item'])
      setIsAnimating(false)
    }

    if (!isMenuOpen) {
      setIsAnimating(true)
      
      const navOverlay = document.querySelector('.nav-overlay')
      const openLabel = document.querySelector('.open-label')
      const closeLabel = document.querySelector('.close-label')
      const navItems = document.querySelectorAll('.nav-item')
      const menuToggleBtn = document.querySelector('.menu-toggle-btn')

      navOverlay.style.pointerEvents = 'all'
      menuToggleBtn.classList.add('menu-open')
      
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'

      gsap.to(openLabel, {
        y: '-1rem',
        duration: 0.3,
      })

      gsap.to(closeLabel, {
        y: '-1rem',
        duration: 0.3,
      })

      gsap.to(navOverlay, {
        opacity: 1,
        duration: 0.3,
        onComplete: () => {
          setIsAnimating(false)
        },
      })

      gsap.to([navItems, '.nav-footer-item-header', '.nav-footer-item-copy'], {
        opacity: 1,
        y: '0%',
        duration: 0.75,
        stagger: 0.075,
        ease: 'power4.out',
      })

      setIsMenuOpen(true)
    } else {
      setIsAnimating(true)
      
      const navOverlay = document.querySelector('.nav-overlay')
      const openLabel = document.querySelector('.open-label')
      const closeLabel = document.querySelector('.close-label')
      const menuToggleBtn = document.querySelector('.menu-toggle-btn')

      navOverlay.style.pointerEvents = 'none'
      menuToggleBtn.classList.remove('menu-open')
      
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(document.body.style.top || '0') * -1)

      gsap.to(openLabel, {
        y: '0rem',
        duration: 0.3,
      })

      gsap.to(closeLabel, {
        y: '0rem',
        duration: 0.3,
      })

      gsap.to(navOverlay, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set(['.nav-item', '.nav-footer-item-header', '.nav-footer-item-copy'], {
            opacity: 0,
            y: '100%',
          })
          setIsAnimating(false)
        },
      })

      setIsMenuOpen(false)
    }
  }

  const getNavItemClass = (page) => {
    return `nav-item ${currentPage === page ? 'active' : ''}`
  }

  return (
    <>
      <nav>
        <div className="logo">
          <div className="logo-container">
            <p className="mn">
              <Link href="/">Otis ✦ Valen</Link>
            </p>
          </div>
        </div>
        <div className="menu-toggle-btn" onClick={toggleMenu}>
          <div className="menu-toggle-btn-wrapper">
            <p className="mn open-label">Menu</p>
            <p className="mn close-label">Close</p>
          </div>
        </div>
      </nav>

      <div className="nav-overlay">
        <div className="nav-items">
          <div className={getNavItemClass('home')}>
            <p><Link href="/">Index</Link></p>
          </div>
          <div className={getNavItemClass('work')}>
            <p><Link href="/work">The Good Stuff</Link></p>
          </div>
          <div className={getNavItemClass('about')}>
            <p><Link href="/about">Meet Otis</Link></p>
          </div>
          <div className={getNavItemClass('contact')}>
            <p><Link href="/contact">Slide In</Link></p>
          </div>
        </div>
        <div className="nav-footer">
          <div className="nav-footer-item">
            <div className="nav-footer-item-header">
              <p className="mn">Find Me</p>
            </div>
            <div className="nav-footer-item-copy">
              <p className="mn"><a href="#" target="_blank">Instagram</a></p>
              <p className="mn"><a href="#" target="_blank">LinkedIn</a></p>
            </div>
          </div>
          <div className="nav-footer-item">
            <div className="nav-footer-item-copy">
              <p className="mn">MWT — May 2025 // Codegrid</p>
            </div>
          </div>
          <div className="nav-footer-item">
            <div className="nav-footer-item-header">
              <p className="mn">Say Hi</p>
            </div>
            <div className="nav-footer-item-copy">
              <p className="mn">
                <a href="mailto:hello@otisvalen.com" target="_blank">
                  hello@otisvalen.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}