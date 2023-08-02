
import { ReactNode } from "react";

import './Styles/AboutMe.scss';
import selfie from '../Assets/latest-front-photo.jpg';
import yt_img from '../Assets/youtube.png';
import li_img from '../Assets/LinkedIn.png';
import gh_img from '../Assets/github.png';
import email_img from '../Assets/email.png';

type BasicProps = {
  portfolioType: string;
}

function AboutMe({ portfolioType } : BasicProps){

  function portfolioTitle() {
    var cleanString = portfolioType?.replace("-", " ")
    return cleanString
  }




  return (
    <div className="AboutMe">
      {/* <div className="personal-info-box"> */}

        {/* <div className="contact-info">
          <div className="logos">

          <div className="important-link-box">
            <a href="mailto:apeerzada987@gmail.com">
                <img alt="it me" src={email_img}/>
            </a>
          </div>
          
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
        </div> */}

        {/* <hr/>

        <div className="information-box">
            <h3><b>Education</b></h3>
            <div className="information-box-info">

            <h4>Concordia University, Montreal, Canada</h4>
              <h5>January 2017 - April 2023</h5>
              <p>Bachelor of Engineering (BEng) in Software Engineering</p>
              <p>CGPA: 3.3</p>
              <p>Took Computer Games as an option with Software Engineering</p> */}
{/* 
            <h4>International Indian School, Jeddah, Saudi Arabia</h4>
              <h5>January 2012 - April 2016</h5>
              <ul>
                <li>High School Diploma</li>
                <li>Studied science and software</li>
              </ul> */}

            {/* </div>
        </div> */}

      {/* </div> */}

      <div className="bio">
        <div className="bio-paragraph">
          <h1>A little about me</h1>
          <p>I grew up in Saudi Arabia and later moved to Canada for my higher education. Despite being Indian by nationality, Saudi Arabia has been my home throughout my childhood and teenage years.</p>

          <p>My passion for science and programming ignited at a young age. I found joy in writing algorithms and using my computer to create innovative solutions. However, as I entered my teenage years, I began to explore my artistic side and wanted to express my talents in more creative ways.</p>

          <p>Gaming had always been a significant part of my life, but it wasn't until I completed The Last of Us in 2013 that I realized the profound impact it had on me. This experience solidified my decision to pursue a career in game development. I wanted to craft immersive experiences that could evoke similar emotions. This led me to discover Unreal Engine 4, where I could utilize my programming skills to bring my game ideas to life.</p>

          <p>Since then, game development has evolved from a hobby to a professional pursuit. In 2019, I started working as a freelance game developer, channeling my efforts into creating transformative single-player experiences. I strive to push boundaries, focusing on storytelling and gameplay to create games that have a lasting impact on players' lives, just as The Last of Us did for me. My every endeavor is dedicated to enhancing my ability to achieve this goal.</p>

          <p>For as long as I can envision, making games and collaborating with other forms of media is the path I wholeheartedly see myself following.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
