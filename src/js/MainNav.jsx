import { Link } from 'react-router-dom';

const linkStyles = {
    'textDecoration':'none',
    'fontSize':'2rem',
    'lineHeight':'3rem'
}

export default function MainNav(){
    return(
        <nav>
            <ul>
                <Link style={linkStyles} to="/">Home</Link>
                <Link style={linkStyles} to="/about">About</Link>
                <Link style={linkStyles} to="/portfolio">Portfolio</Link>
                <Link style={linkStyles} to="/resume">Resume</Link>
                <Link style={linkStyles} to="/contact">Contact</Link>
            </ul>
        </nav>
    );
}