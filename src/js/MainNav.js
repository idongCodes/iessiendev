import { Link } from 'react-router-dom';

function MainNav() {
    return (
        <nav>
            <ul>
                <Link to='/'>home</Link>
                <Link to='/about'>about</Link>
                <Link to='/portfolio'>portfolio</Link>
                <Link to='/resume'>resume</Link>
                <Link to='/contact'>contact</Link>
            </ul>
        </nav>
    );
}

export {
    MainNav,
};