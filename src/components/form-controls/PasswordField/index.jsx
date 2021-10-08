import React, { useState } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormHelperText } from "@mui/material";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;

  const {
    formState: { errors },
  } = form;

  const hasError = errors[name];

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <div>
      <FormControl
        error={!!hasError}
        fullWidth
        margin="normal"
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ field }) => (
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              name={name}
              disabled={disabled}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label={label}
              {...field}
            />
          )}
        />
        <FormHelperText id="outlined-weight-helper-text">{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default PasswordField;
