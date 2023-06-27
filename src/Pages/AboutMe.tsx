
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
      <div className="personal-info-box">
        <div className="about-me-image">
          <img className="selfie-image" alt="it me" src={selfie}/>

          <div className="personal-info">
              <h3>Anas Peerzada</h3>
              <h4> {portfolioTitle()} </h4>
          </div>
        </div>

        <div className="contact-info">
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
        </div>

        <hr/>

        <div className="information-box">
            <h3><b>Education</b></h3>
            <div className="information-box-info">

            <h4>Concordia University, Montreal, Canada</h4>
              <h5>January 2017 - April 2023</h5>
              <p>Bachelor of Engineering (BEng) in Software Engineering</p>
              <p>CGPA: 3.3</p>
              <p>Took Computer Games as an option with Software Engineering</p>
{/* 
            <h4>International Indian School, Jeddah, Saudi Arabia</h4>
              <h5>January 2012 - April 2016</h5>
              <ul>
                <li>High School Diploma</li>
                <li>Studied science and software</li>
              </ul> */}

            </div>
        </div>

        <hr/>

      </div>

      <div className="bio">

        <div className="bio-paragraph">
          <h2>A little about me</h2>
          <p>Ever since I picked up Unreal Engine 4 in 2014, I've been making games as a hobby. That hobby turned into a professional thing when I started making games professionally in a freelance capacity.</p>

          <p>Ever since finishing The Last of Us in 2013, I decided to make games for a living, and would leave no stone unturned in creating similar experiences. As such, I am an aspiring game programmer interested in working on transformational single-player experiences with a focus on narrative and gameplay</p>
        </div>
      </div>

      <hr/>

    </div>
  );
}

export default AboutMe;
