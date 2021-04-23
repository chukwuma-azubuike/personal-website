import React from 'react';

function About(props) {
    return (
        <div>
            <div className='about-section'>
                <div className='line-div'></div>
                <div className='about'> <h2>{props.about}</h2> </div>
            </div>
            <div className='about-desc'>{props.description}</div>
        </div>
    )
}

export default About;