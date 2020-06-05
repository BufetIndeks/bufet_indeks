import React, { useState, useEffect } from 'react';

import { Box, TextField, Fab, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close';

const CategoryForm = ({value, mode, submit}) => {

    const [name, setName] = useState(value[1]);
    const [image, setImage] = useState(value[0]);
    const classes = useStyles();

    useEffect(() => {
        setName(value[1]);
        setImage(value[0]);
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
            <Fab variant="round" className={classes.fabAdd} style={{background: mode === "update" ? "blue" : "green"}} onClick={() => submit([name, image])}>
                <DoneIcon />
            </Fab>


            <Box className={classes.newEntry}>

                <Box display="flex" justifyContent="center">
                    <img height={"100px"} src={image ? 'data:image/jpeg;base64,' + image : null} />
                </Box>

                <Box className="marginTop" style={{width: "80%"}} display="flex" justifyContent="flex-end">
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                onChange={e => {
                                    var reader = new FileReader();
                                    reader.onloadend = function() {
                                        setImage(reader.result.substring(reader.result.indexOf(',') + 1))
                                    }
                                    reader.readAsDataURL(e.target.files[0])
                                    }}
                                type="file"
                            />
                            {image !== null && 
                                <IconButton color="secondary" className="marginRight" size="small" onClick={e => {
                                    const file = document.getElementById('raised-button-file');
                                    file.value = '';
                                    setImage(null)}}>
                                    <CloseIcon />
                                </IconButton>}
                            <label htmlFor="raised-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    Zdjęcie
                                </Button>
                            </label> 
                        </Box>
                        <Box display="flex" justifyContent="center" style={{width: "80%", marginLeft: "10%"}}>
                        <TextField 
                            fullWidth 
                            value={name} 
                            variant="outlined" 
                            size="medium" 
                            onChange={ e => checkPattern(setName, e.target.value, /[\p{L} \s]/gu)}
                            />
                        </Box>
               
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
        width: "100%",
        margin: 0, 
        top: 'auto', 
        left: 'auto',
        bottom: 0, 
        padding: '0 15px 15px 15px',
        right: 'auto',
        background: "white",
        zIndex: 1
    },
    newImage: {
        position: "fixed",
        width: "70%",
        margin: 0, 
        top: 'auto', 
        left: 'auto',
        bottom: "20px", 
        padding: '0 15px 15px 15px',
        right: 'auto',
        background: "white",
        zIndex: 1
    }
})

export default CategoryForm;