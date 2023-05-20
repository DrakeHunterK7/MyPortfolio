
import './Styles/HomePage.scss';
import { useState } from "react";
import { useMatch } from "react-router-dom";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./../Assets/Apcube";

import logoNameImage from '../Assets/logo-name.png';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AboutMe from './AboutMe';
import { Navbar } from 'react-bootstrap';


function HomePage() {

  const match = useMatch('portfolio/:portfolioType');
  var [ pType ] = useState(match?.params.portfolioType);

  function portfolioTitle() {
    if(pType === 'game-programmer')
      return 'Game Programmer'
    else
      return 'Software Engineer'
  }

  return (
    <div className="HomePage">
        <div className={pType+"-header"}>

            <div className="model-container">
              <Canvas camera={{ fov: 90, zoom: 4 }}>
                <ambientLight intensity={1.25}/>
                <Suspense fallback={null}>
                  <Model />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false}/>
                <Environment preset="sunset" />
              </Canvas>
            </div>
            
            <img src={logoNameImage} alt="name-logo" className="header-logo-name"/>

            <div className="header-portfolio-type">
              <h3>{portfolioTitle()} Portfolio</h3>
            </div>
        </div>

        <div className={pType+"-body"}>
          <div className="main-menu-container">
              <button>About Me</button>
              <button>Projects and Experience</button>
              <button>Skills</button>
          </div>
        </div>

        <div className={pType+"-footer"}>
          <p>This website was made entirely by me, using React, TypeScript and Sass! Hosted on Github :)</p>
        </div>
    </div>
  );
}

export default HomePage;
