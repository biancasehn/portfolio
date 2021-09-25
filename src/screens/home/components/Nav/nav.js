import style from './style.module.css';

function Nav() {

    return (
        <nav className={style.nav}>
            <ul>
            <li><a href="#about">ABOUT ME</a></li>
            <li><a href="#technologies">TECHNOLOGIES</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            </ul>
        </nav>
    )
}

export default Nav;