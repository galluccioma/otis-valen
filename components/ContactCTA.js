import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="contact-button">
        <Link href="/contact"></Link>
        <div className="contact-text-small">
          <p>Collabs, or cosmic brainstorms welcome</p>
        </div>
        <div className="contact-text-large">
          <h1>Hit Me Up</h1>
        </div>
      </div>
    </section>
  )
}