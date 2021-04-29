import React from 'react';
import '../index.css';

function Contact(props) {
    return (
        <div className='contacts'>
            <div>
                <a href={props.email}><span>{props.email}</span></a>
            </div>
            <div>
                <a href={props.phone}><span>{props.phone}</span></a>
            </div>
            <div>
                <a href={props.github}><span>{props.github}</span></a>
            </div>
            <div>
                <a href={props.linkedIn}>www.linkedin.com/chukwuma-azubuike/</a>
            </div>
        </div>
    )


}

export default Contact;