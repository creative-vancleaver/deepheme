import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

import { Link, useNavigate } from 'react-router-dom';

// CONTEXT
import AuthContext from '../../context/auth/authContext';

// LOGO
// import logo from '../../images/Logo_2_160.png';
import logo from '../../images/DHLOGO.png';

const Navbar = ({ title, icon }) => {

    const navigate = useNavigate();

    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user } = authContext;
    // console.log('navbar user = ', user.user.name);

    const onLogout = () => {
        console.log('LOGOUT');
        logout();
        navigate('/');
    }

    const authLinks = (

        <Fragment>
            <li style={{ color: '#fff', width: '150px' }}>Welcome, { user && user.user.name }</li>

            <li style={{ color: '#fff', width: '100px' }}>
                <a onClick={ onLogout }>
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
            {/* ADD OTHER LINK HERE FOR DEV SITE */}
        </Fragment>
    );

    const guestLinks = (

        <Fragment>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    )

  return (


    <div className='navbar'>

        <h1>
        {/* className='d-flex align-items-center' style={{ display: 'inline-flex', alignItems: 'center' } */}
            {/* <i className={logo}></i> { title } */}
            <img className='nav-logo' src={ icon } alt="DeepHeme logo" /> 
            <span style={{ marginLeft: '1rem' }}> { title }</span>
        </h1>

        <ul>

            <ul>
                { isAuthenticated ? authLinks : guestLinks }
            </ul>

            {/* <li>
                <Link to='/login'>Login</Link>
            </li> */}

            {/* <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='#'>About</Link>
            </li>
            <li>
                <Link to='#'>Contact</Link>
            </li> */}
        </ul>

    </div>

  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Deep Heme',
    icon: logo
}

export default Navbar