import React, { useState } from 'react'
import axios from 'axios';
import {API_URL} from "../ApiUrl";
import {Button, Container, TextField, Grid, Box, FormControl, InputLabel, Typography, Select} from '@material-ui/core'

const RegisterComponent = props => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('ROLE_ADMIN')
    const [returnColour, setReturnColour] = useState("green")
    const [returnMessage, setReturnMessage] = useState('')

    const handleSubmit = () => {
        axios.post(API_URL + '/admin/register', {
            login: username,
            password: password,
            roles: [{"role": role}]
        })
            .then((response) => {
                setReturnMessage(response.data)
                setReturnColour("DarkGreen")
            })
            .catch((error) => {
                console.log(error)
                setReturnMessage(error.response.data.message)
                setReturnColour("DarkRed")   
            })
    }

    return(
        <Container maxWidth="sm">
            <Grid container spacing={0} justify="center" direction="column" alignItems="stretch">

                <Grid item>
                    <h1>Stwórz nowego użytkownika</h1>
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                            id="username" 
                            fullWidth
                            inputProps={{
                                maxLength: 32
                            }}
                            onChange={e => setUsername(e.target.value)} 
                            margin="normal" 
                            helperText={`${username.length}/32`}
                            label="Nazwa użytkownika" 
                            variant="outlined" />
                </Grid>

                <Grid item xs={12}>
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
                <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel htmlFor="roleSelect">Rola</InputLabel>
                        <Select
                            native
                            value={role}
                            inputProps={{
                                id: "roleSelect"
                            }}
                            onChange={e => setRole(e.target.value)}
                            label="Rola"
                            >
                            <option aria-label="None" value="" />
                            <option value="ROLE_ADMIN">Administrator</option>
                            <option value="ROLE_WORKER">Pracownik</option>
                            <option value="ROLE_TABLE">Stolik</option>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth margin="normal">
                        <Box display="flex" justifyContent="flex-end">
                            <Button variant="contained" color="primary" type="submit" margin="normal" onClick={handleSubmit}>Stwórz</Button>
                        </Box>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6" component="h6" style={{color: returnColour}}>
                        {returnMessage}        
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default RegisterComponent