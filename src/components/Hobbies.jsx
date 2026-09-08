import { useReveal } from '../hooks/useReveal'
import { musicHighlights } from '../data/content'

const instruments = ['Drum', 'Gitar', 'Bass']

export default function Hobbies() {
  const revealRef = useReveal()

  return (
    <section className="section" id="musik">
      <div className="wrap section-grid">
        <div className="section-label">
          <span className="spec-index">SEC.05</span>
          <span className="label-num">Musik</span>
        </div>
        <div className="section-content reveal" ref={revealRef}>
          <p className="lead-text">
            Di luar coding, saya main musik — bisa drum, gitar, dan bass. Beberapa kali
            tampil langsung di panggung, dari acara 17 Agustusan bareng band{' '}
            <strong>The Kacrut</strong>, acara sekolah bareng band teman-teman, sampai
            gigs EcoFest di salah satu kampus.
          </p>
          <ul className="tag-list instrument-tags">
            {instruments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="music-grid">
            {musicHighlights.map((item) => (
              <figure className="music-card" key={item.caption}>
                <div className="music-photo">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </div>
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
