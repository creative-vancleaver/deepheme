import React from 'react';

// COMPONENTS
import Header from '../layout/Header';
import Login from '../auth/Login';

const LoginPage = () => {

  return (

    <div 
    // style={{
    //     backgroundImage: "url('/imgs/LGBG.png')",
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     minHeight: '80vh !important'
    // }}
    >

        {/* <Header /> */}
        <Login />

    </div>
  )
}

export default LoginPage