import React from 'react';
import '../index.css';

function Projects(props) {
    return (
        <div className='section-inner-div inline-block projects-div' style={{ padding: 0 }}>
            <div>
                <div className='image-background' style={{ backgroundImage: `url(${props.image})` }}>
                    {/* <img src={props.image} /> */}
                </div>
                <div style={{ padding: '20px' }}>
                    <h2>{props.title}</h2>
                    <div>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
            <div style={{ padding: '10px' }} className='hidden-div'>
                <h2>Accomplishments</h2>
                <div>
                    <ul>
                        {(props.accomplishments).map(e => <li>{e}</li>)}
                    </ul>
                </div>
                <div>
                    <a href={props.url} target='_blank'><button>view online</button></a>
                </div>
            </div>
        </div>
    )
}

export default Projects;