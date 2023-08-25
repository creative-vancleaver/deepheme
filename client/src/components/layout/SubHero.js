import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const SubHero = () => {

  return (
    <div id='about' className='subhero-section mb-5 mt-5' style={{
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
                        Bring hematopathologist expertise to every peripheral blood smear in an instant.
                    </p>
                </Card>
            </Col>

            <Col>
                <Card s={12}>
                    <h3>
                        Early Diagnosis
                    </h3>
                    <p>
                        Use AI assisted interpretation of bone marrow and peripheral blood to get right diagnosis as quickly as possible.
                    </p>
                </Card>
            </Col>

            <Col>
                <Card s={12}>
                    <h3>
                        Early Treatment
                    </h3>
                    <p className='subhero-card-text'>
                        Clinical decision support and bio marker discovery that drives treatment and improves patient outcome.
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