import AnimatedSection from './UI/AnimatedSection';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "Doifoo – Hyperlocal Booking Platform",
      duration: "Jun 2024 – Present",
      description: "Developed UI and backend for bookings and dynamic listings using Firebase",
      points: [
        "Integrated Firebase Emulator to safely test access rules and backend logic",
        "Executed 25+ test cases validating core flows: search, booking, cancelation"
      ],
      tech: ["React", "Firebase", "Firestore", "CSS"]
    },
    {
      name: "WhisBurn – Encrypted Message Vault",
      duration: "Jun 2024 – Present",
      description: "Built a vault app for encrypted self-destructing messages using RSA + Firestore",
      points: [
        "Manually tested one-time view triggers and encryption edge cases",
        "Live: shanondsouza046.github.io/WhisBurn"
      ],
      tech: ["React", "RSA Encryption", "Firestore", "CSS"],
      github: "https://github.com/ShanonDsouza046/WhisBurn",
      live: "https://shanondsouza046.github.io/WhisBurn"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Some of my recent work and personal projects
          </p>
        </AnimatedSection>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <AnimatedSection key={index}>
              <div className="project-card">
                <h3>{project.name}</h3>
                <div className="project-duration">{project.duration}</div>
                <p>{project.description}</p>
                <ul>
                  {project.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;