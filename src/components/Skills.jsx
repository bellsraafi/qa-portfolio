import resume from '../data/resume.json'

export default function Skills() {
  return (
    <>
      <h2 className="section-header">SKILLS &amp; ARSENAL</h2>
      <div className="skills__groups">
        {resume.skills.map((group) => (
          <div className="skill-group" key={group.group}>
            <h3 className="skill-group__label">{group.group}</h3>
            <div className="skill-group__pills">
              {group.items.map((item) => (
                <span className="pill" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
