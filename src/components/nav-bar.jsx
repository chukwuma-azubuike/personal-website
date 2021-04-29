import React, { useState } from 'react';
import '../index.css';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';

function NavBar() {
    const [sideBar, setSideBar] = useState(false)

    function handleClick() {
        setSideBar(false)
    }

    return (
        <div>
            <div className='mobile-side-div' style={{ left: sideBar ? '0' : '-200px' }} >
                <nav className='side-bar' style={{ display: sideBar ? 'block' : 'none', zIndex: 4 }}>
                    <ul>
                        <a onClick={handleClick} href='#About'><li> <PersonRoundedIcon className='list-icon' style={{ fontSize: 25 }} /> About</li></a>
                        <a onClick={handleClick} href='#Experience'><li> <TrendingUpIcon className='list-icon' style={{ fontSize: 25, color: '#89df18' }} /> Experience</li></a>
                        <a onClick={handleClick} href='#Projects'><li> <DashboardRoundedIcon className='list-icon' style={{ fontSize: 25, color: '#ae20b3' }} /> Projects</li></a>
                        <a onClick={handleClick} href='#Skills'><li> <EqualizerOutlinedIcon className='list-icon' style={{ fontSize: 25, color: '#1aaedb' }} /> Skills</li></a>
                        {/* <li> <a href='#Awards'>Awards</a></li> */}
                        <a onClick={handleClick} href='#Education'><li> <SchoolRoundedIcon className='list-icon' style={{ fontSize: 25, color: '#b3193a' }} /> Education</li></a>
                        <a onClick={handleClick} href='#Certifications'><li> <VerifiedUserRoundedIcon className='list-icon' style={{ fontSize: 25, color: '#7a7a77' }} /> Certifications</li></a>
                        <a onClick={handleClick} href='#Contact'><li> <PermContactCalendarRoundedIcon className='list-icon' style={{ fontSize: 25, color: '#d4d43b' }} /> Contact</li></a>
                        {/* <a onClick={handleClick} href='#Resume'><li> <DescriptionRoundedIcon className='list-icon' style={{ fontSize: 25, color: 'black' }} /> Resume</li></a> */}
                    </ul>
                </nav>
                <div style={{
                    display: sideBar ? 'block' : 'none',
                    zIndex: 3, backgroundColor: 'black',
                    opacity: 0.6, height: '100%', width: '100%',
                    position: 'fixed',
                    top: '0'
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