import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './fonts/Signerica_Fat.ttf'
import './App.css';



function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={Title} />
          <Route exact path="/about" render={About} />
          <Route exact path="/projects" render={Projects} />
          <Route exact path="/contact" render={Contact} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
