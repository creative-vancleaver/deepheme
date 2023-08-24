import React from 'react';

// LAYOUT COMPONENTS
import NavBar from '../layout/Navbar';
import Hero from '../layout/Hero';
import SubHero from '../layout/SubHero';
import Affiliation from '../layout/Affiliation';
import About from '../layout/About';
import TryIt from '../layout/TryIt';
import MoreInfo from '../layout/MoreInfo';
import News from '../layout/News';

const Home = () => {

  return (

    <div style={{
        backgroundImage: "url('/imgs/LGBG.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundPositionY: '0',
        // width: '100%',
        // height: '100%',
        // height: '105vh',
        // minHeight: '105vh',
        // position: 'absolute',
        // top: '-50px',
        // zIndex: '-1'
    }}>
        
        <NavBar />
        <Hero />
        <SubHero />
        <Affiliation />
        <About />
        <TryIt />
        <MoreInfo />
        <News />
        {/* <MoreInfo /> */}
        {/* <MoreInfo />
        <News /> */}

    </div>

  )
}

export default Home