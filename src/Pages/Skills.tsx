
import './Styles/Skills.scss';
import skills from '../data/Skills.json'
import Badge from 'react-bootstrap/Badge';

type BasicProps = {
  portfolioType: string;
}

function Skills({ portfolioType } : BasicProps) {

  return (
    <div className="Skills">
      <div className='skills-main-div'>
        <div className='skills-container'>
            <div className="skills-category-box">
              <div className="skills-category-box-title skills-category-box-simple">
                <h4>Software Engineering Skills</h4>
              </div>
              <div className='skills-box-container'>
                {
                  skills.software_skills.map(skill => {
                    return (
                      <div className="skill-box">
                        <Badge className='skill-badge skill-badge-background'>{skill}</Badge>
                      </div>
                    )
                    })
                }
              </div>
            </div>

            <div className="skills-category-box skills-category-box-colorA">
              <div className="skills-category-box-title skills-category-box-colorA">
                <h4>Game Development Skills</h4>
              </div>
              <div className='skills-box-container'>
              {
                skills.game_dev_skills.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge skill-badge-background'>{skill}</Badge>
                    </div>
                  )
                  })
              }
              </div>
            </div>

            <div className="skills-category-box skills-category-box-colorB">
              <div className="skills-category-box-title skills-category-box-colorB">
                <h4>Programming Languages</h4>
              </div>
              <div className='skills-box-container'>
              {
                skills.programming_languages.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge skill-badge-background'>{skill}</Badge>
                    </div>
                  )
                  })
              }
              </div>
            </div>

            <div className="skills-category-box skills-category-box-colorC">
              <div className="skills-category-box-title skills-category-box-colorC">
                <h4>Math and Physics Skills</h4>
              </div>
              <div className='skills-box-container'>
              {
                skills.math_physics_skills.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge skill-badge-background'>{skill}</Badge>
                    </div>
                  )
                  })
              }
              </div>
            </div>
 
            <div className="skills-category-box skills-category-box-colorD">
              <div className="skills-category-box-title skills-category-box-colorD">
                <h4>Soft Skills</h4>
              </div>
              <div className='skills-box-container'>
              {
                skills.soft_skills.map(skill => {
                  return (
                    <div className="project-box">
                      <Badge className='skill-badge skill-badge-background'>{skill}</Badge>
                    </div>
                  )
                  })
              }
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
