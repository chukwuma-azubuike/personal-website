import React, { useState } from 'react';
import '../index.css';
import CloseIcon from '@material-ui/icons/Close';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

function Projects(props) {

    const [popup, setPopup] = useState(false);

    return (
        <div className='section-inner-div projects-div'>
            <div className='projects-inner-div'>
                <div className='image-background' style={{ backgroundImage: `url(${props.image})` }}>
                    {/* <img src={props.image} /> */}
                </div>
                <div style={{ padding: '20px' }}>
                    <a href={'javascript:void(0);'}
                        onClick={() => {
                            setPopup(true)
                        }}
                    ><h2>{props.title}</h2></a>
                    <div>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
            <div
                className='projects-div reveal-div'
                style={{
                    position: 'absolute',
                    transform: popup ? 'translateY(-100%)' : 'translateY(0px)',
                    transition: 'all 0.3s',
                    backgroundColor: 'white'
                }} >
                <div className='inner-reveal-div'>
                    <div
                        className='close'
                        style={{
                            textAlign: 'right',
                        }}>
                        <a href={'javascript:void(0);'}
                            onClick={() => {
                                setPopup(false)
                            }}>
                            <CloseIcon
                                style={{
                                    color: '#c25440'
                                }}
                            />
                        </a>
                    </div>
                    <h2>Accomplishments</h2>
                    <div>
                        <ul id='reveal-ul'>
                            {(props.accomplishments).map(e => <li>{e}</li>)}
                        </ul>
                    </div>
                </div>
                <div className='date-div'>
                    <a href={props.url} target='_blank'><div className='button'> <OpenInNewIcon className='open-link' /> </div></a>
                </div>
            </div>
        </div>
    )
}

export default Projects;