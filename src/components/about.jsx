import React from 'react';

function About(props) {
    return (
        <div>
            <div className='about-section'>
                <div className='about'> <h2>{props.about}</h2> </div>
            </div>
            <div className='about-desc'> {props.description.split('\n').map(str => <span> {str} <br /></span>)} </div>
        </div>
    )
}

export default About;