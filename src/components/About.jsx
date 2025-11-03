import AnimatedSection from './UI/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my journey and passion
          </p>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="about-content">
            <p>
              Results-driven B.Tech Computer Science student with expertise in full-stack development. 
              Experienced in building secure authentication systems, implementing comprehensive testing 
              strategies, and creating seamless UI integrations with cloud resources.
            </p>
            <br />
            <p>
              Passionate about developing scalable, secure solutions that provide exceptional user experiences. 
              Always eager to take on new challenges and contribute to innovative projects.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;