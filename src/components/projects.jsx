import React, { useState } from 'react';
import '../index.css';
import CloseIcon from '@material-ui/icons/Close';

function Projects(props) {

    const [popup, setPopup] = useState(false);

    return (
        <div className='section-inner-div projects-div' style={{ padding: 0, width: '50%' }}>
            <div>
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
                className='projects-div'
                style={{
                    position: 'absolute',
                    display: popup ? 'block' : 'none',
                    bottom: '0px',
                    minWidth: '300px',
                    width: '1vw',
                    backgroundColor: 'white'
                }} >
                <div style={{
                    textAlign: 'right',
                    margin: '20px'
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
                    <ul>
                        {(props.accomplishments).map(e => <li>{e}</li>)}
                    </ul>
                    <div>
                        <a href={props.url} target='_blank'><button>view online</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;