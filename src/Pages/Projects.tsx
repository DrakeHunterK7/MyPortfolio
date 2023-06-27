
import './Styles/Projects.scss';
import { useState } from "react";
import gameProjects from '../data/GameProjects.json'
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';


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

type BasicProps = {
  portfolioType: string;
}

function Projects({ portfolioType } : BasicProps) {

  const [show, setShow] = useState(false);
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Projects">
      <div className='projects-main-div'>
        <div id="indie-projects" className='projects-container'>
          <div className='experience-paragraph'>
              <h4>Here are all the finished games I've ever made since 2016.</h4>
              <h5>These include freelance indie game projects, university projects, game jam projects as well as my own personal projects.</h5>
          </div>

          <div className='projects-container-inner'>
          {
            gameProjects.map(project => {
              return (
                <div className="project-box" onClick={event => {
                  handleShow();
                  setSelectedProject(project);
                  }}>
                  <img alt={project.type} width={150} src={require("../Assets/Game Projects/Game Project Logos/"+project.image_name)}/>
                  <p>{project.name}</p>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>

      <Modal dialogClassName="project-modal" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className='modal-title'>
              <h2>{selectedProject.name}</h2>
              <Badge bg="primary">{selectedProject.type} Project</Badge>
              <Badge bg="secondary">{selectedProject.engine}</Badge>
              { selectedProject.download_link !== "none" &&
                <div className='download-button'>
                  <a href={selectedProject.download_link} target="_blank" rel="noreferrer">
                    Download Game
                  </a>
                </div>
              }
              { selectedProject.github_link !== "none" &&
                <div className='download-button'>
                  <a href={selectedProject.github_link} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              }
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <div className = 'project-date'>
            <h3>{selectedProject.date}</h3>
          </div>
          <div className='modal-video-box'>
           <div className='modal-iframe-container'>
            <iframe title='Video Demonstration'
              src={selectedProject.video_link}>
            </iframe>
           </div>
          </div>

          <div className="project-description">
            <p>{selectedProject.description}</p>
            <h3>My chief responsibilities for this project: </h3>
            <ul>
            {
              selectedProject.responsibilities.map(point => {
                return (
                  <li>{point}</li>
                )
              })
            }
            </ul>

            <h3>Key challenges I faced during this project: </h3>
            <ul>
            {
              selectedProject.challenges.map(point => {
                return (
                  <li>{point}</li>
                )
              })
            }
            </ul>

            <h3>Key things I learned while working on this project: </h3>
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
          
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default Projects;
