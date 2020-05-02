import React, { useState } from 'react'
import AuthenticationService from '../service/AuthenticationService';

import {FormControlLabel, Checkbox, Button, Container, TextField, Grid, Box} from '@material-ui/core'

const LoginComponent = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [loginFail, setLoginFail] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)


    const handleSubmit = () => {
       AuthenticationService
           .executeBasicAuthenticationService(username, password, rememberMe)
           .then(response=>{
                if(response.status===200)
                    this.props.history.push(`/`)
                else
                    this.props.history.push(`/login`)
           })
    }

    return (
        <Container maxWidth="sm">
            <Grid container spacing={0} justify="center" direction="column" alignItems="stretch">
                <Grid item>
                    <h1>Panel logowania</h1>
                </Grid>
                <Grid item xs={12} >
                    <TextField 
                        id="username" 
                        fullWidth
                        inputProps={{
                            maxlength: 32
                          }}
                        onChange={e => setUsername(e.target.value)} 
                        margin="normal" 
                        helperText={`${username.length}/32`}
                        label="Nazwa użytkownika" 
                        variant="outlined" />
                </Grid>
                <Grid item xs={12} >
                    <TextField 
                        id="password" 
                        fullWidth
                        type="password"
                        onChange={e => setPassword(e.target.value)} 
                        margin="normal" 
                        label="Hasło" 
                        inputProps={{
                            maxlength: 32
                          }}
                        helperText={`${password.length}/32`}
                        variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel label = "Zapamiętaj mnie na tym komputerze"
                        control = {
                            <Checkbox 
                                checked={rememberMe} 
                                color="primary"
                                onChange={event => setRememberMe(event.target.checked)} 
                                margin="normal" 
                                name="rememberMe" />
                    }/>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end">
                        <Button variant="contained" color="primary" type="submit" margin="normal" onClick={handleSubmit}>Zaloguj się</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        // <div className=" col s10 offset-s1 l4 offset-l4">
        //     <div className="red-text accent-2"><h1>Login</h1></div>

        //     {loginFail && <div className="alert alert-warning">Invalid Credentials</div>}
        //     {successMessage && <div>Login Sucessful</div>}
            
        //     <div className="input-field">
        //         <input className="validate" name="username" type="text" id="username" value={username} onChange={event => setUsername(event.target.value)}/>
        //         <label htmlFor="username">Username</label>
        //     </div>
            
        //     <div className="input-field">
        //         <label htmlFor="password">Password</label>
        //         <input name="password" type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} />
        //     </div>
           
        //    <div>
        //         <FormControlLabel
        //             label = "Zapamiętaj mnie na tym komputerze"
        //             control = {
        //                 <Checkbox checked={remember} onChange={event => setRemember(event.target.checked)} name="rememberMe" />
        //             }
        //          />
        //     </div>

        //     <button className="btn blue right" onClick={loginClicked}>Zaloguj się</button>
        // </div>
    )
}

export default LoginComponent