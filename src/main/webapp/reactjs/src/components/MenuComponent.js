import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticatedRoute from "./AuthenticatedRoute";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
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

    const role = props.role;
    const isLoggedIn = props.isLoggedIn;

    const classes = useStyles();

    return (

        <header>
            <AppBar position="static" style={{background: "green"}}>
                <Toolbar>
                    <Link to="/" className={classes.buttonlink}>Home</Link>
                    <Link to="/login" className={classes.buttonlink}>Zaloguj</Link>
                    <Link to="/admin/register" className={classes.buttonlink}>Rejestracja</Link>
                    <Link to="/logout" className={classes.buttonlink}>Logout</Link>
                    <Link to={{pathname: "/list", state: { view: 'client'}}} className={classes.buttonlink}>Lista dań</Link>
                    <Link to="/admin/dashboard" className={classes.buttonlink}>Dashboard</Link>
                    <Link to="/allergens" className={classes.buttonlink}>Składniki</Link>
                </Toolbar>
            </AppBar>
        </header>

        // <header>
        //     <nav className="green lighten-1">
        //         <ul>
        //             <Link className="nav-link" to="/">Home</Link>
        //             <Link className="nav-link" to="/login">Zaloguj</Link>
        //             <Link className="nav-link" to="/admin/register">Rejestracja</Link>
        //             <Link className="nav-link" to="/logout" >Logout</Link>
        //             <Link className="nav-link" to={{pathname: "/list", state: { view: 'client'}}}>Lista dań</Link>
        //             <Link className="nav-link" to="/admin/dashboard">Dashboard</Link>
        //             <Link className="nav-link" to="/allergens">Składniki</Link>
        //         </ul>
        //     </nav>
        // </header>
    )
    
}

export default withRouter(MenuComponent)