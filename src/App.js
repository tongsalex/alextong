import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title'
import Footer from './components/Footer/Footer'
import './fonts/Signerica_Fat.ttf'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Footer />
    </div>
  );
}

export default App;
