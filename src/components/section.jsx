import React from 'react';
import '../index.css';
import Experience from './experience';

function Section(props) {
    return (
        <div id={props.id}>
            <div className='section-title'> <h1>{props.title}</h1> </div>
            {}
        </div>
    )
}

export default Section;