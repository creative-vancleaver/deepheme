import React from 'react';

import { Row, Col, Card } from 'react-bootstrap';

const News = () => {

  return (

    <div className='pb-5 mt-5' style={{ 
      // height: '500px',
      // backgroundImage: "url('/imgs/large-horizontal-region.png')",
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat', 
  }}>

    <h1 className='text-center mb-5'>
      Latest Updates
    </h1>

    <Row className='ps-5 pe-5 justify-content-center'>

      <Col lg={3} md={6} sm={8} className='mb-5'>
        <Card>
          <Card.Img variant='top' src="url('/img/Regoin-bma.png')" style={{ border: '1px solid black' }}></Card.Img>
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card titel and make up the build of the card's content.
            </Card.Text>
            {/* <Button style={{  backgroundColor: 'transparent !important', border: 'none', color: '#000', padding: '0' }}>Read More</Button> */}
            <div className="d-flex justify-content-end">
              <Card.Link style={{ color: 'black', cursor: 'pointer' }}>Read More</Card.Link>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={3} md={6} sm={8} className='mb-5'>
        <Card>
          <Card.Img variant='top' src='url("/img/Regoin-bma.png")' style={{ border: '1px solid black' }}></Card.Img>
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card titel and make up the build of the card's content.
            </Card.Text>
            {/* <Button style={{  backgroundColor: 'transparent !important', border: 'none', color: '#000', padding: '0' }}>Read More</Button> */}
            <div className="d-flex justify-content-end">
              <Card.Link style={{ color: 'black', cursor: 'pointer' }}>Read More</Card.Link>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={3} md={6} sm={8} className='mb-5'>
        <Card>
          <Card.Img variant='top' src='url("/img/Regoin-bma.png")' style={{ border: '1px solid black' }}></Card.Img>
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card titel and make up the build of the card's content.
            </Card.Text>
            {/* <Button style={{  backgroundColor: 'transparent !important', border: 'none', color: '#000', padding: '0' }}>Read More</Button> */}
            <div className="d-flex justify-content-end">
              <Card.Link style={{ color: 'black', cursor: 'pointer' }}>Read More</Card.Link>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={3} md={6} sm={8} className=''>
        <Card>
          <Card.Img variant='top' src='url("/img/Regoin-bma.png")' style={{ border: '1px solid black' }}></Card.Img>
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card titel and make up the build of the card's content.
            </Card.Text>
            {/* <Button style={{  backgroundColor: 'transparent !important', border: 'none', color: '#000', padding: '0' }}>Read More</Button> */}
            <div className="d-flex justify-content-end">
              <Card.Link style={{ color: 'black', cursor: 'pointer' }}>Read More</Card.Link>
            </div>
          </Card.Body>
        </Card>
      </Col>

    </Row>



  </div>

  )
}

export default News