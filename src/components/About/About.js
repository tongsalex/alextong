import React from 'react';
import './About.css';
import headshot from '../../images/headshot.jpg'

// skills photos
import javascript from '../../images/skills/javascript.png';
import ruby from '../../images/skills/ruby.png';
import python from '../../images/skills/python.png';
import c from '../../images/skills/c++.png';
import java from '../../images/skills/java.png'

import react from '../../images/skills/react.png';
import rails from '../../images/skills/rails.png';
import postgresQL from '../../images/skills/postgresql.png';
import mongodb from '../../images/skills/mongodb.png';
import r from '../../images/skills/r.png';

import node from '../../images/skills/node.png';
import jquery from '../../images/skills/jquery.png';

import mongoose from '../../images/skills/mongoose.png';
import rspec from '../../images/skills/rspec.png';
import three from '../../images/skills/three.png';
import webpack from '../../images/skills/webpack.png';
import git from '../../images/skills/git.png';
import recharts from '../../images/skills/recharts.png';
import ableton from '../../images/skills/ableton.png';
import nativeinstruments from '../../images/skills/nativeinstruments.png';
import rekordbox from '../../images/skills/rekordbox.png';
import traktor from '../../images/skills/traktor.jpg';

import sql from '../../images/skills/sql.png';
import express from '../../images/skills/express.png';
import sqlite from '../../images/skills/sqlite.png';

import redux from '../../images/skills/redux.png';

import html from '../../images/skills/html.png';
import css3 from '../../images/skills/css3.svg';
import heroku from '../../images/skills/heroku.png';

const About = () => (
  <div className="about">
    <h1 className="about__h1">ABOUT ME</h1>
    <section className="about__bio--container">
      <img src={headshot} alt='headshot' className="headshot" />
      <p className="about__bio">
        Hi, I'm Alex. I graduated from App Academy's software engineering intensive in March of 2020 and General Assembly's web development immersive in December of 2016.
        <br />
        <br />
        Previously, I have also worked at multiple roles at Apple, most notably as an Expert, and have also been a real estate agent & intern at New York City's top 20th highest grossing sales team, McDonough-Hershkowitz. In 2015, I graduated from the NYC music production school Dubspot from their Producer/DJ Master program where I became certified in Ableton Live. 
        <br />
        <br />
        Currently, I am looking for a new role in software engineering in the NYC or San Francisco areas. Please feel free to reach out to me via my contact page for any opportunities, inquiries, feedback, or just to say hello! Below are a few of the languages and skills I have experience with.
      </p>
    </section>

    <h1 className="about__h1">LANGUAGES & SKILLS</h1>
    <section className="skills">
      <div className="skills__container">
        <img src={javascript} alt='javascript' className="skills__picture" />
        <h2 className="skills__h2">JavaScript</h2>
      </div>


      <div className="skills__container">
        <img src={react} alt='react' className="skills__picture" />
        <h2 className="skills__h2">React</h2>
      </div>

      <div className="skills__container">
        <img src={redux} alt='redux' className="skills__picture" />
        <h2 className="skills__h2">Redux</h2>
      </div>

      <div className="skills__container">
        <img src={ruby} alt='ruby' className="skills__picture" />
        <h2 className="skills__h2">Ruby</h2>
      </div>

      <div className="skills__container">
        <img src={rails} alt='rails' className="skills__picture" />
        <h2 className="skills__h2">Rails</h2>
      </div>

      <div className="skills__container">
        <img src={c} alt='C' className="skills__picture" />
        <h2 className="skills__h2">C++</h2>
      </div>

      <div className="skills__container">
        <img src={python} alt='python' className="skills__picture" />
        <h2 className="skills__h2">Python</h2>
      </div>

      <div className="skills__container">
        <img src={java} alt='Java' className="skills__picture" />
        <h2 className="skills__h2">Java</h2>
      </div>
      

      <div className="skills__container">
        <img src={postgresQL} alt='postgresQL' className="skills__picture" />
        <h2 className="skills__h2">PostgresQL</h2>
      </div>

      <div className="skills__container">
        <img src={sql} alt='sql' className="skills__picture" />
        <h2 className="skills__h2">sql</h2>
      </div>

      <div className="skills__container">
        <img src={sqlite} alt='sqlite' className="skills__picture" />
        <h2 className="skills__h2">SQLite 3</h2>
      </div>

      <div className="skills__container">
        <img src={mongodb} alt='mongodb' className="skills__picture" />
        <h2 className="skills__h2">mongoDB</h2>
      </div>

      <div className="skills__container">
        <img src={node} alt='node' className="skills__picture" />
        <h2 className="skills__h2">node</h2>
      </div>

      <div className="skills__container">
        <img src={express} alt='express' className="skills__picture" />
        <h2 className="skills__h2">Express</h2>
      </div>

      <div className="skills__container">
        <img src={rspec} alt='rspec' className="skills__picture" />
        <h2 className="skills__h2">rspec</h2>
      </div>

      <div className="skills__container">
        <img src={jquery} alt='jquery' className="skills__picture" />
        <h2 className="skills__h2">jQuery</h2>
      </div>


      <div className="skills__container">
        <img src={git} alt='git' className="skills__picture" />
        <h2 className="skills__h2">git</h2>
      </div>


      <div className="skills__container">
        <img src={three} alt='three' className="skills__picture" />
        <h2 className="skills__h2">three</h2>
      </div>

      <div className="skills__container">
        <img src={webpack} alt='webpack' className="skills__picture" />
        <h2 className="skills__h2">webpack</h2>
      </div>


      <div className="skills__container">
        <img src={r} alt='r' className="skills__picture" />
        <h2 className="skills__h2">R</h2>
      </div>

      <div className="skills__container">
        <img src={mongoose} alt='mongoose' className="skills__picture" />
        <h2 className="skills__h2">mongoose</h2>
      </div>


      <div className="skills__container">
        <img src={recharts} alt='recharts' className="skills__picture" />
        <h2 className="skills__h2">recharts</h2>
      </div>




      <div className="skills__container">
        <img src={html} alt='html' className="skills__picture" />
        <h2 className="skills__h2">HTML 5</h2>
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
        <img src={ableton} alt='ableton' className="skills__picture" />
        <h2 className="skills__h2">ableton</h2>
      </div>

      <div className="skills__container">
        <img src={nativeinstruments} alt='nativeinstruments' className="skills__picture" />
        <h2 className="skills__h2">nativeinstruments</h2>
      </div>

      <div className="skills__container">
        <img src={rekordbox} alt='rekordbox' className="skills__picture" />
        <h2 className="skills__h2">rekordbox</h2>
      </div>

      <div className="skills__container">
        <img src={traktor} alt='traktor' className="skills__picture" />
        <h2 className="skills__h2">traktor</h2>
      </div>






    </section>
  </div>
);

export default About;

