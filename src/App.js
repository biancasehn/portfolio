import './App.css';

//ICONS
import { FaGithub, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNode } from 'react-icons/fa';
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
  
  return (
    <div className="App">
      
      <nav className="nav animateSlideDown">
        <ul>
          <li><a href="#aboutMe">ABOUT ME</a></li>
          <li><a href="#technologies">TECHNOLOGIES</a></li>
          <li><a href="#projects">PROJECTS</a></li>
        </ul>
      </nav>
      
      <div className="hero animateSlideDown">
        <div className="heroText">
          <h1>Hi! Nice to see you here!</h1>
          <h2>
            I’m <span style={{color:"var(--primaryFocus)", fontSize:"1.2em", fontWeight:"bold"}}>Bianca Sehn</span>, a web developer passionate about creating designs and building web applications. Currently based in Budapest, Hungary, but open for new adventures.
          </h2>
          {/* <img alt="CV">Download my CV</img> */}
          <a>Download my CV</a>
        </div>
        <div className="learnMore">
            <a href="#aboutMe">< MdExpandMore /></a>
        </div>
      </div>
      
      <div className="aside animateSlideDown">
        <ul>
          <li>
            <a href="https://github.com/biancasehn" target="_blank" rel="noreferrer"><FaGithub className="icons"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bianca-sehn-95b72b140/" target="_blank" rel="noreferrer"><FaLinkedin className="icons"/>
            </a>
          </li>
          <li><a href="mailto:bianca_sehn@hotmail.com" target="_blank" rel="noreferrer"><MdEmail className="icons"/></a></li>
        </ul>
      </div>
      
      <div className="section aboutMe" id="aboutMe">
        <h2 className="sectionTitle">ABOUT ME</h2>
        <div className="sectionContent">
          <div className="myPhoto">
            <img alt="myphoto" src={myPhoto} style={{maxWidth: "250px", borderRadius:"50%"}}/>
          </div>
          <h3>
            I am a Brazilian self-taught web developer with background in Electrical Engineering, that rediscovered her passion about programming during the pandemic.
          </h3>
          <h3>
            I love to learn new stuff and I spend most of my free time studying web development, designing and building applications.
          </h3>  
          <h3>  
            When I am not studying, you can probably find me watching movies or planning my next trip.
          </h3>
        </div>
        
      </div>
      
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
      
      <div className="section" id="projects">
        <h2 className="sectionTitle">PROJECTS</h2>
        <div className="projects sectionContent">
          <div className="project">
            <a href="https://facedetector.vercel.app/" target="_blank" rel="noreferrer"><img alt="facedetector" src={faceDetector}></img></a> 
            <p><a href="https://facedetector.vercel.app/" target="_blank" rel="noreferrer">Face Detector</a>Final project for my Web Development course. A web application that allows users to detect faces in their pictures. Also possible to subscribe and keep track of the number of pictures sumbited successfully.</p>
          </div>
          <div className="project">
            <a href="https://shoppinglist-application.herokuapp.com/" target="_blank" rel="noreferrer"><img alt="shoppinglist" src={shoppingList}></img></a>
            <p><a href="https://shoppinglist-application.herokuapp.com/" target="_blank" rel="noreferrer">Shopping List</a>Simple web application for users to enter their shopping items. Users can also remove and cross out each item, as well as clear the list. </p>
          </div>
          <div className="project">
            <a href="https://dominandoautocad.com/" target="_blank" rel="noreferrer"><img alt="dominandoautocad" src={dominandoAutocad}></img></a>
            <p><a href="https://dominandoautocad.com/" target="_blank" rel="noreferrer">Landing Page</a>AutoCAD course landing page, bridge between the advertisement and the course purchase page, where the user is able to check information about the course.</p>
          </div>
        </div>      
      </div>
  
      <footer>
        <p>Designed and developed</p>
        <p>by Bianca Sehn</p>
      </footer>
    
    </div>
  );
}

export default App;
