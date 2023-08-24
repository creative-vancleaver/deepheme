import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Affiliation
 = () => {

  return (

    <div>
        <div className='affiliation-section text-center pt-5'>

            <h3>
                {/* AI powered by a proprietary
                blend of whole slide data */}
                AI powered and built
                in association with
                globally renowned institutions
            </h3>

            <Row className='align-items-center justify-content-center pt-4'>
                
                <Col md={3}>
                    <img src="/imgs/MSK.png" alt="" />
                </Col>
{/* 
                <Col md={3}>
                    <img src="/imgs/UCSF.png" alt="" />
                </Col>

                 <Col md={3}>
                    <img src="/imgs/UCBERKELEY.png" alt="" />
                 </Col> */}


            </Row>

            <div>
                <h3 className='pt-5 mb-0'>
                    Clinical deployment at the top cancer center in the world
                </h3>
            </div>

        </div>
        {/* <div className="">
            <div className='triangle-text'> */}
                {/* <h3>
                    Clinical deployment at the top cancer center in the world
                </h3> */}
            {/* </div>
        </div> */}
        {/* <img src="/imgs/BGSHAPES.png" alt="" /> */}
      {/* <img src="/imgs/BG_SHAPES.png" style={{ width: '100vw' }} alt="" /> */}

    </div>

  )
}

export default Affiliation
