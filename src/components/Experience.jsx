import { useReveal } from '../hooks/useReveal'
import { timeline } from '../data/content'

export default function Experience() {
  const revealRef = useReveal()

  return (
    <section className="section section-alt" id="pengalaman">
      <div className="wrap section-grid">
        <div className="section-label">
          <span className="spec-index">SEC.04</span>
          <span className="label-num">Pengalaman</span>
        </div>
        <div className="section-content reveal" ref={revealRef}>
          <div className="timeline">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.title}>
                <div className="timeline-when">{item.when}</div>
                <div className="timeline-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
