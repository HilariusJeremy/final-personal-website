import './ContainerRight.css';
import { Link } from 'react-router-dom';

const ContainerRight = () => {
    return (
        <div className="buttons">
            <p>[<Link to="/">home</Link>]</p>
            <p>[<Link to="/blog">blog</Link>]</p>
            <p>[<Link to="/project">project</Link>]</p>
            <p>[<Link to="/experience">experience</Link>]</p>
            <p>[<Link to="/about">about</Link>]</p>
        </div>)

}

export default ContainerRight