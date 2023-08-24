import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const SubHero = () => {

  return (
    <div className='subhero-section mb-5 mt-5' style={{
        // marginTop: '13rem',
        // paddingLeft: '10%',
        // paddingRight: '10%',
    }}>

        <Row>
            
            <Col>
                <Card s={12}>
                    <h3>
                        Early Detection
                    </h3>
                    <p>
                        Lorem ipsum dolor sit
                        amet, consectetur
                        adipiscing elit, sed do
                        eiusmod tempor
                        incididunt ut labore et
                        dolore magna aliqua.
                        Quis ipsum suspendisse
                        ultrices gravida. Risus
                        commodo viverra
                    </p>
                </Card>
            </Col>

            <Col>
                <Card s={12}>
                    <h3>
                        Early Diagnosis
                    </h3>
                    <p>
                        Lorem ipsum dolor sit
                        amet, consectetur
                        adipiscing elit, sed do
                        eiusmod tempor
                        incididunt ut labore et
                        dolore magna aliqua.
                        Quis ipsum suspendisse
                        ultrices gravida. Risus
                        commodo viverra
                    </p>
                </Card>
            </Col>

            <Col>
                <Card s={12}>
                    <h3>
                        Early Treatment
                    </h3>
                    <p className='subhero-card-text'>
                        Lorem ipsum dolor sit
                        amet, consectetur
                        adipiscing elit, sed do
                        eiusmod tempor
                        incididunt ut labore et
                        dolore magna aliqua.
                        Quis ipsum suspendisse
                        ultrices gravida. Risus
                        commodo viverra
                    </p>
                </Card>
            </Col>
        </Row>

        <div style={{ marginBottom: '10rem !important' }}>
            <Row className='subhero-section-imgs'>

                <Col md={2} xs={2}>
                    <img src="/imgs/Monocyte.png" alt="" />
                </Col>

                <Col md={2} xs={2}>
                    <img src="/imgs/Basophil.png" alt="" />
                </Col>

                <Col md={2} xs={2}>
                    <img src="/imgs/Eosinophil.png" alt="" />
                </Col>

                <Col md={2} xs={2}>
                    <img src="/imgs/Lymphocyte.png" alt="" />
                </Col>

                <Col md={2} xs={2}>
                    <img src="/imgs/Neutrophil.png" alt="" />
                </Col>

            </Row>
    </div>

    </div>

  )
}

export default SubHero