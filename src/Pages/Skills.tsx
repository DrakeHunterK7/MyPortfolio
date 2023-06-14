
import './Styles/Skills.scss';
import skills from '../data/Skills.json'
import Badge from 'react-bootstrap/Badge';


function Skills() {

  return (
    <div className="Skills">
      <div className='skills-main-div'>
        <div className='skills-container'>
            <div className="skills-category-box">
              <div className="skills-category-box-title skills-category-box-simple">
                <h4>Software Engineering Skills</h4>
              </div>
              {
                skills.software_skills.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge skills-category-box-simple'>{skill}</Badge>
                    </div>
                  )
                  })
              }
            </div>

            <div className="skills-category-box skills-category-box-colorA">
              <div className="skills-category-box-title skills-category-box-colorA">
                <h4>Game Development Skills</h4>
              </div>
              {
                skills.game_dev_skills.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge skills-category-box-colorA'>{skill}</Badge>
                    </div>
                  )
                  })
              }
            </div>

            <div className="skills-category-box skills-category-box-colorB">
              <div className="skills-category-box-title skills-category-box-colorB">
                <h4>Programming Languages</h4>
              </div>
              {
                skills.programming_languages.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge skills-category-box-colorB'>{skill}</Badge>
                    </div>
                  )
                  })
              }
            </div>

            <div className="skills-category-box skills-category-box-colorC">
              <div className="skills-category-box-title skills-category-box-colorC">
                <h4>Math and Physics Skills</h4>
              </div>
              {
                skills.math_physics_skills.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge skills-category-box-colorC skills-colorA'>{skill}</Badge>
                    </div>
                  )
                  })
              }
            </div>
 
            <div className="skills-category-box skills-category-box-colorD">
              <div className="skills-category-box-title skills-category-box-colorD">
                <h4>Soft Skills</h4>
              </div>
              {
                skills.soft_skills.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge skills-category-box-colorD skills-colorA'>{skill}</Badge>
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
