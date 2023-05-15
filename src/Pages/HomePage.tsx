
import './Styles/HomePage.scss';
import { useState } from "react";
import { useMatch } from "react-router-dom";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function HomePage() {

  const match = useMatch('portfolio/:portfolioType');
  var [ pType, setPType ] = useState(match?.params.portfolioType);

  function portfolioTitle() {
    if(pType === 'game-programmer')
      return 'Game Programmer'
    else
      return 'Software Engineer'
  }

  return (
    <div className="HomePage">
        <div className={pType+"-header"}>
            <h1>Anas Peerzada</h1>
            <h3>{portfolioTitle()} Portfolio</h3>
        </div>
        <Tabs
              defaultActiveKey="about-me"
              className={pType+"-tabs"}
              justify
            >
              <Tab eventKey="about-me" title="About Me">
              </Tab>
              <Tab eventKey="projects" title="Projects and Experience">
              </Tab>
              <Tab eventKey="skills" title="Skills ">
              </Tab>
        </Tabs>
    </div>
  );
}

export default HomePage;
