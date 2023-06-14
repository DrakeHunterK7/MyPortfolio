
import './Styles/Skills.scss';
import skills from '../data/Skills.json'
import Badge from 'react-bootstrap/Badge';


function Skills() {

  return (
    <div className="Skills">
      <div className='skills-main-div'>
        <div className='skills-container'>
            <div className="skills-category-box">
              <div className="skills-category-box-title">
                <h4>Software Engineering Skills</h4>
              </div>
              {
                skills.software_skills.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge'>{skill}</Badge>
                    </div>
                  )
                  })
              }
            </div>

            <div className="skills-category-box">
              <div className="skills-category-box-title">
                <h4>Game Development Skills</h4>
              </div>
              {
                skills.game_dev_skills.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge'>{skill}</Badge>
                    </div>
                  )
                  })
              }
            </div>

            <div className="skills-category-box">
              <div className="skills-category-box-title">
                <h4>Programming Languages</h4>
              </div>
              {
                skills.programming_languages.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge'>{skill}</Badge>
                    </div>
                  )
                  })
              }
            </div>

            <div className="skills-category-box">
              <div className="skills-category-box-title">
                <h4>Math and Physics Skills</h4>
              </div>
              {
                skills.math_physics_skills.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge'>{skill}</Badge>
                    </div>
                  )
                  })
              }
            </div>

            <div className="skills-category-box">
              <div className="skills-category-box-title">
                <h4>Soft Skills</h4>
              </div>
              {
                skills.soft_skills.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge'>{skill}</Badge>
                    </div>
                  )
                  })
              }
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
