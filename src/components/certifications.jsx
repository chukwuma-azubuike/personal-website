import React from 'react';
import '../index.css';

function Certifications(props) {
    return (
        <div>
            <div>
                <span>
                    <h1>{props.organisation}</h1>
                </span>
                <span>
                    <img src={props.organisationLogo} />
                </span>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Certifications;