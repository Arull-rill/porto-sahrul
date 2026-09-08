import { useReveal } from '../hooks/useReveal'
import { skillGroups } from '../data/content'

export default function Skills() {
  const revealRef = useReveal()

  return (
    <section className="section section-alt" id="keahlian">
      <div className="wrap section-grid">
        <div className="section-label">
          <span className="spec-index">SEC.02</span>
          <span className="label-num">Keahlian</span>
        </div>
        <div className="section-content reveal" ref={revealRef}>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
