export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-status">
            <span className="status-dot" aria-hidden="true"></span>
            Terbuka untuk peluang kerja
          </p>
          <h1 className="hero-title">
            Sahrul Hidayat
            <br />
            <span className="hero-title-sub">
              membangun aplikasi web dari nol sampai jalan.
            </span>
          </h1>
          <p className="hero-lede">
            Fresh graduate Rekayasa Perangkat Lunak dari SMK ICB Cinta Teknika, Bandung.
            Terbiasa mengerjakan proyek dari perencanaan database sampai tampilan jadi —
            pakai PHP, Laravel, React, dan MySQL.
          </p>
          <div className="hero-actions">
            <a href="#proyek" className="btn btn-primary">
              Lihat proyek
            </a>
            <a href="#kontak" className="btn btn-ghost">
              Hubungi saya
            </a>
          </div>
          <div className="hero-meta">
            <span>Bandung, Indonesia</span>
            <span className="meta-sep">·</span>
            <a href="https://github.com/Arull-rill" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span className="meta-sep">·</span>
            <a
              href="https://www.linkedin.com/in/sahrul-hidayat-818217401"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <img
              src="/assets/profile.jpg"
              alt="Foto Sahrul Hidayat"
              className="photo"
              width="480"
              height="600"
            />
          </div>
          <div className="code-card" aria-hidden="true">
            <div className="code-card-head">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-filename">profil.json</span>
            </div>
            <pre className="code-body">
              <span className="tok-key">"role"</span>: <span className="tok-str">"Junior Web Developer"</span>,{'\n'}
              <span className="tok-key">"stack"</span>: [<span className="tok-str">"PHP"</span>, <span className="tok-str">"Laravel"</span>, <span className="tok-str">"React"</span>],{'\n'}
              <span className="tok-key">"status"</span>: <span className="tok-str">"lulus, siap kerja"</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
