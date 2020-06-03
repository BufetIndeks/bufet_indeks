import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Typography, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    link: {
        color: "green",
        fontFamily: "Roboto",
        textAlign: 'center'
    },
    mt: {
        marginTop: "10px"
    },
    bottomPanel: {
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        left: "0",
        bottom: "10px",
        width: "100%"
    }
})


const HomeComponent = props => {

    const classes = useStyles();

    return(
        <Container maxWidth="md">
                    <Grid container direction="column" alignItems="center">
                        <Link to="/menu">
                            <Grid item xs={12}>
                                <img className="col s12 l4 offset-l4 marginTop" src={require("../logo.svg")} width="300px" alt="Logo Bufet INDEKS"/>
                            </Grid>
                            
                            <Grid item xs={12} className={classes.mt}>
                                <Typography variant="h3" component="h3" className={classes.link}>
                                    Dotnij, aby zamówić
                                </Typography>
                            </Grid>
                        </Link>

                            
                    </Grid>
                    <Box className={classes.bottomPanel}>
                                <Link to="/about">
                                    <Button className={classes.link}>
                                        O nas
                                    </Button>
                                </Link>

                                <Link to="/regulations">
                                    <Button className={classes.link}>
                                        Regulamin
                                    </Button>
                                </Link>
                            </Box>
        </Container>
    )
}

export default HomeComponent;