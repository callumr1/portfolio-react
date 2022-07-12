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
              <p className="title-job">Software Developer</p>
              <hr className="hr" />
              <div className="description">
                  <p>
                      I am a Full Stack Software Developer based in Australia.
                      I graduated from James Cook University with a
                      Bachelor of Information Technology in 2019. I achieved an
                      overall GPA of 5.8 and received an Academic Medal - Bachelor
                      Coursework.
                  </p>
                  <p className="text-spacing">
                      During my degree I studied various subjects including Software
                      Development, Data Mining and Data Analysis, Network Security, and
                      Design Thinking. Since graduating I have worked in two seperate roles as a Software Developer,
                      and as a Business Analyst. I specialise in full-stack web development focused primarily 
                      on .Net backend with a React or Angular frontend.
                  </p>
                  <p>
                      I have expertise in .Net, Javascript/Typescript, React & Angular, HTML, CSS/Sass, and
                      SQL with knowledge in Python, Java, and Android Development.
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