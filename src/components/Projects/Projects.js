import React from 'react';
import './projects.css';

// logos
import github from '../../images/github.png';
import live from '../../images/live.png';

// projects
import noteworthy from '../../images/projects/noteworthy.png';
import kollectiv from '../../images/projects/kollectiv.png';
import mazeSolver from '../../images/projects/mazeSolver.png';
import bargain from '../../images/projects/bargain.png';
import constellations from '../../images/projects/constellations.png';
import roadtorock from '../../images/projects/roadtorock.png';

// group projects
import vitaldb from '../../images/projects/vitaldb.png';
import pbandjamd from '../../images/projects/pbandjamd.png';
import vpay from '../../images/projects/vpay.png';
import elephant from '../../images/projects/elephant.png';

const Projects = () => (
  <div className="projects">
    
    <h1 className="projects__divider projects__divider--personal">PERSONAL PROJECTS</h1>

    <div className="projects__container projects__container--noteworthy" style={{ backgroundImage:`url(${noteworthy})`}}>
      <h1 className="projects__title">noteworthy</h1>
      <h2 className="projects__description">A full-stack note-taking app modeled after Evernote built using Ruby on Rails, React, Redux, PostgreSQL and bcrypt for user authentication.</h2>
      <div className="projects__linkContainer">
        <a href='http://www.github.com/tongsalex/noteworthy' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' className="projects__link" />
        </a>

        <a href='http://www.tongsalex.com/noteworthy' target="_blank" rel="noopener noreferrer">
          <img src={live} alt='live' className="projects__link" />
        </a>

      </div>
    </div>

    <div className="projects__container projects__container--noteworthy" style={{ backgroundImage:`url(${kollectiv})`}}>
      <h1 className="projects__title">kollectiv</h1>
      <h2 className="projects__description">A full-stack blog on New York City's music, food, fashon & events built using PostgreSQL, Express, React, Node and JSON Web Tokens for user authentication.</h2>
      <div className="projects__linkContainer">
        <a href='http://www.github.com/tongsalex/kollectiv' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' className="projects__link" />
        </a>

        <a href='http://www.tongsalex.com/kollectiv' target="_blank" rel="noopener noreferrer">
          <img src={live} alt='live' className="projects__link" />
        </a>
        
      </div>
    </div>

    <div className="projects__container projects__container--noteworthy" style={{ backgroundImage:`url(${mazeSolver})`}}>
      <h1 className="projects__title">Maze Solver</h1>
      <h2 className="projects__description">An algorithm maze visualizer built using vanilla JavaScript, CSS & HTML.</h2>
      <div className="projects__linkContainer">
        <a href='https://github.com/tongsalex/mazeSolver' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' className="projects__link" />
        </a>

        <a href='https://tongsalex.github.io/mazeSolver/' target="_blank" rel="noopener noreferrer">
          <img src={live} alt='live' className="projects__link" />
        </a>

      </div>
    </div>

    <div className="projects__container projects__container--noteworthy" style={{ backgroundImage:`url(${constellations})`}}>
      <h1 className="projects__title">constellations</h1>
      <h2 className="projects__description">A 3D JavaScript simulation of space built primarily on Three.js.</h2>
      <div className="projects__linkContainer">
        <a href='http://www.github.com/tongsalex/constellations' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' className="projects__link" />
        </a>
        <a href='http://www.tongsalex.com/constellations' target="_blank" rel="noopener noreferrer">
          <img src={live} alt='live' className="projects__link" />
        </a>
      </div>
    </div>

    <div className="projects__container projects__container--noteworthy" style={{ backgroundImage:`url(${bargain})`}}>
      <h1 className="projects__title">BarGain</h1>
      <h2 className="projects__description">A full-stack marketplace platform for users to buy and sell items based on their geolocation, built using the Google Maps API, MongoDB, Express, Node, EJS, HTML, CSS and bcryptjs for user authentication.</h2>
      <div className="projects__linkContainer">
        <a href='http://www.github.com/tongsalex/bargain' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' className="projects__link" />
        </a>
        <a href='http://www.tongsalex.com/bargain' target="_blank" rel="noopener noreferrer">
          <img src={live} alt='live' className="projects__link" />
        </a>
      </div>
    </div>

    <div className="projects__container projects__container--noteworthy" style={{ backgroundImage:`url(${roadtorock})`}}>
      <h1 className="projects__title">Road To Rock</h1>
      <h2 className="projects__description">A classic rock music interactive trivia game built using solely HTML, CSS, JavaScript & jQuery. My very first web application!</h2>
      <div className="projects__linkContainer">
        <a href='http://www.github.com/tongsalex/RoadToRock' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' className="projects__link" />
        </a>
        <a href='http://www.tongsalex.com/roadtorock' target="_blank" rel="noopener noreferrer">
          <img src={live} alt='live' className="projects__link" />
        </a>
      </div>
    </div>

    <h1 className="projects__divider projects__divider--collab">COLLABORATIVE PROJECTS</h1>

    <div className="projects__container projects__container--noteworthy" style={{ backgroundImage:`url(${vitaldb})`}}>
      <h1 className="projects__title">Vital DB</h1>
      <h2 className="projects__description">A health vital stats tracker allowing users to centralize their medical data built using MongoDB, Express, React & Node.</h2>
      <div className="projects__linkContainer">
        <a href='http://www.github.com/tongsalex/vitaldb' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' className="projects__link" />
        </a>
        <a href='http://vital-db.herokuapp.com' target="_blank" rel="noopener noreferrer">
          <img src={live} alt='live' className="projects__link" />
        </a>
      </div>
    </div>

    <div className="projects__container projects__container--noteworthy" style={{ backgroundImage:`url(${pbandjamd})`}}>
      <h1 className="projects__title">PB and Jamd</h1>
      <h2 className="projects__description">A full-stack live forum for users to create and comment on any topic they please, with real-time dynamic updating. Built on PostgreSQL, Express, React & Node.</h2>
      <div className="projects__linkContainer">
        <a href='http://www.github.com/tongsalex/pbandjamd' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' className="projects__link" />
        </a>
        <a href='http://www.tongsalex.com/pbandjamd' target="_blank" rel="noopener noreferrer">
          <img src={live} alt='live' className="projects__link" />
        </a>
      </div>
    </div>


    {/* // https://vpay-frontend.herokuapp.com/ */}
    <div className="projects__container projects__container--noteworthy" style={{ backgroundImage:`url(${vpay})`}}>
      <h1 className="projects__title">vPay</h1>
      <h2 className="projects__description">A full-stack live forum for users to create and comment on any topic they please, with real-time dynamic updating. Built on PostgreSQL, Express, React & Node.</h2>
      <div className="projects__linkContainer">
        <a href='https://github.com/thomas-westfall/vpay' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' className="projects__link" />
        </a>
        <a href='http://www.tongsalex.com/vpay' target="_blank" rel="noopener noreferrer">
          <img src={live} alt='live' className="projects__link" />
        </a>
      </div>
    </div>

    <div className="projects__container projects__container--elephant" style={{ backgroundImage:`url(${elephant})`}}>
      <h1 className="projects__title">Prevent Elephant Poaching</h1>
      <h2 className="projects__description">A donation website to prevent elephant poaching built on HTML and CSS.</h2>
      <div className="projects__linkContainer">
        <a href='https://github.com/tongsalex/preventElephantPoaching' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' className="projects__link" />
        </a>
        
      </div>
    </div>


  </div>
);

export default Projects;

