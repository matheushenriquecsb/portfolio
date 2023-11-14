import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Experiences from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./components/ProjectDisplay/ProjectDisplay";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
