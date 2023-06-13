
import './Styles/Projects.scss';
import { useState } from "react";
import gameProjects from '../data/GameProjects.json'
import Modal from 'react-bootstrap/Modal';


function Projects() {

  const [show, setShow] = useState(false);
  let [selectedProject, setSelectedProject] = useState("none");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Projects">
      <div className='projects-main-div'>
        <div id="indie-projects" className='projects-container'>
          {
            gameProjects.map(project => {
              return (
                <div className="project-box" onClick={event => {
                  handleShow();
                  setSelectedProject(project.name);
                  }}>
                  <img alt={project.type} width={150} src={require("../Assets/Game Projects/Game Project Logos/"+project.image_name)}/>
                  <p>{project.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>

      <Modal dialogClassName="project-modal" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <div className='modal-video-box'>
           <div className='modal-iframe-container'>
            <iframe  width="1200" height="675" title='Video Demonstration'
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
           </div>
            <h3>Video Demonstration</h3>
          </div>
          
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default Projects;
