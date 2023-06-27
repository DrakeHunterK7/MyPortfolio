
import './Styles/HomePage.scss';
import { useEffect, useState, useRef, RefObject, useMemo } from "react";
import { useLocation, useMatch, useParams } from "react-router-dom";

import logoNameImage from '../Assets/logo-name.png';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';

export function useOnScreen(ref: RefObject<HTMLElement>) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [ref])


  useEffect(() => {
    if(ref.current !== null)
      observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return isIntersecting
}

function HomePage() {

  const { portfolioType } = useParams()
  var [ pType ] = useState(portfolioType)

  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  const ref2 = useRef<HTMLDivElement>(null)
  const isVisible2 = useOnScreen(ref2)

  const ref3 = useRef<HTMLDivElement>(null)
  const isVisible3 = useOnScreen(ref3)
  

  function portfolioTitle() {
    var cleanString = pType?.replace("-", " ")
    return cleanString
  }

  return (
    <div className="HomePage">
        <div className="header">
            <img src={logoNameImage} alt="name-logo" className="header-logo-name"/>

            <div className="header-portfolio-type">
              <div>
              <h6>{portfolioTitle()} Portfolio</h6>
              <p>Website made by me :)</p>
              </div>
            </div>
        </div>

        {
          pType != null &&
          <div className="body">
            <div className="sections-container">
              <div ref={ref} className={`section ${isVisible ? 'is-visible' : ''}`}>
                <AboutMe portfolioType={pType}/>
              </div>

              <div ref={ref2} className={`section ${isVisible2 ? 'is-visible' : ''}`}>
                <Projects portfolioType={pType}/>
              </div>

              <div ref={ref3} className={`section ${isVisible3 ? 'is-visible' : ''}`}>
                <Skills portfolioType={pType}/>
              </div>
            </div>
          </div>
        }
    </div>
  );
}

export default HomePage;
