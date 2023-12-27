
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
