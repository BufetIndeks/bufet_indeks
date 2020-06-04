import React, { useState, useEffect } from 'react';

import { Box, TextField, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import DoneIcon from '@material-ui/icons/Done'

const CategoryForm = ({value, mode, submit}) => {

    const [name, setName] = useState(value);
    const classes = useStyles();

    useEffect(() => {
        setName(value);
    }, [value])

    const checkPattern = (setter, value, pattern) => {
        let viableMatches = String(value).match(pattern)
        if(viableMatches !== null)
            setter(viableMatches.join(""))
        else
            setter("")
    }

    return(
        <>
            <Fab variant="round" className={classes.fabAdd} style={{background: mode === "update" ? "blue" : "green"}} onClick={() => submit(name)}>
                <DoneIcon />
            </Fab>

            <Box className={classes.newEntry}>
                <TextField 
                    fullWidth 
                    value={name} 
                    variant="outlined" 
                    size="medium" 
                    onChange={ e => checkPattern(setName, e.target.value, /[\p{L} \s]/gu)}
                />
            </Box>
        </>
    )
}

const useStyles = makeStyles({
    fabAdd: {
        background: "green", 
        color: "white", 
        position: "fixed", 
        margin: 0, 
        top: 'auto', 
        right: 20,
        bottom: 100, 
        left: "auto",
        zIndex: 2

    },
    newEntry: {
        position: "fixed",
        width: "70%",
        margin: 0, 
        top: 'auto', 
        left: 'auto',
        bottom: 0, 
        padding: '0 15px 15px 15px',
        right: 'auto',
        background: "white",
        zIndex: 1
    }
})

export default CategoryForm;