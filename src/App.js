import React from 'react';
import soundcloud from './soundcloud.png'
import wealthfront from './wealthfront.png'
import github from './github.png'
import linkedin from './linkedin.png'
import './fonts/Signerica_Fat.ttf'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <header>
          <b>
            al
            <span>e</span>
            x
            <span>  To</span>
            ng
          </b>
        </header>
        
        <nav>
            <a href='http://www.github.com/tongsalex'>
              <img src={github} alt='github' />
            </a>
            <a href='http://www.linkedin.com/in/tongsalex'>
              <img src={linkedin} alt='linkedin' />
            </a>
            <a href='http://wlth.fr/1R8MPJy'>
              <img src={wealthfront} alt='wealthfront' />
            </a>
            <a href='http://soundcloud.com/alexandersroom'>
              <img src={soundcloud} alt='soundcloud' />
            </a>
        </nav>

      </div>
    </div>
  );
}

export default App;
