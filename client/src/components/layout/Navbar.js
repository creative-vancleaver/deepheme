import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// LOGO
// import logo from '../../images/Logo_2_160.png';
import logo from '../../images/DHLOGO.png';

const Navbar = ({ title, icon }) => {

  return (


    <div className='navbar'>

        <h1>
        {/* className='d-flex align-items-center' style={{ display: 'inline-flex', alignItems: 'center' } */}
            {/* <i className={logo}></i> { title } */}
            <img className='nav-logo' src={ icon } alt="DeepHeme logo" /> 
            <span style={{ marginLeft: '1rem' }}> { title }</span>
        </h1>

        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='#'>About</Link>
            </li>
            <li>
                <Link to='#'>Contact</Link>
            </li>
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