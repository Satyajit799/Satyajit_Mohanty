import NavBar from "./component/NavBar";
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <div className="bg-[#080B14] min-h-screen">
      <NavBar />
      <Home />
      <About />
    </div>
  );
};

export default App;
