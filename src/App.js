import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Project from './Pages/Project';


function App() {
  return (
    <div className="App">
    <Router>  
        <Routes>
          {/* <Route path='*' element={<Home />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/projectPage/:id" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
    </Router>
    </div>
  );
}

export default App;
