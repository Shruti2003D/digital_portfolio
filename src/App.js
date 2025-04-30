import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";
import { Education,Experience} from "./components/Education";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education/>
      <Experience/>
      <Project />
      <Skills />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
