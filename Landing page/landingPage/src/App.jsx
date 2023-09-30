import "./App.css";
import "./App.css";
import Navbar from "./modules/navigation/index";
import Fondo from "./modules/fondo";
import HeroBanner from "./modules/hero";
import About from "./modules/about";
function App() {
  return (
    <Fondo>
      <Navbar />
      <HeroBanner />
      <About />
    </Fondo>
  );
}

export default App;
