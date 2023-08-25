import React from 'react';

import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MoreInfo = () => {

  return (



      <div>
        <Row className='d-flex'>

          <Col lg={6} md={12} sm={12} className='p-5 column-1' style={{
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
            // alignContent: 'center',
            alignItems: 'center',
          }}>
            <h3 className='mb-5'>Expert Training</h3>
            <div style={{ width: '500px' }}>
            <h5>Pathologist created and tested</h5>
            <h5>Trained on over 50,000 cells</h5>
            {/* <h5>Trained on billions of cellsf from thousands of patients</h5> */}
            <h5>Can classify over 32 types of cells including those that cause cancer</h5>
            <h5>Generalizes across scanning hardware and institutions</h5>
            </div>
          </Col>

          <Col lg={6} md={12} sm={12} className='p-5 justify-content-center column-2' style={{ backgroundColor: '#f9f7fc', display: 'grid', textAlign: 'center' }}>
            <h3 className='mb-5'>Bone Marrow Aspirates</h3>
            {/* <div style={{ height: '400px' }}> */}
            <img src="/imgs/Region-bma.png" alt="" style={{ height: '400px' }}/>
            {/* </div> */}
          </Col>

        </Row>

        <Row>

          <Col lg={6} md={12} sm={12} className='p-5 justify-content-center column-3' style={{ backgroundColor: '#f9f7fc',
        display: 'grid', textAlign: 'center' }}>
            {/* <div style={{ maxHeight: '500px'}}> */}
            <h3 className='mb-5'>Peripheral Blood Smears</h3>
            <img src="/imgs/pbs.png" alt="" style={{ height: '400px' }} />
            {/* </div> */}
          </Col>

          <Col lg={6} md={12} sm={12} className='p-5 column-4' style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <h3 className='mb-5'>Expert Results</h3>
            <div style={{ width: '500px' }}>
            <h5>Rapidly create differentials and streamline diagnostic processes</h5>            
            <h5>Save your neck, your back, your pussy, AND your crack from hours hunched over a microscope</h5>
            <h5>Accurate results in seconds</h5>
            </div>
          </Col>

        </Row>
      </div>


  )
}

export default MoreInfo