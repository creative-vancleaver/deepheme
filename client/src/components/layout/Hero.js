import React from 'react'

// import background from '../../images/Hero-BG-IMG.png';

import Navbar from './Navbar';
import { Nav } from 'react-bootstrap';

const Hero = () => {

  return (

    // <div className='hero-section' style={{ 
    //     backgroundImage: "url('/Hero-BG-IMG.png')",
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     backgroundPositionY: '0',
    //     width: '100vw',
    //     height: '105vh',
    //     position: 'absolute',
    //     top: '-50px',
    //     zIndex: '-1' }}>
        // deep heme
    // </div>

    // <div>
        <div style={{
            // minHeight: '86vh',
            height: '86vh',
            // backgroundImage: "url('/imgs/bgtake5.png')",
            // backgroundRepeat: 'no-repeat',
            // backgroundSize: 'contain',
            // // backgroundPosition: 'center',
            // // backgroundPositionY: '0',
            // width: '100vw',
            // height: '100%',
        }}>

            {/* <Navbar /> */}

            <div className='hero-section' style={{ 
                // marginLeft: '20%', 
                marginLeft: '10%',
                // height: '70vh', 
                // // display: 'flex',
                display: 'inline-flex',
                // // flexDirection: 'column', 
                alignItems: 'center' ,
                // // justifyItems: 'left'
            }}>

                <div className='hero-header'>

                    <h1>
                        AI Powered Hematopathology
                    </h1>

                    <h5>
                        Revolutionizing cancer diagnoses with
                        AI cell detection and classification
                    </h5>

                </div>
            </div>

            <div className='hero-btn-box'>
                {/* <button>Learn More</button> */}
                <button>Coming Soon</button>
            </div>
        </div>
        /* <div style={{
            position: 'absolute',
            bottom: '350px',
            display: 'flex',
            justifyItems: 'center',
        }}>
            <button>Learn More</button>
        </div> */
    // </div>

  )
}

export default Hero