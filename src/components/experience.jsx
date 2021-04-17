import React from 'react';

function Experience(props) {
    return (
        <div className='section-inner-div'>
            <div className='section-headers'>
                <div className='company-img'> <img src={props.companyLogo}></img> </div>
                <div className='company-name'> <h2>{props.companyName}</h2> </div>
            </div>
            <div className='role'> {props.role} </div>
            <div className='experience'>
                <p><em>{props.jobDescription}</em></p>
                <ul>
                    {(props.responsibilities).map((entry) => <li>{entry}</li>)}
                </ul>
                <div className='date-div'>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}
export default Experience;