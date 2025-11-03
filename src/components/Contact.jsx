import AnimatedSection from './UI/AnimatedSection';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </AnimatedSection>

        <div className="contact-links">
          <AnimatedSection>
            <a href="tel:+918867084867" className="contact-link">
              <Phone size={24} />
              <span>+91 8867084867</span>
            </a>
          </AnimatedSection>

          <AnimatedSection>
            <a href="mailto:shanondsouza046@gmail.com" className="contact-link">
              <Mail size={24} />
              <span>shanondsouza046@gmail.com</span>
            </a>
          </AnimatedSection>

          <AnimatedSection>
            <a href="https://linkedin.com/in/shanonrdsouza" className="contact-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </AnimatedSection>

          <AnimatedSection>
            <a href="https://github.com/ShanonDsouza046" className="contact-link" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
              <span>GitHub</span>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;