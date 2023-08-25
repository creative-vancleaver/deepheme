import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import setAuthToken from '../../utils/setAuthToken';

import AuthContext from './authContext';
import authReducer from './authReducer';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
} from  '../types';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: null,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // LOAD USER

    const loadUser = async () => {

        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        // setAuthToken(localStorage.token);

        try {

            const res = await axios.get('/auth');

            dispatch({
                type: USER_LOADED,
                payload: res.data
            });

            console.log('loadUser ', res.data);

        } catch (err) {

            dispatch({
                type: AUTH_ERROR
            });

        }
    };

    // REGISTER USER

    // const register = async fromData => {

    //     const config = {
    //         headers: {
    //             'Content-type': 'application/json'
    //         }
    //     }

    //     try {

    //         const res = await axios.post('/users', formData, config);

    //         dispatch({
    //             type: REGISTER_SUCCESS,
    //             payload: res.data
    //         });

    //         loadUser();

    //     } catch (err) {

    //         dispatch({
    //             type: REGISTER_FAIL,
    //             payload: err.response.data.msg
    //         });
    //     }
    // }

    // LOGIN USER

    const login = async formData => {

        console.log('form data ', formData);

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        try {

            const res = await axios.post('/auth', formData, config);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

            localStorage.setItem('token', res.data.token);

            loadUser();
            console.log('user loaded ', loadUser());

        } catch (err) {

            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg
            });
        }
    }

    // LOGOUT USER

    const logout = () => dispatch({ type: LOGOUT });

    // CLEAR ERRORS

    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                loadUser,
                login,
                logout,
                clearErrors
            }}
        >
            { props.children }
        </AuthContext.Provider>
    )

}

export default AuthState;