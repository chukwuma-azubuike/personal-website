import React from 'react';
import '../index.css';

function Education(props) {
    return (
        <div className='section-inner-div'>
            <div className='education-header'>
                <div><h1>{props.school}</h1></div>
            </div>
            <div className='education-details'>
                <p>{props.location}</p>
                <p> <strong>{props.degree}</strong> </p>
            </div>
            <div className='date-div'>
                <p>{props.date}</p>
            </div>
        </div>
    )
}

export default Education;