import React, { Fragment, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import AuthContext from '../../context/auth/authContext';

import logo from '../../images/DHLOGO.png';

const Header = () => {

    const navigate = useNavigate();

    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user } = authContext;

    const onLogout = () => {

        console.log('Logout');
        logout();
        navigate('/');

    }

    const authNav = (

        // <Nav className='ms-auto'>
        <Fragment>
            <Navbar.Text>Welcome, { user && user.user.name }</Navbar.Text>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
            <Nav.Link onClick={ onLogout }>Logout</Nav.Link>
        </Fragment>
        // </Nav>

        // <Fragment>
        //     <li>Welcome, { user && user.user.name }</li>

        //     <li>
        //         <a onClick={ onLogout }>
        //             <i className="fas fa-sign-out-alt"></i>
        //             <span className="hide-sm">Logout</span>
        //         </a>
        //     </li>
        // </Fragment>

    )

    const guestNav = (

        <Fragment>
            <Nav.Link href='/login'>Login</Nav.Link>
        </Fragment>
        
        // <Fragment>
        //     <li>
        //         <Link to='/login'>Login</Link>
        //     </li>
        // </Fragment>
    )

  return (

    <Navbar expand='lg' className=''>
        {/* <Container> */}
            <Navbar.Brand href="/" className='navbar-logo-div'>
                <img src={ logo } alt="" className='d-inline-block me-3 nav-logo' />
                {/* { ' ' } */}
                <span className='navbar-title'>DeepHeme</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='deepHemeNav' data-bs-target='#deepHemeNav' className='navbar-burger' variant='white' />
            <Navbar.Collapse id='deepHemeNav' className='deep-heme-nav'>
                <Nav className='ms-auto navbar-ul'>

                { isAuthenticated ? authNav : guestNav }

                {/* <Nav className="ms-auto">
                    <Nav.Link href='!#'>About</Nav.Link>
                    <Nav.Link href='!#'>Contact</Nav.Link>
                </Nav> */}
                </Nav>

            </Navbar.Collapse>
        {/* </Container> */}
    </Navbar>

  )
}

export default Header