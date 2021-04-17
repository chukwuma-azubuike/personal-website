import React from 'react';
import '../index.css';

function Skills(props) {
    return (
        <div className='section-inner-div pad-div'>
            <div className='section-headers'>
                <h1>{props.category}</h1>
            </div>
            <div className='content-div'>
                {(props.stack).map(e => {
                    return <div className='inline-block skill-name-div'>
                        <span className='skill-name-div'> <img src={e.logo} /> </span>
                        <span className='skill-name-div'><p>{e.name}</p></span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Skills;