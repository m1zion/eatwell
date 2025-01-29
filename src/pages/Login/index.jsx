import { Box, Button, IconButton, InputAdornment, Link, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from '@images/logo.png';
import './login.scss';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null); // Estado para almacenar el token
  const [user, setUser] = useState(null); // Estado para almacenar el token
  //const {setLogin} = useContext(AppContext);
  //const setDataLogin = item =>{setLogin(item);};
  const [message, setMessage] = useState(''); 
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    showPassword_confirm: false,
  });


  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/Dashboard/');
    /*try {
      const response = await fetch(`${baseURL}auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }
      const data = await response.json();
      const { token, user} = data; 
      // Guardar el token en el estado
      setToken(token);
      setUser(user.correo);
      const  dataLogin = {
        token: token,
        user: user.correo,
        userId: user.id,
        proveedorId: user.proveedorId,
        role: user.role
      }
      localStorage.setItem('authToken', token);
      localStorage.setItem('authUser', user.correo);
      localStorage.setItem('roleL', user.role);
      localStorage.setItem('proveedorIdL', user.proveedorId);
      localStorage.setItem('userIdL', user.id);
      //setDataLogin(dataLogin);  //Contexto
      navigate('/Dashboard/');
      setMessage('¡Has iniciado sesión exitosamente!');
    } catch (error) {
      setMessage('Error al iniciar sesión. Verifica tus credenciales.');
      console.error('Error en el login:', error);
    }*/
  }


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
    <Box className="main_container">
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
        <Box className="button_container">
          <Button variant="contained" className="ButtonBasic" onClick={handleSubmit}>Iniciar sesión</Button>
        </Box> 
        <Typography>
          ¿Olvidaste tu contraseña? 
          <Link href="#">Recuperala</Link>
        </Typography>
      </Box>
    </Box>
    
  )
}
export default Login;