import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
