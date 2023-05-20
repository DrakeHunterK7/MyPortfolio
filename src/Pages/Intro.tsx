import { useState } from 'react';

import './Styles/Intro.scss';
import { Button } from 'react-bootstrap';
import selfie from '../Assets/latest-front-photo.jpg';
import gamedevImage from '../Assets/gamedev-collage2.png';
import soenImage from '../Assets/soen-collage.png';
import { Link } from 'react-router-dom';

function Intro() {

  var [bgImageClass1, setBgImageClass1] = useState("imgFadeOut")
  var [bgImageClass2, setBgImageClass2] = useState("imgFadeOut")

  return (
    <div className="Intro">
      <header 
        className="Intro-header fade-in">
          <img className={`bgImage ${bgImageClass1}`} alt="Background" src={gamedevImage}/>
          <img className={`bgImageSmaller ${bgImageClass2}`} alt="Background" src={soenImage}/>
          <div className="Intro-selfie">
            <img alt="it me" src={selfie}/>
          </div>

          <div className="Intro-text">
            <h1>Hello! I am Anas. Welcome to my portfolio website!</h1>
          </div>

          <div className="Intro-buttons">

            <Link to={`/portfolio/game-programmer`}>
              <button className="btn btn-primary gamedev-button" 
                onMouseEnter={() => setBgImageClass1("imgFadeIn")}
                onMouseLeave={() => setBgImageClass1("imgFadeOut")}>Game Programmer Portfolio
              </button>
            </Link>

            <Link to={`/portfolio/software-engineer`}>
              <button  
                className="btn btn-primary soen-button"
                onMouseEnter={() => setBgImageClass2("imgFadeIn")}
                onMouseLeave={() => setBgImageClass2("imgFadeOut")}
              >
                Software Engineer Portfolio
              </button>
            </Link>
          </div>
      </header>
    </div>
  );
}

export default Intro;
