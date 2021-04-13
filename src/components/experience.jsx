import React from 'react';

function Experience(props) {
    return (
        <div className='experience'>
            <div className='experience-headers'>
                <span className='company-img'> <img src={props.companyLogo}></img> </span>
                <span className='company-name'>{props.companyName}</span>
                <span className='role'>{props.role}</span>
            </div>
            <div className='experience-content'>
                <p><em>{props.jobDescription}</em></p>
                <ul>
                    {(props.responsibilities).forEach((entry) => {
                        <li>{entry}</li>
                    })}
                </ul>
                <div className='date-div'>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}
export default Experience;