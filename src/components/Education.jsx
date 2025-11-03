import AnimatedSection from './UI/AnimatedSection';

const Education = () => {
  const education = [
    {
      institution: "Jain University, Faculty of Engineering & Technology",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "Oct 2022 – Oct 2026",
      details: "Current Semester: 7, CGPA: 8.3/10"
    },
    {
      institution: "St. Aloysius PU College",
      degree: "12th - Karnataka PUC Board",
      duration: "2022",
      details: "Percentage: 78.83%"
    },
    {
      institution: "St. Joseph High School",
      degree: "10th - Karnataka State Board",
      duration: "2020",
      details: "Percentage: 86.72%"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and achievements
          </p>
        </AnimatedSection>

        <div className="education-grid">
          {education.map((edu, index) => (
            <AnimatedSection key={index}>
              <div className="education-card">
                <div className="education-date">{edu.duration}</div>
                <h3>{edu.institution}</h3>
                <h4>{edu.degree}</h4>
                <p>{edu.details}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;