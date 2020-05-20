import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Container, Button, Box, Typography } from '@material-ui/core'

const AdminDashboard = props => {

    return(
        <Container maxWidth="sm">
            <Box display="flex" justifyContent="center">
                <Grid container>
                    
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="center">
                            <Typography variant="h4">
                                Panel Administratora
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Link to="/admin/dishes/new">
                            <Button fullWidth color="primary" variant="contained">
                                Dodaj danie
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={12}>
                        <Link to={{ pathname: `/admin/dishes`, state: {view: 'admin'}}}>
                            <Button fullWidth color="primary" variant="contained">
                                Dania
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={12}>
                        <Link to="/admin/ingredients">
                            <Button fullWidth color="primary" variant="contained">
                                Składniki
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={12}>
                        <Link to="/admin/categories">
                            <Button fullWidth color="primary" variant="contained">
                                Kategorie
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={12}>
                        <Link to="/admin/allergens">
                            <Button fullWidth color="primary" variant="contained">
                                Alergeny
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={12}>
                        <Link to="/admin/register">
                            <Button fullWidth color="primary" variant="contained">
                                Dodaj nowego użytkownika
                            </Button>
                        </Link>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    )

    // return(
    //     <ul className="menuComponent">
    //         <Link to="/admin/dishes/new"><li>Dodaj</li></Link>
    //         <Link to={{ pathname: `/admin/dishes`, state: {view: 'admin'}}}><li>Usuń</li>></Link>
    //         <Link to={{ pathname: `/admin/dishes`, state: {view: 'admin'}}}><li>Edytuj</li>></Link>
    //         <Link to="/admin/order"><li>Zamówienia</li>></Link>
    //         <Link to="/admin/dailyreport"> <li>Raport dnia</li>></Link>
    //         <Link to="/logout"> <li>Raport dnia</li>></Link>
    //     </ul>
    // );
};

export default AdminDashboard;