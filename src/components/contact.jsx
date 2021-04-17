import React from 'react';
import '../index.css';

function Contact(props) {
    return (
        <div className='section-inner-div'>
            <div>
                <span>{props.email}</span>
            </div>
            <div>
                <span>{props.phone}</span>
            </div>
            <div>
                <span>{props.github}</span>
            </div>
            <div>
                <span>{props.linkedIn}</span>
            </div>
        </div>
    )
}

export default Contact;