import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

Register.propTypes = {

};

function Register(props) {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        values.username = values.email;
        try {
            //create account
            const action = register(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction); //errors
            //close dialog
            const { closeDialog } = props;

            if (closeDialog) {
                closeDialog();
            }

            //make alert
            enqueueSnackbar('Register successfully!!!', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
            console.log('error:', error);
        }
    }


    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;