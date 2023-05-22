
import './Styles/AboutMe.scss';
import selfie from '../Assets/latest-front-photo.jpg';

function AboutMe() {

  return (
    <div className="AboutMe">
      <div className="personal-info-box">
        <div className="about-me-image">
          <img alt="it me" src={selfie}/>

          <div className="personal-info">
              <h3>Anas Peerzada</h3>
              <h4>Software Engineer, Game Programmer</h4>
              <h6>Contact: apeerzada987@gmail.com</h6>
          </div>

        </div>

        <hr/>

        <div className="information-box">
            <h3><b>Education:</b></h3>
            <div className="information-box-info">

            <h4>Concordia University, Montreal, Canada</h4>
              <h5>January 2017 - April 2023</h5>
              <ul>
                <li>Bachelor of Engineering (BEng) in Software Engineering</li>
                <li>CGPA: 3.3</li>
                <li>Took Computer Games as an option with Software Engineering</li>
              </ul>

            <h4>International Indian School, Jeddah, Saudi Arabia</h4>
              <h5>January 2012 - April 2016</h5>
              <ul>
                <li>Studied science and software</li>
                <li>Formed a school club and was an executive member of the school library</li>
                <li>Organized competitions at a school-wide level and was active in co-curricular activities.</li>
              </ul>

            </div>
        </div>

      </div>

      <div className="bio">

        <div className="bio-paragraph">
          <h2>Personal Profile</h2>
          <p>I was born and raised in Saudi Arabia to two loving Indian parents, who have shaped everything I am today.</p>
          
        </div>

        <div className="bio-paragraph">
          <h2>Career Goals</h2>
          <p>Ever since I played The Last of Us in 2013, I
            decided that I wanted to make games for the rest
            of my life. I wanted to make other gamers feel how
            The Last of Us made me feel. And ever since then
            I've always worked to understand how I can work
            to make that happen.
            I've since played a lot of games that have had a
            very real and meaningful impact on me, and they
            all have taught me, in a lot of ways, how to create
            meaningful experiences for players.
            As such, I am absolutely open to developing and
            working on games in any genre as long as I sense
            that the game is going to be a very meaningful
            experience. Nothing excites me more than
            working on a game that I know will occupy the
            minds of people for a long time.
            I am also so excited by the fact that there are so
            many unique experiences out there that we as
            game developers haven't even imagined yet, just
            waiting for us to create them. As long as I am
            alive, I seek to bring out these experiences into
            the real world for everyone to enjoy.</p>
            
          <p>As such, I am mainly interested in working on single player experiences that are designed to evoke the
            strongest and most positive of emotions from the player. As a gamer myself, I do have some genre
            preferences when it comes to games, but I always push myself to work on as many types of games as
            possible just so I can expand my horizons and experience more than just the usual stuff I
            experience. It is also exciting to me the possibility of working on something new and unheard of, and
            potentially discovering something new to enjoy as
            a result.</p>
        </div>
        

      </div>
    </div>
  );
}

export default AboutMe;
