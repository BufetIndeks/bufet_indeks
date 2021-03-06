import React, {useState, useEffect, useContext} from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PersonIcon from '@material-ui/icons/Person'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import HomeIcon from '@material-ui/icons/Home'
import BookmarksIcon from '@material-ui/icons/Bookmarks'

import { Box, Typography, IconButton } from '@material-ui/core';
import GlobalContext from '../context/GlobalContext';

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
    const context = useContext(GlobalContext);

    return (
            <AppBar position="sticky" style={{background: "green"}}>
                <Toolbar>

                    <Link to="/" className={classes.buttonlink}>
                        <HomeIcon />
                    </Link>

                    <Box flexGrow={1}></Box>

                    {context.role === "ROLE_TABLE"  && 
                        <>
                            <Link to="/cart" className={classes.buttonlink}>
                                <ShoppingBasketIcon />
                            </Link>

                            <Link to="/order" className={classes.buttonlink}>
                                <BookmarksIcon />
                            </Link>
                        </>
                    }

                    <Link to={context.role !== 'ROLE_GUEST' ? '/logout' : '/login'} className={classes.buttonlink}>
                        {context.role !== 'ROLE_GUEST' ? <ExitToAppIcon /> : <PersonIcon /> }
                    </Link>
                            
                    
                </Toolbar>
            </AppBar>
    )
    
}

export default MenuComponent