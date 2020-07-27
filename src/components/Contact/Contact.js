import React from 'react';
import './contact.css';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import angellist from '../../images/angellist.png'
import medium from '../../images/medium.png'
// import linkedin from '../../images/linkedin.png'

const Contact = props => (
  <div className="contact">
    <section className="contact__section--info">
      <a className="contact__links" href="tel:917-999-6588">call me at <span className="contact--phone">(917) 999 6588</span></a>
      <a className="contact__links" href = "mailto: tongsalex@gmail.com">email me at <span className="contact--email">tongsalex@gmail.com</span></a>
      <h1>find me in <span className="contact--location">new y<span className="contact--blink">or</span>k, ny</span></h1>
    </section>

    <section className="contact__section--links">
      <div>
        <a href='http://www.github.com/tongsalex'>
          <img src={github} alt='github' className="button hover-shadow" />
        </a>
        <a href='http://www.linkedin.com/in/tongsalex'>
          <img src={linkedin} alt='linkedin' />
        </a>
      </div>

      <div>
        <a href='http://angel.co/tongsalex'>
          <img src={angellist} alt='angellist' />
        </a>
        <a href='http://medium.com/@tongsalex'>
          <img src={medium} alt='medium' />
        </a>
      </div>
    </section>
  </div>
);

export default Contact;

