import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import './App.css';

// LAYOUT COMPONENTS
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// PAGE COMPONENTS
import Home from './components/pages/Home';

function App() {
  return (

    <Router>
      <main>
        {/* <div className='' style={{ 
            // backgroundImage: "url('/imgs/Hero-BG-IMG.png')",
            // // backgroundRepeat: 'no-repeat',
            // backgroundSize: 'cover',
            // // backgroundPositionY: '0',
            // width: '100%',
            // height: '105vh',
            // // minHeight: '105vh',
            // // position: 'absolute',
            // // top: '-50px',
            // // zIndex: '-1'
          }}> */}
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='/' element={ <Home /> } />
        </Routes>



      </main>
      <Footer />



    </Router>

  );
}

export default App;
