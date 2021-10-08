import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import { useDispatch } from 'react-redux';
import { login } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

Login.propTypes = {

};

function Login(props) {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        values.username = values.email;
        try {
            //create account
            const action = login(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction); //errors
            //close dialog
            const { closeDialog } = props;

            if (closeDialog) {
                closeDialog();
            }

            //make alert
            enqueueSnackbar('Login successfully!!!', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
            console.log('error:', error);
        }
    }


    return (
        <LoginForm onSubmit={handleSubmit} />
    );
}

export default Login;