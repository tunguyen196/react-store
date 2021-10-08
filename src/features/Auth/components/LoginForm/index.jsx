import React from 'react';
import PropTypes from 'prop-types';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from 'components/form-controls/InputField';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import PasswordField from 'components/form-controls/PasswordField';
import LinearProgress from '@mui/material/LinearProgress';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {

    const schema = yup.object({
        identifier: yup.string().required('Fullname must be required').email(),
        password: yup.string().required('Fullname must be required').min(6, "please enter at least 6 character"),

    }).required();

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;

        if (onSubmit) {
            await onSubmit(values);
        }
    }

    const { isSubmitting } = useFormState({
        control: form.control
    });

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                {isSubmitting && (
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                )}

                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form onSubmit={form.handleSubmit(handleSubmit)} >
                    <InputField name="identifier" label="Email" form={form} disabled={false} />

                    <PasswordField name="password" label="Password" form={form} disabled={false} />

                    <Button disabled={isSubmitting}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                </form>

            </Box>
        </div>

    );
}

export default LoginForm;