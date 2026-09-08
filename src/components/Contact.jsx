import { useReveal } from '../hooks/useReveal'

const contactLinks = [
  {
    label: 'Email',
    value: 'sahrulhidayats898@gmail.com',
    href: 'mailto:sahrulhidayats898@gmail.com',
    external: false,
  },
  {
    label: 'Telepon',
    value: '+62 819 1250 9319',
    href: 'tel:+6281912509319',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'sahrul-hidayat',
    href: 'https://www.linkedin.com/in/sahrul-hidayat-818217401',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'Arull-rill',
    href: 'https://github.com/Arull-rill',
    external: true,
  },
]

export default function Contact() {
  const revealRef = useReveal()

  return (
    <section className="section contact" id="kontak">
      <div className="wrap contact-inner reveal" ref={revealRef}>
        <span className="spec-index contact-prompt">SEC.06</span>
        <h2 className="contact-title">Ada posisi yang cocok?</h2>
        <p className="contact-lede">
          Saya siap kerja individual maupun tim, dan terbuka untuk diskusi lebih lanjut
          soal peran yang lagi dibuka di tempat kalian.
        </p>
        <div className="contact-grid">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact-card"
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              <span className="contact-label">{link.label}</span>
              <span className="contact-value">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
