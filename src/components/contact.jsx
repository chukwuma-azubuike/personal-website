import React from 'react';
import '../index.css';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Contact(props) {
    return (
        <div className='contacts'>
            <div className='contacts-div' >
                <a href={props.email}><span className='contact-icons' > <MailRoundedIcon className='open-link' /> </span></a>
                <a className='contact-details' href={props.email}> <span> {props.email}</span></a>
            </div>
            <div className='contacts-div' >
                <a href={props.phone}><span className='contact-icons' > <PhoneRoundedIcon className='open-link' /> </span></a>
                <a className='contact-details' href={props.phone}> <span> {props.phone}</span></a>
            </div>
            <div className='contacts-div' >
                <a href={props.github}><span className='contact-icons' > <GitHubIcon className='open-link' /> </span></a>
                <a className='contact-details' href={props.github}> <span> {props.github}</span></a>
            </div>
            <div className='contacts-div' >
                <a href={props.linkedIn}><span className='contact-icons' > <LinkedInIcon className='open-link' /> </span></a>
                <a className='contact-details' href={props.linkedIn}> <span> www.linkedin.com/chukwuma-azubuike/</span></a>
            </div>
        </div>
    )


}

export default Contact;