
import './Styles/HomePage.scss';
import { useState } from "react";
import { useMatch } from "react-router-dom";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./../Assets/Apcube";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


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
            <div className="header-title">
              <h1>Anas Peerzada</h1>
              <h3>{portfolioTitle()} Portfolio</h3>
            </div>
        </div>

        <div className={pType+"-body"}>
          <Tabs
            defaultActiveKey="about-me"
            className={pType+"-tabs"}
            justify
          >
            <Tab tabClassName={"tab"} eventKey="about-me" title="About Me">
              <div className="tab-content-container">
              </div>
            </Tab>
            <Tab tabClassName={pType+"-tab"} eventKey="projects" title="Projects and Experience">
              <div className="tab-content-container">

              </div>
            </Tab>
            <Tab tabClassName={pType+"-tab"} eventKey="skills" title="Skills ">
              <div className="tab-content-container">

              </div>
            </Tab>
          </Tabs>
        </div>
    </div>
  );
}

export default HomePage;
