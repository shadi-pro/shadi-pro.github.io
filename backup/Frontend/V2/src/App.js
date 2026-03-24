import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import GoToTop from './components/GoToTop'; 

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <GoToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;