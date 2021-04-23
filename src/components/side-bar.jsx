import React, { useState } from 'react';
import '../index.css';

function SideBar() {

    const [highlight, setHighlight] = useState(false);

    function highlightFunc() {
        setHighlight(true)
    }

    return (
        <nav className='side-bar'>
            <div className='side-bar-title'>
                <h1>Chukwuma Azubuike</h1>
                <p>Full Stack Developer</p>
            </div>
            <ul>
                <a href='#About' onClick={highlightFunc}><li style={{ backgroundColor: highlight ? '#cde4ec' : 'white' }} >About</li></a>
                <a href='#Experience' onClick={highlightFunc} ><li>Experience</li></a>
                <a href='#Projects'><li>Projects</li></a>
                <a href='#Skills'><li>Skills</li></a>
                {/* <li> <a href='#Awards'>Awards</a></li> */}
                <a href='#Education'><li>Education</li></a>
                <a href='#Certifications'><li>Certifications</li></a>
                <a href='#Contact'><li>Contact</li></a>
                <a href='#Resume'><li>Resume</li></a>
            </ul>
        </nav>
    )
}
export default SideBar;