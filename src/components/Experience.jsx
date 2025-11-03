import AnimatedSection from './UI/AnimatedSection';

const Experience = () => {
  const experiences = [
    {
      company: "Doifoo Internet Pvt. Ltd",
      position: "Founding Engineer",
      duration: "Jun 2024 – Present",
      location: "Remote / Hybrid",
      points: [
        "Designed and implemented a secure auth system; included edge case test/fail conditions",
        "Architected number-based user buckets in Firestore to manage authentication and data separation",
        "Built Doifoo's main website interface with Firebase cloud storage integration for media",
        "Developed UI elements supporting dynamic database fetches from large datasets",
        "Fixed 20+ app-level bugs and regressions; improved stability across major modules",
        "Collected structured data and curated images for 1500+ cities and countries"
      ]
    },
    {
      company: "Hindustan Aeronautics Limited (HAL) Bengaluru",
      position: "Software Engineering Intern",
      duration: "Jul 2024 – Aug 2024",
      location: "Bengaluru",
      points: [
        "Built simulation benchmarking programs in C++; reduced test runtime by 22%",
        "Executed 50+ test iterations with parameter variation (angle, target, timing)",
        "Identified 2 performance bottlenecks in simulation logic through data pattern analysis",
        "Observed code reviews and defense-grade development practices for critical systems"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and contributions
          </p>
        </AnimatedSection>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index}>
              <div className="experience-card">
                <div className="experience-date">{exp.duration}</div>
                <h3>{exp.company}</h3>
                <h4>{exp.position} | {exp.location}</h4>
                <ul className="experience-points">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;