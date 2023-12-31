import React, { useContext, useEffect } from 'react';

// CONTEXT
import AuthContext from '../../context/auth/authContext';

// LAYOUT COMPONENTS
import Header from '../layout/Header';
import NavBar from '../layout/Navbar';
import Hero from '../layout/Hero';
import SubHero from '../layout/SubHero';
import Affiliation from '../layout/Affiliation';
import About from '../layout/About';
import TryIt from '../layout/TryIt';
import MoreInfo from '../layout/MoreInfo';
import News from '../layout/News';

const Home = () => {

  const authContext = useContext(AuthContext);
  console.log('home auth context ', authContext);


  useEffect(() => {

    authContext.loadUser();
    console.log('reloading user Home.js');

    // eslint-disable-next-line
  }, []);

  return (

    <div
    //  style={{
    //     backgroundImage: "url('/imgs/LGBG.png')",
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     // backgroundPosition: 'center',
    //     // backgroundPositionY: '0',
    //     // width: '100%',
    //     // height: '100%',
    //     // height: '105vh',
    //     // minHeight: '105vh',
    //     // position: 'absolute',
    //     // top: '-50px',
    //     // zIndex: '-1'
    // }}
    >
        
        {/* <NavBar /> */}
        {/* <Header /> */}
        <Hero />
        {/* <SubHero />
        <Affiliation />
        <About />
        <TryIt />
        <MoreInfo />
        <News /> */}

        {/* <MoreInfo /> */}
        {/* <MoreInfo />
        <News /> */}

    </div>

  )
}

export default Home