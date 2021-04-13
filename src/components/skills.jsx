import React from 'react';
import '../index.css';

function Skills(props) {
    return (
        <div>
            <div>
                <h1>{props.category}</h1>
            </div>
            <div>
                {(props.stack).forEach((e) => {
                    <div>
                        <span>{e.name}</span>
                        <span> <img src={e.logo} /> </span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Skills;