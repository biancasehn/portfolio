import './App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import faceDetector from './images/face_detector.png';
import shoppingList from './images/shopping_list.png';
import dominandoAutocad from './images/dominando_autocad.png';

function App() {
  
  return (
    <div className="App">
      
      <nav className="nav">
        <ul>
          <a href="#"><li>ABOUT ME</li></a>
          <a href="#"><li>TECHNOLOGIES</li></a>
          <a href="#"><li>PROJECTS</li></a>
        </ul>
      </nav>
      
      <div className="hero">
        <div className="heroText">
          <h1>Hi! Nice to see you here!</h1>
          <h2>I’m Bianca Sehn, a self-taught web developer passionate about front-end development.I’m Bianca Sehn, a self-taught web developer passionate about front-end development</h2>
        </div>
      </div>
      
      <div className="aside">
        <ul>
          <li><a href="https://github.com/biancasehn" target="_blank"><FaGithub className="icons"/></a></li>
          <li><a href="https://www.linkedin.com/in/bianca-sehn-95b72b140/" target="_blank"><FaLinkedin className="icons"/></a></li>
          <li><a href="mailto:bianca_sehn@hotmail.com" target="_blank"><MdEmail className="icons"/></a></li>
        </ul>
      </div>
      
      <div className="section aboutMe">
        <h2 className="sectionTitle">ABOUT ME</h2>
        <h3>I am an Electrical Engineer, bla bla bla blablalaala bla bla blala bla bla bla alb alb </h3>
        <img href="#"></img>  {/*COLOCAR FOTO */}
      </div>
      
      <div className="section technologies">
        <h2 className="sectionTitle">TECHNOLOGIES</h2>
        <h3>react, next, html ......................................................................</h3>
      </div>
      
      <div className="section">
        <h2 className="sectionTitle">PROJECTS</h2>
        <div className="projects">
          <div className="project">
            <a href="https://facedetector.vercel.app/" target="_blank"><img src={faceDetector}></img></a>
            <p>this project bla bla bla blathis project bla bla bla bla</p>
          </div>
          <div className="project">
            <a href="https://shoppinglist-application.herokuapp.com/" target="_blank"><img src={shoppingList}></img></a>
            <p>this project bla bla bla bla</p>
          </div>
          <div className="project">
            <a href="https://dominandoautocad.com/" target="_blank"><img src={dominandoAutocad}></img></a>
            <p>this project bla bla bla blathis project bla bla bla blathis project bla bla bla blathis project bla bla bla bla</p>
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
