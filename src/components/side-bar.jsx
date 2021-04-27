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
                <a href='#About'><li> <PersonRoundedIcon className='list-icon' style={{ fontSize: 25 }} /> About</li></a>
                <a href='#Experience'><li> <TrendingUpIcon className='list-icon' style={{ fontSize: 25, color: '#89df18' }} /> Experience</li></a>
                <a href='#Projects'><li> <DashboardRoundedIcon className='list-icon' style={{ fontSize: 25, color: '#ae20b3' }} /> Projects</li></a>
                <a href='#Skills'><li> <EqualizerOutlinedIcon className='list-icon' style={{ fontSize: 25, color: '#1aaedb' }} /> Skills</li></a>
                {/* <li> <a href='#Awards'>Awards</a></li> */}
                <a href='#Education'><li> <SchoolRoundedIcon className='list-icon' style={{ fontSize: 25, color: '#b3193a' }} /> Education</li></a>
                <a href='#Certifications'><li> <VerifiedUserRoundedIcon className='list-icon' style={{ fontSize: 25, color: '#7a7a77' }} /> Certifications</li></a>
                <a href='#Contact'><li> <PermContactCalendarRoundedIcon className='list-icon' style={{ fontSize: 25, color: '#d4d43b' }} /> Contact</li></a>
                <a href='#Resume'><li> <DescriptionRoundedIcon className='list-icon' style={{ fontSize: 25, color: 'black' }} /> Resume</li></a>
            </ul>
        </nav>
    )
}
export default SideBar;