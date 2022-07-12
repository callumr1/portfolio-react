import { Markup } from "interweave";
import { useEffect, useState } from "react";
import { getProject, IProject, Project } from "../../services/projectService";
import './projectCard.scss'

function ProjectCard(proj: IProject){
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {    
        (async () => {
            getProject(proj.name).then(proj => setProject(proj))
        })();
        
      },[proj.name]);

    return (
        <div className="project-card">
            <main>
                <h2 className="project-title">{project && project.name}</h2>
                <hr className="project-hr" />
                {project && <ProjectImage {...project} />}
                <div className="project-description">
                    <Markup content={project && project.content} />
                </div>
                {project && <ProjectLinks {...project}/>}
                <div className="project-langauges">
                    <ul className="languages">
                        {project && project.languages.map(lang => <li className="tag">{lang}</li>)}                            
                    </ul>
                </div>
            </main>
        </div>
    );
}

function ProjectImage(project: Project){
    return (
        <aside className="float-side">
            <figure>
                <img className="project-image" 
                // src={require("../../images/PasswordGenerator.png")}
                    src={require(`${project && project.image}`)} 
                    alt="" width="300" />
            </figure>
        </aside>
    )
}

function ProjectLinks(proj: Project){
    return(
        <div className="project-links">
            <a href={proj.url ? proj.url : ""} target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
                <span className="link-text">Source Code</span>
            </a>
            {proj.projectUrl && <ProjectSiteLink {...proj}/>}
        </div>
    )
}

function ProjectSiteLink(proj: Project){
    return (
        <a href={proj.projectUrl ? proj.projectUrl : ""} target="_blank" rel="noreferrer">
            <i className="fas fa-globe-americas"></i>
            <span className="link-text">View Site</span>
        </a>
    )
}

export default ProjectCard;