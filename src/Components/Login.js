import React from 'react';
import { TextField, Button, Box, } from '@mui/material';
import "../Styles/Login.css";

function Login() {
    return (
        <Box className='box' sx={{
            backgroundColor: '#ff80ff',
            width: 450,
            height: 520,
            borderRadius: 25
        }}>
            <h1 className="h1">Login 😉</h1>
            <div className='box-contents'>
                <br /><br /><br /><br />
                <form>
                    <TextField label="Username" /> <br /><br />
                    <TextField type="password" label="Password" /> <br /><br />
                    <Button type="submit" variant="contained" >LOGIN</Button> <br /><br />
                </form>
            </div>
        </Box>
    )
}

export default Login; 