import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HeroSection />}
        />
        <Route
          path="/about"
          element={<div>About</div>}
        />
        <Route
          path="/projects"
          element={<div>Projects</div>}
        />
        <Route
          path="/tools"
          element={<div>Tools</div>}
        />
        <Route
          path="/contact"
          element={<div>Contact</div>}
        />
        <Route
          path="/blog"
          element={<div>Blog</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
