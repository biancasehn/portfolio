import { useState } from 'react';

import { PROJECTS } from '../../../../constants/projects.js'

import { FaExternalLinkAlt } from 'react-icons/fa';
import { MdExpandMore } from 'react-icons/md';;


const initialState = PROJECTS.map((project, i) => {
    return false
})

function Projects() {

    const [displayDescription, setDisplayDescription] = useState(initialState);
  
    const handleDescription = (event) => {
        const id = Number(event.target.id)
        setDisplayDescription({
            ...displayDescription,
            [id]: !displayDescription[id]
        })
    }
      
    return (
        <section>
            <h2 className="sectionTitle">PROJECTS</h2>
            <div className="projects sectionContent" id="projects">
                {/* PROJECT */}
                {PROJECTS.map((project, i) => (
                    <div className="project" key={i}>
                        <a href={project.link} target="_blank" rel="noreferrer"><img alt={project.name} title={project.name} src={project.image}></img></a> 
                        {/* DESCRIPTION */}
                        <div className="description">
                            {/* Project title desktop version */}
                            <a className="titleAnchor" href={project.link} target="_blank" rel="noreferrer">{project.name}</a> 
                            {/* Project title mobile version */}
                            <span className="titleButton" id={i} onClick={handleDescription}>
                                {project.name}
                                < MdExpandMore className={displayDescription[i] ? "chevronProject rotate" : "chevronProject"}/>
                            </span>
                            <div className={displayDescription[i] ? "text textActive" : "text"}>
                                <p>{project.description}</p>
                                <div className="projTechs">
                                    {project.techs.map((tech, i) => (
                                    <span key={i}>
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                                <a href={project.link}>< FaExternalLinkAlt /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;