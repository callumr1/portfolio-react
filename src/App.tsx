import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faCodepen, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import callum from "./images/callum.jpg";
import callum2x from "./images/callum@2x.jpg";
import callum3x from "./images/callum@3x.jpg";
import { getProject, Project } from './services/projectService';
import './App.scss';
import { useEffect, useState } from 'react';
import { Markup } from 'interweave';

function App() {
  const githubLink = "https://github.com/callumr1";
  const linkedinLink = "https://www.linkedin.com/in/callum-robertson1/";
  const codepenLink = "https://codepen.io/callumr1/";
  const stackoverflowLink = "https://stackoverflow.com/users/9724409/callumr?tab=profile";

  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    const projectNames: string[] = ["PasswordGenerator", "MathWiz", "ColourGenerator", "Notes"];

    (async () => {
        var projects: Project[] = [];
        for(let i = 0; i < projectNames.length; i++){
            await getProject(projectNames[i]).then(resp => projects.push(resp))
        }
        setProjects(projects);
    })();
    
  },[]);
  

  return (
    <div className="App">
      <div id="heroContent" className="hero-content">
          <aside className="side">
              <figure id="picture" className="picture">
                  <div className="picture-shadow"></div>
                  <img id="pictureImage" className="picture-image" src={callum} srcSet={`
                          ${callum}   1x,
                          ${callum2x} 2x,
                          ${callum3x} 3x`} alt="Portrait of Callum Robertson" width="320" height="320" />
              </figure>
          </aside>
          <main className="about">
              <h1 className="name">Hi, I'm Callum Robertson</h1>
              <p className="title-job">Application Developer</p>
              <p className="title-2">
                  <span>Enthusiast Designer</span>
              </p>
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
              <div className="contact">
                  <ul className="social">
                      <li>
                          <a href={githubLink} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
                      </li>
                      <li>
                          <a href={linkedinLink} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                          </a>
                      </li>
                      <li>
                          <a href={codepenLink} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faCodepen} />
                          </a>
                      </li>
                      <li>
                          <a href={stackoverflowLink} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faStackOverflow} />
                          </a>
                      </li>
                  </ul>
                  <a className="button" href="mailto:callumrobertson402@gmail.com" rel="noreferrer">
                      <FontAwesomeIcon icon={faEnvelope}/>
                      <span className="button-with-icon-text">Email Me</span>
                  </a>
              </div>
          </main>
          <a id="hero-scroll" className="scroll-down" href="#content-section"><FontAwesomeIcon icon={faAngleDown} size="2x" /></a>
      </div>
      <div id="content-section" className="content-section">
        <h1 className="section-header">Projects</h1>
        {projects && projects.map(project => <ProjectCard {...project} />)}
      </div>
    </div>
  );
}

function ProjectCard(project: Project){
    console.log(project);
    return (
        <div className="project-card">
                <main>
                    <h2 className="project-title">{project.name}</h2>
                    <hr className="project-hr" />
                    <aside className="float-side">
                        <figure>
                            <img className="project-image" 
                                src={require(`${project.image}`)} 
                                alt="" width="300" />
                        </figure>
                    </aside>
                    <div className="project-description">
                        <Markup content={project.content} />
                    </div>
                    <div className="project-links">
                        <a href={project.url} target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                            <span className="link-text">Source Code</span>
                        </a>
                        <a href="@project.ProjectURL" target="_blank" rel="noreferrer">
                            <i className="fas fa-globe-americas"></i>
                            <span className="link-text">View Site</span>
                        </a>
                    </div>
                    <div className="project-langauges">
                        <ul className="languages">
                            {project.languages.map(lang => <li className="tag">{lang}</li>)}                            
                        </ul>
                    </div>
                </main>
            </div>
    );
}

export default App;
