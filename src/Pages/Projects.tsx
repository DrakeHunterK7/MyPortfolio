
import './Styles/Projects.scss';
import gameProjects from '../data/GameProjects.json'
import { Link } from 'react-router-dom';


type Project = {
  date: string,
  type: string
  image_name: string,
  name: string,
  url_name: string,
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
                <Link to={`/${portfolioType}/${project.url_name}`} style={{ textDecoration: 'none' }}>
                  <div className="project-box">
                    <img alt={project.type} width={150} src={require("../Assets/Game Projects/Game Project Logos/"+project.image_name)}/>
                    <p>{project.name}</p>
                  </div>
                </Link>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
