import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, GridListTile, GridList, Container, Button, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    btn: {
      width: '100%',
      height: '100%',
    },
    
  }));

const AdminDashboard = props => {
    const classes = useStyles();
    return(
        <Container maxWidth="sm">
            <Box display="flex" justifyContent="center" style={{marginTop: "30px", marginBottom: "50px"}}>
                <Typography variant="h4">
                    Panel Administratora
                </Typography>
            </Box>
                    
            <GridList cellHeight={160} cols={3}>
                <GridListTile  >
                <Link to="/admin/dishes/new">
                    <Button className={classes.btn} color="primary" variant="contained"> 
                        DODAJ DANIE
                    </Button>
                </Link>
                </GridListTile>
                <GridListTile  >
                <Link to={{ pathname: `/admin/dishes`, state: {view: 'admin'}}}>
                    <Button className={classes.btn} color="primary" variant="contained"> 
                        DANIA
                    </Button>
                </Link>
                </GridListTile>
                <GridListTile  >
                <Link to="/admin/ingredients">
                    <Button className={classes.btn} color="primary" variant="contained"> 
                        SKŁADNIKI
                    </Button>
                </Link>
                </GridListTile>
                <GridListTile  >
                <Link to="/admin/categories">
                    <Button className={classes.btn} color="primary" variant="contained"> 
                        KATEGORIE
                    </Button>
                </Link>
                </GridListTile>
                <GridListTile  >
                <Link to="/admin/allergens">
                    <Button className={classes.btn} color="primary" variant="contained"> 
                        ALERGENY
                    </Button>
                </Link>
                </GridListTile>
                <GridListTile  >
                <Link to="/admin/register">
                    <Button className={classes.btn} color="primary" variant="contained"> 
                        DODAJ NOWEGO UŻYTKOWNIKA
                    </Button>
                </Link>
                </GridListTile>
            </GridList>

            
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