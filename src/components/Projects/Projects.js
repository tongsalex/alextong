import React from 'react';
import {NavLink} from 'react-router-dom';
import './projects.css';
import javascript from '../../images/skills/javascript.png';
import github from '../../images/github.png';
import live from '../../images/live.svg';

const Projects = () => (
  <div className="projects">
    
    <div className="projects__container projects__container--noteworthy" style={{ backgroundImage:`url(${javascript})`}}>
      <h1 className="projects__title">noteworthy</h1>
      <div className="projects__linkContainer">
        <a href='http://www.github.com/tongsalex/noteworthy' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' className="projects__link" />
        </a>
        <NavLink className="projects__navLink" to="/noteworthy">
          <img src={live} alt='live' className="projects__link" />
        </NavLink>
      </div>
    </div>

    <div className="projects__container projects__container--noteworthy" style={{ backgroundImage:`url(${javascript})`}}>
      <h1 className="projects__title">noteworthy</h1>
      <div className="projects__linkContainer">
        <a href='http://www.github.com/tongsalex/noteworthy' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' className="projects__link" />
        </a>
        <NavLink className="projects__navLink" to="/noteworthy">
          <img src={live} alt='live' className="projects__link" />
        </NavLink>
      </div>
    </div>
     
  </div>
);

export default Projects;

