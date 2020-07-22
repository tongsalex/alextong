import React from 'react';
import './About.css';
import headshot from '../../images/headshot.jpg'

// skills photos
import javascript from '../../images/skills/javascript.png';
import ruby from '../../images/skills/ruby.png';
import c from '../../images/skills/c++.png';
import python from '../../images/skills/python.png';
import java from '../../images/skills/java.png'
import react from '../../images/skills/react.svg';
import postgresQL from '../../images/skills/postgresql.png';
import heroku from '../../images/skills/heroku.png';
import r from '../../images/skills/r.png';
// import heroku from '../../images/skills/heroku.png';
import rails from '../../images/skills/rails.png';
import jquery from '../../images/skills/jquery.png';
import css3 from '../../images/skills/css3.svg';

const About = () => (
  <div className="about">
    <section className="about__bio--container">
      <img src={headshot} alt='headshot' className="headshot" />
      <p className="about__bio">
        Hi, I'm Alex. I graduated from App Academy's software engineering intensive in March of 2020 and General Assembly's web development immersive in December of 2016.
        <br />
        <br />
        Previously, I have also worked at multiple roles at Apple, most notably as an Expert, and have also been a real estate agent & intern at New York City's top 20th highest grossing sales team, McDonough-Hershkowitz. In 2015, I graduated from the NYC music production school Dubspot from their Producer/DJ Master program where I became certified in Ableton Live. 
        <br />
        <br />
        Currently, I am looking for a new role in software engineering in the NYC or San Francisco areas. Below are a few of the languages and skills I have experience with.
      </p>
    </section>

    <h1 className="about__h1">Languages & Skills</h1>
    <section className="skills">
      <div className="skills__container">
        <img src={javascript} alt='javascript' className="skills__picture" />
        <h2 className="skills__h2">JavaScript</h2>
      </div>

      <div className="skills__container">
        <img src={ruby} alt='ruby' className="skills__picture" />
        <h2 className="skills__h2">Ruby</h2>
      </div>

      <div className="skills__container">
        <img src={python} alt='python' className="skills__picture" />
        <h2 className="skills__h2">Python</h2>
      </div>


      <div className="skills__container">
        <img src={c} alt='C' className="skills__picture" />
        <h2 className="skills__h2">C++</h2>
      </div>

      <div className="skills__container">
        <img src={java} alt='Java' className="skills__picture" />
        <h2 className="skills__h2">Java</h2>
      </div>

      <div className="skills__container">
        <img src={css3} alt='css3' className="skills__picture" />
        <h2 className="skills__h2">CSS 3</h2>
      </div>

      <div className="skills__container">
        <img src={heroku} alt='heroku' className="skills__picture" />
        <h2 className="skills__h2">Heroku</h2>
      </div>

      <div className="skills__container">
        <img src={r} alt='r' className="skills__picture" />
        <h2 className="skills__h2">R</h2>
      </div>

      <div className="skills__container">
        <img src={postgresQL} alt='postgresQL' className="skills__picture" />
        <h2 className="skills__h2">PostgresQL</h2>
      </div>

      <div className="skills__container">
        <img src={react} alt='react' className="skills__picture" />
        <h2 className="skills__h2">React</h2>
      </div>

      <div className="skills__container">
        <img src={rails} alt='rails' className="skills__picture" />
        <h2 className="skills__h2">Rails</h2>
      </div>

      <div className="skills__container">
        <img src={jquery} alt='jquery' className="skills__picture" />
        <h2 className="skills__h2">jQuery</h2>
      </div>


    </section>
  </div>
);

export default About;

