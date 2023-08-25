import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// CONTEXT
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

// COMPONENTS
import Header from '../layout/Header'

const Login = () => {
    
    const navigate = useNavigate();

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {

        if (isAuthenticated) {
            navigate('/admin');
        }

        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }

    }, [error, isAuthenticated, navigate]);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log('login submitted');

        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        
        } else {
            login({
                email,
                password
            });
        }
    }

  return (


    <div className="form-container" style={{ 
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
    }}>
        <h1 style={{
            marginTop: '3rem',
        }}>
            Account Login
        </h1>

        <form onSubmit={ onSubmit } style={{
            backgroundColor: 'white',
            padding: '3rem',
            // paddingBottom: '1.5rem',
            marginTop: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRadius: '15px',
            // alignItems: 'center',
        }}>

            <div className="form-group" style={{
                marginBottom: '1rem',
            }}>
                <label htmlFor="email">Email Address</label>
                <input 
                    type="email"
                    name='email'
                    value={ email }
                    onChange={ onChange }
                    style={{
                        // marginLeft: '1rem',
                        display: 'block',
                        width: '100%',
                        padding: '0.4rem',
                    }}
                />
            </div>

            <div className="form-group" style={{
                marginBottom: '1rem'
            }}>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    value={ password }
                    onChange={ onChange }
                    style={{
                        // marginLeft: '1rem',
                        display: 'block',
                        width: '100%',
                        padding: '0.4rem',
                        marginBottom: '1rem',
                    }}
                />
            </div>

            <input type="submit" value='Login' className='btn btn-primary btn-block' style={{ padding: '0.4rem' }} />

        </form>
    </div>

  )
}

export default Login