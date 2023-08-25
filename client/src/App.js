import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import './App.css';

// CONTEXT
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

// DEFAULT AUTH TOKEN
import setAuthToken from './utils/setAuthToken';

// AUTH COMPONENTS
import Login from './components/auth/Login';

// ROUTING COMPONENTS
import PrivateRoute from './components/routing/PrivateRoute';

// LAYOUT COMPONENTS
// import Navbar from './components/layout/Navbar';
import TopBtn from './components/layout/TopBtn';
import Alert from './components/layout/Alert';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// PAGE COMPONENTS
import Home from './components/pages/Home';
import LoginPage from './components/pages/LoginPage';
import PrivateHome from './components/pages/PrivateHome';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  return (

    <AuthState>
      <AlertState>
        <Router>
          <main style={{
        backgroundImage: "url('/imgs/LGBG.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '80vh !important'
    }}>
            <Alert />
            <Header />
            <TopBtn />
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
              <Route exact path='/admin' element={ <PrivateRoute /> }>
                <Route exact path='/admin' element={ <PrivateHome /> } />
              </Route>
              <Route exact path='/login' element={ <LoginPage /> } />

            </Routes>

          </main>
          <Footer />

        </Router>
      </AlertState>
    </AuthState>

  );
}

export default App;
