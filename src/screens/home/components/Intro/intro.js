
import CV from '../../../../assets/pdf/CV.pdf'

function Intro() {

    return (
        <div className="intro animateSlideDown">
          <div className="introText">
            <h1>Hi! Nice to see you here!</h1>
            <h2>
              I’m <span style={{color:"var(--primaryFocus)", fontSize:"1.2em", fontWeight:"bold"}}>Bianca Sehn</span>, self-taught Brazilian web developer passionate about front end development. Based in Budapest, Hungary, but open to new adventures.
            </h2>
            <a alt="CV" href={CV} target="_blank" rel="noopener noreferrer">Download my CV</a>
          </div>
        </div>
    )
}

export default Intro;
