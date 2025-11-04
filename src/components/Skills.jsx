import AnimatedSection from './UI/AnimatedSection';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "Python", "Java", "C++"]
    },
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "React.js", "Node.js"]
    },
    {
      category: "Frameworks & Databases",
      skills: ["Flask", "FastAPI", "Firebase Functions", "Firebase (Firestore)", "MongoDB"]
    },
    {
      category: "Testing & Tools",
      skills: ["Postman", "Firebase Emulator", "Git", "GitHub", "VS Code", "Jira"]
    },
    {
      category: "Soft Skills",
      skills: ["Communication", "Problem-Solving", "Time Management", "Teamwork"]
    },
    {
      category: "Operating Systems",
      skills: ["Windows", "Linux"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </AnimatedSection>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index}>
              <div className="skill-category">
                <h3>{category.category}</h3>
                <ul className="skill-list">
                  {category.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
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

export default Skills;