import { useReveal } from '../hooks/useReveal'
import { featuredProject, projects } from '../data/content'

export default function Projects() {
  const revealRef = useReveal()

  return (
    <section className="section" id="proyek">
      <div className="wrap section-grid">
        <div className="section-label">
          <span className="spec-index">SEC.03</span>
          <span className="label-num">Proyek</span>
        </div>

        <div className="section-content reveal" ref={revealRef}>
          {/* Featured project — no screenshot, strongest credential (real client work) */}
          <article className="project-feature">
            <div className="feature-copy">
              <span className="project-tag">{featuredProject.tag}</span>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
              <ul className="project-tech">
                {featuredProject.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="feature-visual" aria-hidden="true">
              <div className="feature-visual-inner">
                <span className="feature-visual-label">CMS Admin</span>
                <div className="fv-row"><span></span><span className="fv-bar" style={{ width: '72%' }}></span></div>
                <div className="fv-row"><span></span><span className="fv-bar" style={{ width: '45%' }}></span></div>
                <div className="fv-row"><span></span><span className="fv-bar" style={{ width: '88%' }}></span></div>
                <div className="fv-row"><span></span><span className="fv-bar" style={{ width: '60%' }}></span></div>
              </div>
            </div>
          </article>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-shot">
                  <div className="shot-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="shot-tag">FIG.{String(index + 2).padStart(2, '0')}</span>
                  </div>
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    width="900"
                    height="509"
                  />
                </div>
                <div className="project-card-body">
                  <div className="project-head">
                    <h3>{project.title}</h3>
                    <span className="project-tag">{project.tag}</span>
                  </div>
                  <p>{project.description}</p>
                  <ul className="project-tech">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <p className="project-footnote">
            Kode lengkap dan proyek lainnya ada di{' '}
            <a href="https://github.com/Arull-rill" target="_blank" rel="noopener noreferrer">
              github.com/Arull-rill
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
