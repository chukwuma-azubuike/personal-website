import React, { useState } from 'react';
import '../index.css';

function NavBar() {
    const [sideBar, setSideBar] = useState(false)

    function handleClick() {
        setSideBar(false)
    }

    return (
        <div>
            <div className='mobile-side-div' style={{ display: sideBar ? 'block' : 'none' }}>
                <nav className='side-bar' style={{ display: sideBar ? 'block' : 'none', zIndex: 3 }}>
                    <ul>
                        <a onClick={handleClick} href='#About'><li>About</li></a>
                        <a onClick={handleClick} href='#Experience'><li>Experience</li></a>
                        <a onClick={handleClick} href='#Projects'><li>Projects</li></a>
                        <a onClick={handleClick} href='#Skills'><li>Skills</li></a>
                        {/* <li> <a href='#Awards'>Awards</a></li> */}
                        <a onClick={handleClick} href='#Education'><li>Education</li></a>
                        <a onClick={handleClick} href='#Certifications'><li>Certifications</li></a>
                        <a onClick={handleClick} href='#Contact'><li>Contact</li></a>
                        <a onClick={handleClick} href='#Resume'><li>Resume</li></a>
                    </ul>
                </nav>
                <div style={{
                    display: sideBar ? 'block' : 'none',
                    zIndex: 2, backgroundColor: 'black',
                    opacity: 0.6, height: '100%', width: '100%',
                    position: 'fixed'
                }}
                    onClick={handleClick}>
                </div>
            </div>
            <nav className='nav-bar'>
                <div className='burger-icon-div' onClick={() => {
                    setSideBar(true)
                }}>
                    <a href="javascript:void(0);" class="burger-icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
                <div className='nav-title'>
                    <h1>Chukwuma Azubuike</h1>
                    <p>Full Stack Developer</p>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;