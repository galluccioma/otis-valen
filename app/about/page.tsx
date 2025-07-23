'use client'

import Layout from '../../components/Layout'
import AboutHero from '../../components/AboutHero'
import AboutCopy from '../../components/AboutCopy'
import Skills from '../../components/Skills'
import Stats from '../../components/Stats'
import ContactCTA from '../../components/ContactCTA'
import Footer from '../../components/Footer'

export default function About() {
  return (
    <Layout currentPage="about">
      <div className="page about-page">
        <AboutHero />
        <AboutCopy />
        <Skills />
        <Stats />
        <ContactCTA />
        <Footer />
      </div>
    </Layout>
  )
}