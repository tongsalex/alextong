import React from 'react';
import './contact.css';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import angellist from '../../images/angellist.png'
import medium from '../../images/medium.png'
// import linkedin from '../../images/linkedin.png'

const Contact = props => (
  <div className="contact">
    <a className="contact__links" href="tel:917-999-6588">call me at (917) 999 6588</a>
    <a className="contact__links" href = "mailto: tongsalex@gmail.com">email me at tongsalex@gmail.com</a>
    <h1>find me in new york, ny</h1>
    <section className="contact__links--section">
      <a href='http://www.github.com/tongsalex'>
          <img src={github} alt='github' className="button hover-shadow" />
        </a>
        <a href='http://www.linkedin.com/in/tongsalex'>
          <img src={linkedin} alt='linkedin' />
        </a>
        <a href='http://wlth.fr/1R8MPJy'>
          <img src={angellist} alt='angellist' />
        </a>
        <a href='http://soundcloud.com/tongsalex'>
          <img src={medium} alt='medium' />
        </a>
    </section>
  </div>
);

export default Contact;

