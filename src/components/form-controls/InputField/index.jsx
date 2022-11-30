import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disable: PropTypes.bool,
};

function InputField(props) {
    const {form, name, label, disable} = props;

    return (
        <Controller
            name={name}
            control={form.control}
            render={({
                field: {onChange, onBlur, value, name}, fieldState:{ invalid, error}
            }) => (
                <TextField
                fullWidth
                label={label}
                error={invalid}
                helperText="Loi roi"
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                value={value}
                disabled={disable}
                 />
            )}
            >
        </Controller>
    );
}

export default InputField;