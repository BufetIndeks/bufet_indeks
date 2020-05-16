import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    buttonlink: {
        color: "white",
        textDecoration: "none",
        height: "100%",
        padding: "22.5px",
        '&:hover': {
            background: "forestgreen"
        }
    }
}))

const MenuComponent = props => {

    //const role = props.role;
    //const isLoggedIn = props.isLoggedIn;

    const classes = useStyles();

    return (

        <header>
            <AppBar position="static" style={{background: "green"}}>
                <Toolbar>
                    <Link to="/" className={classes.buttonlink}>Home</Link>
                    <Link to="/login" className={classes.buttonlink}>Zaloguj</Link>
                    <Link to="/logout" className={classes.buttonlink}>Logout</Link>
                    <Link to="/admin/dashboard" className={classes.buttonlink}>Dashboard</Link>
                </Toolbar>
            </AppBar>
        </header>
    )
    
}

export default withRouter(MenuComponent)