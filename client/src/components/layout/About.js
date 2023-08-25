import React from 'react';
// import ImageMapper from 'react-img-mapper';
import { Row, Col } from 'react-bootstrap';
// import areas from '../../RegionMapCoords';

// import RegionSvg from '../svg/RegionSvg';
import RegionMap from '../RegionMap/RegionMap';

import svg from '../../images/bmaregion.svg';

const About = () => {

  // const MAP = {
  //   name: 'regionMap',
  //   areas: { areas }
  // }

  const showCoords = (e) => {
    // console.log('click');
    // var x = e.clientX;
    // var y = e.clientY;
    // var coords = `x = ${ x }, y = ${ y }`
    // console.log(coords);
  }

  const clickHandler = (e) => {
    // e.preventDefault();
    console.log('click');
  }

  const cellClick = (e) => {
    e.preventDefault();
    console.log('cell click');
  }

  return (

    <div className='mb-5' style={{
      // backgroundImage: 'url("/imgs/BG_SHAPES.png")',
      // backgroundSize: 'contain',
      // backgroundRepeat: 'no-repeat',
      // width: '100%',
    }}>
      <img src="/imgs/BG_SHAPES.png" style={{ width: '100vw', height: '100px' }} alt="" />

      <Row>

        <Col lg={7} md={9} sm={12} style={{ }}>
        {/* <svg width="236.5mm" height="236.5mm" version="1.1" viewBox="0 0 236.5 236.5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
 <g transform="translate(21.37 -41.56)">
  <image x="-21.37" y="41.56" width="236.5" height="236.5" xlinkHref={svg}/>
  <path d="m26.69 145.9a2.67 2.447 0 0 1-2.67 2.447 2.67 2.447 0 0 1-2.67-2.447 2.67 2.447 0 0 1 2.67-2.447 2.67 2.447 0 0 1 2.67 2.447z"style={{ fillOpacity: '0', strokeWidth: '10px'}} onClick={ (e) => cellClick(e) } />
  <path d="m57.83 195.3a2.67 2.447 0 0 1-2.67 2.447 2.67 2.447 0 0 1-2.67-2.447 2.67 2.447 0 0 1 2.67-2.447 2.67 2.447 0 0 1 2.67 2.447z" style={{ fillOpacity: '0', strokeWidth: '10px'}} onClick={ (e) => cellClick(e) } />
  <path d="m65.84 202.6a2.67 2.67 0 0 1-2.67 2.67 2.67 2.67 0 0 1-2.67-2.67 2.67 2.67 0 0 1 2.67-2.67 2.67 2.67 0 0 1 2.67 2.67z" style={{ fillOpacity: '0', strokeWidth: '10px'}} onClick={ (e) => cellClick(e) } />
  <path d="m124 182.2a2.36 2.517 0 0 1-2.36 2.517 2.36 2.517 0 0 1-2.36-2.517 2.36 2.517 0 0 1 2.36-2.517 2.36 2.517 0 0 1 2.36 2.517z" style={{ fillOpacity: '0', strokeWidth: '10px'}} onClick={ (e) => cellClick(e) } />
  <path d="m170.8 177.2a2.558 2.558 0 0 1-2.558 2.558 2.558 2.558 0 0 1-2.558-2.558 2.558 2.558 0 0 1 2.558-2.558 2.558 2.558 0 0 1 2.558 2.558z" style={{ fillOpacity: '0', strokeWidth: '10px'}} onClick={ (e) => cellClick(e) } />
  <path d="m73.85 75.26a2.447 2.336 0 0 1-2.447 2.336 2.447 2.336 0 0 1-2.447-2.336 2.447 2.336 0 0 1 2.447-2.336 2.447 2.336 0 0 1 2.447 2.336z" style={{ fillOpacity: '0', strokeWidth: '10px'}} onClick={ (e) => cellClick(e) } />
  <path d="m166.6 73.26a2.447 2.113 0 0 1-2.447 2.113 2.447 2.113 0 0 1-2.447-2.113 2.447 2.113 0 0 1 2.447-2.113 2.447 2.113 0 0 1 2.447 2.113z" style={{ fillOpacity: '0', strokeWidth: '10px'}} onClick={ (e) => cellClick(e) } />
 </g>
</svg> */}

          <img src="/imgs/BONE-MARROW-ASPIRATE-LABELLED-REGION.png" alt="" style={{
            maxWidth: '100%',
            height: 'auto',
            marginTop: '-8rem',
          }}/>
          {/* <img src="/imgs/robothandslidebma.png" alt="" style={{
              position: 'absolute', 
              // top: '-10px'
              width: '400px',
              paddingTop: '1rem',
          }} /> */}
          {/* <img src="/imgs/Region-bma.png" alt="" style={{
            width: '400px',
            marginTop: '8rem',
            marginLeft: '10rem',
          }} /> */}
        </Col>

        {/* <Col md={3}  onClick={ (e) => showCoords(e) }> */}
          {/* <RegionMap /> */}
          {/* <ImageMapper src="/imgs/Region-bma.png" map={ MAP } /> */}
          {/* <img src="/imgs/Region-bma.png" alt="" style={{
            width: '500px',
            display: 'flex',
            justifySelf: 'center',
          }}
          useMap='#regionMap'
          />
          <map id='regionMap' name="regionMap">
            <area style={{ border: '4px solid red '}} shape="circle" coords="646,158,30" href="youtube.com" alt="myelocyte" onClick={ (e) => clickHandler(e) } />
          </map> */}
          {/* <RegionSvg /> */}
        {/* </Col> */}

        {/* <Col md={3}>
        <img src="/imgs/Region-bma.png" alt="" style={{
          width: '500px',
          display: 'flex',
          justifySelf: 'center',
          }} />
        </Col> */}

        {/* <Col md={3} sm={3} xs={3}> */}
        {/* <img src="/imgs/Region-bma.png" alt="region image" style={{
            width: '400px',
            marginTop: '8rem',
            // marginLeft: '10rem',
          }} 
          useMap='#region_map'
          />

          <map name="region_map"> 
          
            <area shape="circle" coords="350,125 ,10" href="jvcdesign.xyz" alt="cell 1" onClick={ (e) => cellClick(e) } />
          
          </map>


          350,125 */}
          {/* <RegionMap /> */}
        {/* </Col> */}

        {/* <Col xs={3}></Col> */}

        <Col className='about-text align-items-center d-flex' style={{
          // marginTop: '20%',
          // marginLeft: '2rem',
          // fontSize: '25px',
          // textAlign: 'right',
          // marginRight: '4rem'
        }}>
          <h5 className='' style={{}}>
            {/* AI Cell Detection & Classification */}
            Automated Cell Differential & Disease Morphology Detection
          </h5>
          {/* <h5 style={{ marginBlock: '0', fontSize: '45px' }}> */}
            {/* NOTE: ADD BREAKPOINT AT SMALL FOR PADDING TOP */}
            {/* AI cell detection & 
          </h5> */}
          {/* <h5 style={{ fontSize: '45px' }}>
            classification
          </h5> */}
        </Col>

      </Row>



        <div className="d-flex justify-content-center">

        </div>

        {/* <div style={{ width: '0', height: '0', borderLeft: '100vw solid lightgrey', borderTop: '100px solid transparent', marginTop: '-100px' }}></div>

        <div style={{ backgroundColor: 'lightgrey', height: '600px' }}>
            About
        </div> */}

        <div style={{ width: '200px'}}>
          {/* <img src="/imgs/Region-bma.png" alt="" /> */}
        </div>

    </div>

  )
}
 
export default About