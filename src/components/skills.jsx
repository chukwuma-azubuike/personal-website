import React from 'react';
import '../index.css';

function Skills(props) {
    return (
        <div className='section-inner-div'>
            <div>
                <h1>{props.category}</h1>
            </div>
            <div className='content-div'>
                {(props.stack).forEach((e) => {
                    <div className='skill-logo-name'>
                        <div> <img src={e.logo} /> </div>
                        <div><p>{e.name}</p></div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Skills;