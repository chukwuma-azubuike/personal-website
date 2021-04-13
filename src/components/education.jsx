import React from 'react';
import '../index.css';

function Education(props) {
    return (
        <div>
            <div>
                <h1>{props.school}</h1>
            </div>
            <div>
                <p>{props.location}</p>
                <p>{props.degree}</p>
                <div className='date-div'>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default Education;