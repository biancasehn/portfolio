import style from './style.module.css';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function LinksBar() {
  return(
    <div className={style.container}>
        <main className={style.bar}>
          <ul>
            <li>
              <a href="https://github.com/biancasehn" target="_blank" rel="noreferrer"><FaGithub className={style.icons}/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bianca-sehn-95b72b140/" target="_blank" rel="noreferrer"><FaLinkedin className={style.icons}/></a>
            </li>
            <li>
              <a href="mailto:bianca_sehn@hotmail.com" target="_blank" rel="noreferrer"><MdEmail className={style.icons}/></a>
            </li>
          </ul>
      </main>
    </div>
  )
}

export default LinksBar;