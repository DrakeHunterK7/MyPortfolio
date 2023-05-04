import React, { useState } from 'react';

import './Styles/Intro.scss';
import { Button } from 'react-bootstrap';
import selfie from '../Assets/latest-front-photo.jpg';
import gamedevImage from '../Assets/gamedev-collage2.png';
import soenImage from '../Assets/soen-collage.png';

function Intro() {

  const images = ["none", gamedevImage]
  var [showImage, setShowImage] = React.useState(false)
  var [bgImage, setBgImage] = useState(images[0])
  var [bgImageClass1, setBgImageClass1] = useState("imgFadeOut")
  var [bgImageClass2, setBgImageClass2] = useState("imgFadeOut")
  // var [bgOpacity, setBgOpacity] = useState(0.0)


  function changeOpacity(direction: Number){
    
  }

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

            <Button variant="primary" className="soen-button"
            onMouseEnter={() => setBgImageClass2("imgFadeIn")}
            onMouseLeave={() => setBgImageClass2("imgFadeOut")}
            >Software Engineer Portfolio</Button>

            <Button variant="primary" className="gamedev-button" 
            onMouseEnter={() => setBgImageClass1("imgFadeIn")}
            onMouseLeave={() => setBgImageClass1("imgFadeOut")}>Game Programmer Portfolio</Button>
          </div>
      </header>
    </div>
  );
}

export default Intro;
