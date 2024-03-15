import "./App.css";
import Intro from "./components/Intro/Intro.tsx";
import Navbar from "./components/Navbar/NavBar.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
