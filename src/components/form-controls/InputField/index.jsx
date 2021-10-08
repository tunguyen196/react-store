import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { formState: { errors } } = form;
    const hasError = errors[name];

    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) => (
                <TextField
                    margin="normal"
                    variant="outlined"
                    label={label}
                    disabled={disabled}
                    fullWidth
                    error={!!hasError}
                    helperText={errors[name]?.message}
                    {...field}
                />
            )}
        />
    );
}

export default InputField;