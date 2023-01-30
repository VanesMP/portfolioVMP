import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Project from './Pages/Project';


function App() {
  return (
    <div className="App">
    <Router>  
        <Routes>
          <Route path='*' element={<Home />}/>
          <Route exact path="/" element={<Home />}/>
          <Route path="/projectPage" element={<Project />}/>
        </Routes> 
    </Router>
    </div>
  );
}

export default App;
