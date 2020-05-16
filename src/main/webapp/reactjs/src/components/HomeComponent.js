import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    link: {
        color: "green",
        fontFamily: "Roboto",
        textAlign: 'center'
    },
    mt: {
        marginTop: "10px"
    }
})


const HomeComponent = props => {

    const classes = useStyles();

    return(
        <Container maxWidth="md">
            <Link to="/menu">
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={12}>
                            <img className="col s12 l4 offset-l4 marginTop" src={require("../logo.svg")} width="300px" alt="Logo Bufet INDEKS"/>
                        </Grid>
                        
                        <Grid item xs={12} className={classes.mt}>
                            <Typography variant="h3" component="h3" className={classes.link}>
                                Dotnij, aby zamówić
                            </Typography>
                        </Grid>
                    </Grid>
            </Link>
        </Container>
    )
}

export default HomeComponent;