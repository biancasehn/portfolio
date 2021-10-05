import style from './style.module.css';

import { SiJavascript } from 'react-icons/si';
import {ReactComponent as Nextjs} from 'assets/icons/nextjs-3.svg'
import {ReactComponent as Expressjs} from 'assets/icons/express-109.svg'
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNode } from 'react-icons/fa';

function Technologies() {
    return (    
    <section id="technologies">
        <h2 className="title">TECHNOLOGIES</h2>
        <main className="content">
            <div className={style.tech}>
                <h1>< FaHtml5 style={{color:"#f06529"}}/></h1>
                <h1>< FaCss3Alt style={{color:"dodgerblue"}}/></h1>
                <h1>< SiJavascript style={{color:"#F0DB4F"}}/></h1>
                <h1>< FaReact style={{color:"#61DBFB"}}/></h1>
                <h1>< Nextjs style={{maxWidth:"1.5em", maxHeight:"1.5em"}}/></h1>
                <h1>< FaGitAlt style={{color:"#F1502F"}}/></h1>
                <h1>< FaNode style={{color:"#68A063"}}/></h1>
                <h1>< Expressjs style={{maxWidth:"1.2em", maxHeight:"1.5em"}}/></h1>
            </div>
        </main>
    </section>
    )
}

export default Technologies;