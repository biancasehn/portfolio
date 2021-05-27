import './App.css';
import { useState } from 'react';

//ICONS
import { FaGithub, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNode, FaExternalLinkAlt } from 'react-icons/fa';
import { MdEmail, MdExpandMore } from 'react-icons/md';
import { SiJavascript } from 'react-icons/si';
import {ReactComponent as Nextjs} from './nextjs-3.svg'
import {ReactComponent as Expressjs} from './express-109.svg'

//IMAGES
import myPhoto from './images/photo.jpg'
import faceDetector from './images/face_detector.png';
import shoppingList from './images/shopping_list.png';
import dominandoAutocad from './images/dominando_autocad.png';

function App() {
  
  const projects = [
    {
      name: "Face Detector",
      link: "https://facedetector.vercel.app/",
      image: faceDetector,
      description: "Final project for my Web Development course. A web application that allows users to detect faces in their pictures. Also possible to subscribe and keep track of the number of pictures sumbited successfully.",
      techs: ["Nextjs", "Nodejs", "Express", "Postgres", ]
    },
    {
      name: "Shopping List",
      link: "https://shoppinglist-application.herokuapp.com/",
      image: shoppingList,
      description: "Simple web application for users to enter their shopping items. Users can also remove and cross out each item, as well as clear the list.",
      techs: ["HTML", "CSS", "JavaScript", "Nodejs", "Express", "SQLite", ]
    },
    {
      name: "Landing Page",
      link: "https://dominandoautocad.com/",
      image: dominandoAutocad,
      description: "AutoCAD course landing page, bridge between the advertisement and the course purchase page, where the user is able to check information about the course.",
      techs: ["React", "CSS"]
    },
  ]

  const [displayDescription, setDisplayDescription] = useState({
    0:false,
    1:false,
    2:false
  });

  const handleDescription = (event) => {
    const id = Number(event.target.id)
    setDisplayDescription({
      ...displayDescription,
      [id]: !displayDescription[id]
    })
  }
   

  return (
    <div className="App">
      
      {/* NAV BAR */}
      <nav className="nav animateSlideDown">
        <ul>
          <li><a href="#aboutMe">ABOUT ME</a></li>
          <li><a href="#technologies">TECHNOLOGIES</a></li>
          <li><a href="#projects">PROJECTS</a></li>
        </ul>
      </nav>
      
      {/* HERO */}
      <div className="hero animateSlideDown">
        <div className="heroText">
          <h1>Hi! Nice to see you here!</h1>
          <h2>
            I’m <span style={{color:"var(--primaryFocus)", fontSize:"1.2em", fontWeight:"bold"}}>Bianca Sehn</span>, a web developer passionate about creating designs and building web applications. Currently based in Budapest, Hungary, but open for new adventures.
          </h2>
          {/* <img alt="CV">Download my CV</img> */}
          <a>Download my CV</a>
        </div>
      </div>
      
      {/* CONTACT LINKS */}
      <div className="linksBar animateSlideDown">
        <ul>
          <li>
            <a 
            href="https://github.com/biancasehn" target="_blank" rel="noreferrer"><FaGithub className="icons"/>
            </a>
          </li>
          <li>
            <a 
            href="https://www.linkedin.com/in/bianca-sehn-95b72b140/" target="_blank" rel="noreferrer"><FaLinkedin className="icons"/>
            </a>
          </li>
          <li>
            <a 
            href="mailto:bianca_sehn@hotmail.com" target="_blank" rel="noreferrer"><MdEmail className="icons"/>
            </a>
          </li>
        </ul>
      </div>
      
      {/* ABOUT ME SECTION */}
      <div className="section aboutMe" id="aboutMe">
        <h2 className="sectionTitle">ABOUT ME</h2>
        <div className="sectionContent">
          <div className="myPhoto">
            <img alt="myphoto" src={myPhoto} style={{maxWidth: "250px", borderRadius:"50%"}}/>
          </div>
          <h3>
            I am a Brazilian self-taught web developer with background in Electrical Engineering, that rediscovered her passion about programming during the pandemic.
            <br/>
            <br/>
            I love to learn new stuff and I spend most of my free time studying web development, designing and building applications.
            <br/>
            <br/>
            When I am not studying, you can probably find me watching movies or planning my next trip.
          </h3>
        </div>
      </div>

      {/* TECHNOLOGIES SECTION */}
      <div className="section techs" id="technologies">
        <h2 className="sectionTitle">TECHNOLOGIES</h2>
        <div className="sectionContent tech">
          <h1>< FaHtml5 style={{color:"#f06529"}}/></h1>
          <h1>< FaCss3Alt style={{color:"dodgerblue"}}/></h1>
          <h1>< SiJavascript style={{color:"#F0DB4F"}}/></h1>
          <h1>< FaReact style={{color:"#61DBFB"}}/></h1>
          <h1>< Nextjs style={{maxWidth:"1.5em", maxHeight:"1.5em"}}/></h1>
          <h1>< FaGitAlt style={{color:"#F1502F"}}/></h1>
          <h1>< FaNode style={{color:"#68A063"}}/></h1>
          <h1>< Expressjs style={{maxWidth:"1.2em", maxHeight:"1.5em"}}/></h1>
        </div>
      </div>
      
      {/* PROJECTS SECTION */}
      <div className="section">
        <h2 className="sectionTitle">PROJECTS</h2>
        <div className="projects sectionContent" id="projects">

          {projects.map((project, i) => (
            <div className="project" key={i}>
              <a href={project.link} target="_blank" rel="noreferrer"><img alt="facedetector" src={project.image}></img></a> 
              <div className="description">
                <a className="titleAnchor" href={project.link} target="_blank" rel="noreferrer">{project.name}</a> 
                <span class="titleButton" id={i} onClick={handleDescription}>
                {project.name}
                < MdExpandMore className={displayDescription[i] ? "chevronProject transformText rotate" : "chevronProject transformText"}/>
                </span>
                <div className={displayDescription[i] ? "text transformText textActive" : "text transform"}>
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
      </div>

      {/* FOOTER */}
      <footer>
        <p>Designed and developed</p>
        <p>by Bianca Sehn</p>
      </footer>
    
    </div>
  );
}

export default App;
