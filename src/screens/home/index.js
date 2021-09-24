import Nav from './components/Nav/nav.js'
import Intro from './components/Intro/intro.js'
import LinksBar from './components/LinksBar/linksBar.js'
import About from './components/About/about.js'
import Technologies from './components/Technologies/technologies.js'
import Projects from './components/Projects/projects.js'

function Home () {
    return(
        <div>
            <Nav />
            <Intro />
            <LinksBar />
            <About />
            <Technologies />
            <Projects />
        </div>
    )
}

export default Home;