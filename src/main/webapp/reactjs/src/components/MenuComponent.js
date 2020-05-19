import React, {useState, useEffect} from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PersonIcon from '@material-ui/icons/Person'
import { Box, Typography, IconButton } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    buttonlink: {
        color: "white",
        textDecoration: "none",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "64px",
        minWidth: "90px",
        '&:hover': {
            background: "forestgreen"
        },
        '& a': {
            color: "white"
        }
    }
}))

const MenuComponent = props => {

    const classes = useStyles();


    return (
            <AppBar position="sticky" style={{background: "green"}}>
                <Toolbar>

                    <Link to="/" className={classes.buttonlink}>
                        Home
                    </Link>

                    <Link to="/admin/dashboard" className={classes.buttonlink}>
                        PA
                    </Link>

                    <Box flexGrow={1}></Box>

                    <Link to={props.role !== 'ROLE_GUEST' ? '/logout' : '/login'} className={classes.buttonlink}>
                        {props.role !== 'ROLE_GUEST' ? <ExitToAppIcon /> : <PersonIcon /> }
                    </Link>
                            
                    
                </Toolbar>
            </AppBar>
    )
    
}

export default MenuComponent