import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Grid} from '@material-ui/core'

const HomeComponent = props => {

    return(
        <Container maxWidth="md">
            <Link to="/">
                <Grid container justify="center" direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <img className="col s12 l4 offset-l4 marginTop" src={require("../logo.svg")} width="300px" alt="Logo Bufet INDEKS"/>
                    </Grid>
                        <h1>Dotnij, aby zamówić</h1>
                    <Grid item xs={12}>

                    </Grid>
                </Grid>
            </Link>
        </Container>
    )
}

export default HomeComponent;