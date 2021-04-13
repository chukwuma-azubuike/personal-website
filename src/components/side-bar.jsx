import React from 'react';
import '../index.css';

function SideBar() {
    return (
        <nav className='side-bar'>
            <h1>Chukwuma Azubuike</h1>
            <p>Full Stack Developer</p>
            <hr></hr>
            <ul>
                <li> <a href='#About'>About</a></li>
                <li> <a href='#Experience'>Experience</a></li>
                <li> <a href='#Projects'>Projects</a></li>
                <li> <a href='#Skills'>Skills</a></li>
                {/* <li> <a href='#Awards'>Awards</a></li> */}
                <li> <a href='#Education'>Education</a></li>
                <li> <a href='#Contact'>Contact</a></li>
                <li> <a href='#Resume'>Resume</a></li>
            </ul>
        </nav>
    )
}
export default SideBar;