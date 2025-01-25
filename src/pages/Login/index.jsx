import { Box, Button, IconButton, InputAdornment, Link, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from '@images/logo.png';
import './login.scss';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    showPassword_confirm: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box className="login_container">
      <img src={logo} alt="logo" className="login_logo"/>
      <Typography className="login_title">Iniciar sesión</Typography>   
      <Typography className="login_text">Por favor, ingresa tus credenciales</Typography>
      <Box
        className="login_form"
        component="form"
        autoComplete="off"
        noValidate
      >
        <Stack alignItems="center" spacing={2} className="login_stack">
          <TextField className="InputBasic"
            required
            id="email" 
            type='email'
            label="Cedula, pasaporte o email" 
            size="small"
            name="email"
            value={email}
            //onChange={(e) => setEmail(e.target.value)} 
            autoComplete='on'
            >
          </TextField>
          <TextField className="InputBasic"
            required
            size='small'
            name="password"   
            label="Contraseña"            
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    tabIndex={-1}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            />
        </Stack>
      </Box>
      <Typography className="login_version">Versión 1.0.0</Typography>
      <Box>
        <Button variant="contained" className="ButtonBasic">Iniciar sesión</Button>
      </Box> 
      <Typography>
        ¿Olvidaste tu contraseña? 
        <Link href="#">Recuperala</Link>
      </Typography>
    </Box>
  )
}
export default Login;