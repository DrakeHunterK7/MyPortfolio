
import './Styles/HomePage.scss';
import { useEffect, useState, useRef } from "react";
import { useLocation, useMatch, useParams } from "react-router-dom";

import logoNameImage from '../Assets/logo-name.png';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';

function HomePage() {

  const { portfolioType } = useParams()
  var [ pType ] = useState(portfolioType)

  function portfolioTitle() {
    var cleanString = pType?.replace("-", " ")
    return cleanString
  }

  return (
    <div className="HomePage">
        <div className="header">
            <img src={logoNameImage} alt="name-logo" className="header-logo-name"/>

            <div className="header-portfolio-type">
              <h3>{portfolioTitle()} Portfolio</h3>
              <p>Website made by me :)</p>
            </div>
        </div>

        {
          pType != null &&
          <div className="body">
            <Tabs
              defaultActiveKey="about-me"
              className="tabs"
              justify
            >
              <Tab eventKey="about-me" title="About Me">
                  <AboutMe portfolioType={pType}/>
              </Tab>
              <Tab eventKey="projects" title="Projects & Experience">
                  <Projects portfolioType={pType}/>
              </Tab>
              <Tab eventKey="skills" title="Skills">
                  <Skills portfolioType={pType}/>
              </Tab>
            </Tabs>
          </div>
        }
    </div>
  );
}

export default HomePage;
