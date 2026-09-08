import { useReveal } from '../hooks/useReveal'
import { facts } from '../data/content'

export default function About() {
  const revealRef = useReveal()

  return (
    <section className="section" id="tentang">
      <div className="wrap section-grid">
        <div className="section-label">
          <span className="spec-index">SEC.01</span>
          <span className="label-num">Tentang</span>
        </div>
        <div className="section-content reveal" ref={revealRef}>
          <p className="lead-text">
            Sejak sekolah, saya tertarik ke dunia pengembangan web — bukan cuma teori, tapi
            langsung praktik bikin sesuatu yang bisa dipakai. Beberapa proyek yang sudah
            saya selesaikan mulai dari sistem kasir, platform kuis, sampai website band
            dengan CMS sendiri untuk kliennya.
          </p>
          <p className="body-text">
            Saya nyaman kerja dengan PHP dan Laravel di sisi backend, React dan Vue.js di
            sisi frontend, serta MySQL untuk data. Selain koding, saya juga terbiasa pakai
            Git/GitHub untuk kolaborasi dan Postman untuk uji API. Pengalaman magang di
            lingkungan pemerintahan (BNN Kota Bandung) mengajarkan saya disiplin kerja dan
            tanggung jawab terhadap data — bukan cuma soal coding, tapi juga cara kerja
            profesional.
          </p>
          <div className="fact-row">
            {facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <span className="fact-value">{fact.value}</span>
                <span className="fact-label">{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
