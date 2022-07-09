
import { getProject, Project } from './services/projectService';
import './App.scss';
import { useEffect, useState } from 'react';
import { Markup } from 'interweave';
import HeroContent from './components/heroContent/heroContent';

function App() {
  

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
      <HeroContent />
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
