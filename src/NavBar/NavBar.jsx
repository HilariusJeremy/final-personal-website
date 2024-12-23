import { Link } from 'react-router-dom';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
    return(
    <div className='navbar'>

        <p>[<Link to="/">home</Link>]</p>
        <p>[<Link to="/blog">blog</Link>]</p>
        <p>[<Link to="/project">project</Link>]</p>
        <p>[<Link to="/experience">experience</Link>]</p>
        <p>[<Link to="/about">about</Link>]</p>

        <div className='links'>
            <a href="https://www.linkedin.com/in/hilariusjeremy/" target='blank'>
                                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '35px' }} />
            </a>
            <a href="https://github.com/HilariusJeremy" target='blank'>
                                    <FontAwesomeIcon icon={faGithub} style={{ fontSize: '35px' }}/>
            </a>
        </div>
    </div>
            )
}

export default NavBar