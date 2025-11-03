import './styles/globals.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Shanon Ronleo Dsouza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;