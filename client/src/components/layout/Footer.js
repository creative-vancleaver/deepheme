import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Footer = () => {

  return (

    <footer style={{ }}>
        {/* <Container> */}
          <Row style={{ paddingTop: '30px', marginLeft: '10%', marginRigth: '10%' }}>

            <Col sm={4} md={4} lg={4} xl={4} xxl={4}>
              <Card style={{ color: '#fff', border: 'none' }}>
                <img src="/imgs/fullrobot.png" alt="" style={{ maxWidth: '100px' }} />
                {/* <Card.Title style={{ marginBottom: '0' }}>Title</Card.Title>
                <hr style={{ padding: '0', margin: '0', width: '50%' }} />
                <Card.Body>
                  <ul style={{ paddingLeft: '0' }}>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                  </ul>
                </Card.Body> */}
              </Card>
            </Col>

            {/* <Col sm={4} md={4} lg={4} xl={4} xxl={4}>
              <Card style={{ color: '#fff', border: 'none' }}>
                <Card.Title style={{ marginBottom: '0' }}>Title</Card.Title>
                <hr style={{ padding: '0', margin: '0', width: '50%' }} />
                <Card.Body>
                  <ul style={{ paddingLeft: '0' }}>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col> */}

            <Col id='contact' sm={6} md={6} lg={6} xl={6} xxl={6} className='footer-contact'>
              <Card style={{ color: '#fff', border: 'none' }}>
                <Card.Title style={{ marginBottom: '0', fontFamily: 'Jost', fontWeight: '100' }}>Contact</Card.Title>
                <hr style={{ padding: '0', margin: '0', width: '50%' }} />
                <Card.Body>
                  <ul style={{ paddingLeft: '0', fontFamily: 'Noto Serif' }}>
                    <li>
                      <span style={{ fontFamily: 'Jost', fontWeight: '100' }}>Email: </span>
                      <span style={{ fontWeight: '300' }}>hemepathai@gmail.com</span>
                    </li>
                    <li>
                      <span style={{ fontFamily: 'Jost', fontWeight: '100' }}>Location: </span>
                      <span style={{ fontWeight: '300' }}>New York, NY</span>
                    </li>
                    {/* <li>text</li> */}
                  </ul>
                </Card.Body>
              </Card>
            </Col>

          </Row>
          <Row>
              <Col className='text-center py-3' style={{ opacity: '25%' }}>
                  Copyright &copy; Jacob Van Cleave
              </Col>
          </Row>
        {/* </Container> */}
    </footer>

  )
}

export default Footer