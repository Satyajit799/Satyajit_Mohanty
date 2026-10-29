import NavBar from "./component/NavBar";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import LearningJourney from './pages/LearningJourney';
import Contact from './pages/Contact';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className="bg-[#080B14] min-h-screen">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <LearningJourney />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
