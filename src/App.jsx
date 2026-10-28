import NavBar from "./component/NavBar";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';

const App = () => {
  return (
    <div className="bg-[#080B14] min-h-screen">
      <NavBar />
      <Home />
      <About />
      <Skills />
    </div>
  );
};

export default App;
