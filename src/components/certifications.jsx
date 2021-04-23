import React from 'react';
import '../index.css';

function Certifications(props) {
    return (
        <div className='section-inner-div pad-div'>
            <div className='certifications'>
                <span>
                    <h1>{props.organisation}</h1>
                </span>
                <span>
                    <img src={props.organisationLogo} />
                </span>
            </div>
            <div className='certifications-desc'>
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}

export default Certifications;