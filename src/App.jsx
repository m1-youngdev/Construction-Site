import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
  
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/services" element={<Services />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/blog" element={<Blog />} />
    </Routes>
    </>
  )
}

export default App
