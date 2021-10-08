import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from 'components/form-controls/InputField';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object({
        title: yup.string().required('Nhập title'),
    }).required();

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        onSubmit(values);
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="todo" form={form} disabled={false} />
        </form>
    );
}

export default TodoForm;