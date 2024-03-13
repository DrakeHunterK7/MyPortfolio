
import './Styles/ProjectPage.scss';
import { useState, useEffect } from "react";
import gameProjects from '../data/GameProjects.json'
import Badge from 'react-bootstrap/Badge';

import { useParams } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

type Project = {
  date: string,
  type: string
  image_name: string,
  name: string,
  video_link: string,
  download_link: string,
  github_link: string,
  description: string,
  responsibilities: string[],
  challenges: string[],
  learnings: string[],
  engine: string
}

function ProjectPage() {

  const { portfolioType } = useParams();
  const { projectName } = useParams();

  const emptyProject : Project = {
    date: "",
    type: "",
    image_name: "",
    name: "",
    video_link: "",
    download_link: "",
    github_link: "",
    description: "",
    responsibilities: [],
    challenges: [],
    learnings: [],
    engine: ""
  }

  let [selectedProject, setSelectedProject] = useState(emptyProject);

  useEffect(() => {
    gameProjects.forEach(project => {
      if(project.url_name === projectName)
        {
          setSelectedProject(project);
          return;
        }
    });
  }, [projectName]);

  return (
    <div className="ProjectPages">
      <div className="project-header" id='top'>
        <Navbar collapseOnSelect expand="lg" className="">
          <Container>
            <Navbar.Brand><Nav.Link href={`#/${portfolioType}`}><h1>Anas Peerzada</h1></Nav.Link></Navbar.Brand>
          </Container>
        </Navbar>
      </div>

      <div className='project-page-body'>
        <div className='project-title'>
          <h2>
            {selectedProject.name}
          </h2>
          <p>{selectedProject.date}</p>
        </div>


        <div className='projectpages-body'>
            <div className='modal-video-box'>
            <div className='modal-iframe-container'>
              <div className='tags'>
                <h4><Badge bg="primary">{selectedProject.type} Project</Badge></h4>
                <h4><Badge bg="secondary">{selectedProject.engine}</Badge></h4>
              </div>
              <iframe title='Video Demonstration'
                src={selectedProject.video_link}>
              </iframe>
              <div className='links'>
                { selectedProject.download_link !== "none" &&
                  <div className='projectpages-download-button'>
                    <a href={selectedProject.download_link} target="_blank" rel="noreferrer">
                      Download Game
                    </a>
                  </div>
                }
                { selectedProject.github_link !== "none" &&
                  <div className='projectpages-download-button'>
                    <a href={selectedProject.github_link} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                }   
              </div>
            </div>
            </div>

            <div className="projectpages-description">

              <p>{selectedProject.description}</p>

              <h3>My chief responsibilities for this project </h3>
              <ul>
              {
                selectedProject.responsibilities.map(point => {
                  return (
                    <li>{point}</li>
                  )
                })
              }
              </ul>

              <h3>Key challenges I faced during this project </h3>
              <ul>
              {
                selectedProject.challenges.map(point => {
                  return (
                    <li>{point}</li>
                  )
                })
              }
              </ul>

              <h3>Key things I learned while working on this project </h3>
              <ul>
              {
                selectedProject.learnings.map(point => {
                  return (
                    <li>{point}</li>
                  )
                })
              }
              </ul>
            </div>
            
        </div>
      </div>

    </div>
  );
}

export default ProjectPage;
