import React from 'react';
import soundcloud from '../../images/soundcloud.png'
import wealthfront from '../../images/wealthfront.png'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import './Footer.css'


const footer = props => (
  <nav className="footer">
    <div className="footer--left">

    </div>

    <div className="footer--right">
      <a href='http://www.github.com/tongsalex'>
        <img src={github} alt='github' />
      </a>
      <a href='http://www.linkedin.com/in/tongsalex'>
        <img src={linkedin} alt='linkedin' />
      </a>
      <a href='http://wlth.fr/1R8MPJy'>
        <img src={wealthfront} alt='wealthfront' />
      </a>
      <a href='http://soundcloud.com/tongsalex'>
        <img src={soundcloud} alt='soundcloud' />
      </a>
    </div>
  </nav>
);

export default footer;

