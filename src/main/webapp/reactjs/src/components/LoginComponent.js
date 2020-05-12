import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';
import {FormControlLabel, Checkbox, Button, Container, TextField, Grid, Box, Typography, Paper} from '@material-ui/core'

const LoginComponent = props => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [invalid, setInvalid] = useState(false)

    const history = useHistory();

    const handleSubmit = () => {

        AuthenticationService
           .executeBasicAuthenticationService(username, password, rememberMe)
           .then(response=>{
                if(response.status===200){
                    history.push(`/`)
                }
                else
                    throw new Error()
           })
           .catch(error => {
               setInvalid(true)
           })
    }

    const checkPattern = (setter, value, pattern) => {
        let viableMatches = String(value).match(pattern)
        if(viableMatches !== null)
            setter(viableMatches.join(""))
        else
            setter("")
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
                        value={username}
                        inputProps={{
                            maxLength: 32
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
                            maxLength: 32
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

                {invalid && 
                    <Grid item xs={12}>
                        <Box mt={2} display="flex" justifyContent="center">
                            <Typography style={{color: "red", fontSize: "24"}} variant="outlined" >Niewłaściwe dane</Typography>
                        </Box>
                    </Grid>}

            </Grid>
        </Container>
    )
}

export default LoginComponent