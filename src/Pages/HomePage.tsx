
import './Styles/HomePage.scss';
import { useEffect, useState, useRef, RefObject, useMemo } from "react";
import { useLocation, useMatch, useParams } from "react-router-dom";
import ReactPlayer from 'react-player'

import resume from '../Assets/Documents/Anas Peerzada Resume.pdf';
import showcase from '../Assets/Videos/GameProgrammerShowcase.mp4';
import yt_img from '../Assets/youtube.png';
import li_img from '../Assets/LinkedIn.png';
import gh_img from '../Assets/github.png';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import AboutMe from './AboutMe';
import Projects from './Projects';

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

  const myRef = useRef<HTMLDivElement>(null)
  const resume_link = "https://docs.google.com/document/d/1KgqqpIzFCG58CrhiDfhqpUcKLSS-W3Mp/edit?usp=sharing&ouid=112676637432997985208&rtpof=true&sd=true"

  const { portfolioType } = useParams()
  var [ pType ] = useState(portfolioType)

  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  const ref2 = useRef<HTMLDivElement>(null)
  const isVisible2 = useOnScreen(ref2)

  const ref3 = useRef<HTMLDivElement>(null)
  const isVisible3 = useOnScreen(ref3)

  const ref4 = useRef<HTMLDivElement>(null)
  const isVisible4 = useOnScreen(ref4)

  const executeScroll1 = () => {
    if(ref.current !== null)
      ref.current.scrollIntoView()
      setExpanded(false)
  }

  const executeScroll2 = () => {
    if(ref2.current !== null)
      ref2.current.scrollIntoView()
      setExpanded(false) 
  }

  const executeScroll3 = () => {
    if(ref3.current !== null)
      ref3.current.scrollIntoView()
      setExpanded(false) 
  }

  const executeScroll4 = () => {
    if(ref4.current !== null)
      ref4.current.scrollIntoView()
      setExpanded(false) 
  }
  
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="HomePage">
        <div className="header" id='top'>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" expanded={expanded}>
          <Container>
            <Navbar.Brand><Nav.Link href={`#/${portfolioType}`}><h1>Anas Peerzada</h1></Nav.Link></Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="" onClick={executeScroll4}><p>Showcase</p></Nav.Link>
                <Nav.Link href="" onClick={executeScroll1}><p>About Me</p></Nav.Link>
                <Nav.Link href="" onClick={executeScroll2}><p>Projects</p></Nav.Link>
                <Nav.Link href="" onClick={executeScroll3}><p>Contact</p></Nav.Link>
                <Nav.Link href={resume_link} target="_blank"><p>Resume</p></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>

        {
          pType != null &&
          <div className="body">
            <div className="sections-container">
            <div ref={ref4} className="section-visible">
              <video autoPlay muted loop playsInline className="video">
                <source src={showcase} type="video/mp4" />
              </video>
              <div>
                <p>A showcase of all my projects</p>
              </div>
            </div>

              <div ref={ref} className={`section ${isVisible ? 'is-visible' : ''}`}>
                <AboutMe portfolioType={pType}/>
              </div>

              <div ref={ref2} className={`section ${isVisible2 ? 'is-visible' : ''}`}>
                <Projects portfolioType={pType}/>
              </div>

              <div ref={ref3} className={`section ${isVisible3 ? 'is-visible' : ''}`}>
                <div className="footer">
                  <p>Feel free to reach out to me at my email <a href="mailto:apeerzada987@gmail.com">apeerzada987@gmail.com.</a> Here are other ways you could reach me and/or check my work out:</p>

                  <div className="logos">
                    <div className="important-link-box">
                    <a href="https://github.com/DrakeHunterK7" target="_blank" rel="noreferrer">
                      <img alt="it me"src={gh_img}/>
                    </a>
                    </div>

                    <div className="important-link-box">
                    <a href="https://www.linkedin.com/in/anas-peerzada-61ab6b13b/" target="_blank" rel="noreferrer">
                      <img alt="it me" src={li_img}/>
                    </a>
                    </div>

                    <div className="important-link-box">
                    <a href="https://www.youtube.com/channel/UCYNmG-kMHASaOiMdRYo_izA" target="_blank" rel="noreferrer">
                      <img alt="it me" src={yt_img}/>
                    </a>
                    </div>
                  </div>

                  <p> Copyright © 2023 by Anas Peerzada | All images, logos and names are used with permission</p>
                </div>
              </div>
            </div>
          </div>
        }
    </div>
  );
}

export default HomePage;
