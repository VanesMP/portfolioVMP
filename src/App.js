import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Project from './Pages/Project';


function App() {
  return (
    <div className="App">
    <Router>  
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projectPage/:id" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
    </Router>
    </div>
  );
}

export default App;
