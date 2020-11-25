import React from 'react';
import { Link } from 'react-router-dom';

function MenuIcon() {
    return (
        <div className='menu-nav'>
            <div className='menu-container'>
                <div className='menu-line menu-top'></div>
                <div className='menu-line menu-mid'></div>
                <div className='menu-line menu-bottom'></div>

                <nav className='nav'>
                    <ul>
                        <Link to='/'>home</Link>
                        <Link to='/about'>about</Link>
                        <Link to='/portfolio'>portfolio</Link>
                        <Link to='/resume'>resume</Link>
                        <Link to='/contact'>contact</Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export { MenuIcon };