'use client'

import { useEffect } from 'react'
import Navigation from './Navigation'
import PageTransition from './PageTransition'
import { initLenisScroll } from '../lib/lenis'

export default function Layout({ children, currentPage = 'home' }) {
  useEffect(() => {
    initLenisScroll()
  }, [])

  return (
    <>
      <PageTransition />
      <Navigation currentPage={currentPage} />
      {children}
    </>
  )
}