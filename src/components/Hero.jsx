import { Download, ArrowRight } from 'lucide-react';
import AnimatedSection from './UI/AnimatedSection';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <AnimatedSection>
          <div className="hero-content">
            <div className="hero-badge">
              Full-Stack Developer & CS Student
            </div>
            <h1>
              Shanon <span className="gradient-text">Ronleo Dsouza</span>
            </h1>
            <p>
              Passionate about creating scalable, secure solutions and 
              delivering exceptional user experiences through modern technology
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-button primary">
                Get In Touch <ArrowRight size={20} />
              </a>
              <a href="#projects" className="cta-button">
                View My Work
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;