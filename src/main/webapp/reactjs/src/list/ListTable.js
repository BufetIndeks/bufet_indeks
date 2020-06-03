import React, { useState } from 'react';

import {TableContainer, TableHead, TableCell, TableBody, TableRow, Table, TextField, IconButton, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const ListTable = ({headers, data, isAdding, onAdd, onEdit, onDelete, onSearch}) => {

    const [search, setSearch] = useState('');
    const classes = useStyles();

    return(
        <>
            <Fab onClick={() => onAdd()} className={classes.fabNew} style={{background: isAdding ? "red" : "green"}}>
                {isAdding ? <CloseIcon/> : <AddIcon />}
            </Fab>

        <TableContainer>
                <TextField variant='outlined' placeholder='Szukaj' margin='normal' value={search} onChange={e => {
                    setSearch(e.target.value);
                    onSearch(e.target.value);
                }}/>
                
                <Table size="small">
                    
                    <TableHead>
                        <TableRow>
                            {headers !== undefined && 
                            headers.map( header => (
                                <TableCell style={{fontWeight: "bold"}} key={header}>{header}</TableCell>
                            ))}
                            <TableCell style={{fontWeight: "bold"}} key={"actions"}>Operacje</TableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {data[0] !== undefined && data.map( (element, index) => (
                            <TableRow key={"cell" + index}>
                                {Object.values(element).map( (content, index) => {
                                    if(content !== element.id)
                                        return(
                                            <TableCell key={content + index}>{content}</TableCell>
                                )})}
                                <TableCell key={"actions" + index}>
                                    <IconButton onClick={() => onEdit(element)} size="small" color="primary"><EditIcon /></IconButton>
                                    <IconButton onClick={() => onDelete(element)} size="small" color="secondary"><DeleteIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
                                            </>
    )
}

const useStyles = makeStyles({
    fabNew: {
        background: "green", 
        color: "white", 
        position: "fixed", 
        margin: 0, 
        top: 'auto', 
        right: 20,
        bottom: 20, 
        left: "auto",
        zIndex: 2
    }
})

export default ListTable;