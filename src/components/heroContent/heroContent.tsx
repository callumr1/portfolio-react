import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import HeroImage from './heroImage/heroImage';
import Contacts from '../shared/contacts/contacts';
import './heroContent.scss';


function HeroContent(){

    return (
        <div id="heroContent" className="hero-content">
          <HeroImage />
          <main className="about">
              <h1 className="name">Hi, I'm Callum Robertson</h1>
              <p className="title-job">Application Developer</p>
              <p className="title-2">Enthusiast Designer</p>
              <hr className="hr" />
              <div className="description">
                  <p>
                      I am a Freelance Web Developer and Graphic Designer based in Australia.
                      I graduated from James Cook University with a
                      Bachelor of Information Technology in March 2019. I achieved an
                      overall GPA of 5.8 and received an Academic Medal - Bachelor
                      Coursework.
                  </p>
                  <p className="text-spacing">
                      During my degree I have studied various subjects including Software
                      Development, Data Mining and Data Analysis, Network Security, and
                      Design Thinking. My goal is to continue to further my knowledge in
                      all fields of study. I developed this site to showcase my skills and
                      interests, along with projects that I have undertaken throughout the last few
                      years.
                  </p>
                  <p>
                      I am proficient in HTML, CSS/Sass, JavaScript, jQuery, C#, .Net, and
                      SQL with knowledge in PHP, Python, Java, and Android Development.
                  </p>
              </div>
              <Contacts />
              <a className="contact-button" href="mailto:callumrobertson402@gmail.com" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope}/>
                <span className="button-with-icon-text">Email Me</span>
            </a>
          </main>
          <a id="hero-scroll" className="scroll-down" href="#content-section"><FontAwesomeIcon icon={faAngleDown} size="2x" /></a>
      </div>
    )
}

export default HeroContent;