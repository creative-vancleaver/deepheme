import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Footer = () => {

  return (

    <footer>
        <Container>
          <Row style={{ paddingTop: '30px', paddingBottom: '30px' }}>

            <Col sm={4} md={4} lg={4} xl={4} xxl={4}>
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
            </Col>

            <Col sm={4} md={4} lg={4} xl={4} xxl={4}>
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
            </Col>

            <Col sm={4} md={4} lg={4} xl={4} xxl={4}>
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
            </Col>

          </Row>
          <Row>
              <Col className='text-center py-3' style={{ opacity: '25%' }}>
                  Copyright &copy; Jacob Van Cleave
              </Col>
          </Row>
        </Container>
    </footer>

  )
}

export default Footer