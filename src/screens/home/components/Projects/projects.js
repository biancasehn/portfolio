import style from './style.module.css';

import { useEffect, useState } from 'react';

import { PROJECTS } from 'constants/projects.js'

import { FaExternalLinkAlt } from 'react-icons/fa';
import { MdExpandMore } from 'react-icons/md';;


const initialState = PROJECTS.map((project, i) => {
    return false
})

function Projects() {

    const [displayDescription, setDisplayDescription] = useState(initialState);
    const [screenSize, setScreenSize] = useState(window.innerWidth)
  
    useEffect(() => {
        window.addEventListener("resize", () => setScreenSize(window.innerWidth))
        return () => window.removeEventListener("resize", () => setScreenSize(window.innerWidth))
    })

    const handleDescription = (event) => {
        const id = Number(event.target.id)
        setDisplayDescription({
            ...displayDescription,
            [id]: !displayDescription[id]
        })
    }

    return (
        <section className={style.projects}>
            <h2 className="title">PROJECTS</h2>
            <main className="content" id="projects">
                {/* PROJECT */}
                {PROJECTS.map((project, i) => (
                    <div className={style.project} key={i}>
                        <a className={style.image} href={project.link} target="_blank" rel="noreferrer"><img alt={project.name} title={project.name} src={project.image}></img></a> 
                        {/* PROJECT INFO */}
                        <div className={style.projectInfo}>
                            {
                                (screenSize > 768) ?
                                // PROJECT TITLE desktop version
                                <a className={style.titleDesktop} href={project.link} target="_blank" rel="noreferrer">{project.name}</a> 
                                :
                                // PROJECT TITLE mobile version
                                    <button id={i} onClick={handleDescription}>
                                        {project.name}
                                        <MdExpandMore className={displayDescription[i] ? style.chevron0Deg : style.chevron180Deg}/>
                                    </button>
                            }
                            <div className={displayDescription[i] ? style.toggleDescriptionOn : style.toggleDescriptionOff}>
                                <p className={style.description}>{project.description}</p>
                                <div className={style.techs}>
                                    {project.techs.map((tech, i) => (
                                    <span key={i}>
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                                {
                                    (screenSize < 768) ?
                                    <a className={style.redirect} href={project.link}>< FaExternalLinkAlt /></a>
                                    : <div></div>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </section>
    )
}

export default Projects;