import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function LinksBar() {
    return(
        <div className="linksBar animateSlideDown">
        <ul>
          <li>
            <a href="https://github.com/biancasehn" target="_blank" rel="noreferrer"><FaGithub className="icons"/></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bianca-sehn-95b72b140/" target="_blank" rel="noreferrer"><FaLinkedin className="icons"/></a>
          </li>
          <li>
            <a href="mailto:bianca_sehn@hotmail.com" target="_blank" rel="noreferrer"><MdEmail className="icons"/></a>
          </li>
        </ul>
      </div>
    )
}

export default LinksBar;