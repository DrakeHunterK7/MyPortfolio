import React, { useState } from 'react';

import './Styles/Intro.scss';
import { Button } from 'react-bootstrap';
import selfie from '../Assets/latest-front-photo.jpg';
import masseffect from '../Assets/gamedev-collage2.png';

function Intro() {

  const images = ["none", masseffect]
  var [bgImage, setBgImage] = useState(images[0])

  return (
    <div className="Intro">
      <header 
        className="Intro-header fade-in"
        style={{
          backgroundImage: `url(${bgImage})`
        }}>
          <div className="Intro-selfie">
            <img alt="it me" src={selfie}/>
          </div>

          <div className="Intro-text">
            <h1>Hello! I am Anas. Welcome to my portfolio website!</h1>
            <h2>Where would you like to go?</h2>
          </div>

          <div className="Intro-buttons">
            <Button variant="primary" className="soen-button">Software Engineer Portfolio</Button>
            <Button variant="primary" className="gamedev-button" 
            onMouseEnter={() => setBgImage(images[1])}
            onMouseLeave={() => setBgImage(images[0])}>Game Programmer Portfolio</Button>
          </div>
      </header>
    </div>
  );
}

export default Intro;
