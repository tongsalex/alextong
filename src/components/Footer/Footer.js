import React from 'react';
import soundcloud from '../../images/soundcloud.png';
import wealthfront from '../../images/wealthfront.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import angellist from '../../images/angellist.png';
import medium from '../../images/medium.png';
import robinhood from '../../images/robinhood.jpg';
import './Footer.css'


const Footer = props => (
  <nav className="footer">
    <div className="footer--left">
    </div>

    <div className="footer--right">
      <a href='http://github.com/tongsalex' target="_blank" rel="noopener noreferrer">
        <img src={github} alt='github' className="button hover-shadow" />
      </a>
      <a href='http://linkedin.com/in/tongsalex' target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt='linkedin' />
      </a>
      <a href='http://angel.co/tongsalex' target="_blank" rel="noopener noreferrer">
        <img src={angellist} alt='angellist' />
      </a>
      <a href='http://medium.com/@tongsalex' target="_blank" rel="noopener noreferrer">
        <img src={medium} alt='medium' />
      </a>
      <a href='http://wlth.fr/1R8MPJy' target="_blank" rel="noopener noreferrer">
        <img src={wealthfront} alt='wealthfront' />
      </a>
      <a href='https://join.robinhood.com/alexant2910' target="_blank" rel="noopener noreferrer">
        <img src={robinhood} alt='robinhood' />
      </a>
      <a href='http://soundcloud.com/tongsalex' target="_blank" rel="noopener noreferrer">
        <img src={soundcloud} alt='soundcloud' />
      </a>

    </div>
  </nav>
);

export default Footer;

