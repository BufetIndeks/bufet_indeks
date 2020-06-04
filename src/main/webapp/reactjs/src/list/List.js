import React from 'react';
import { Container, Box } from '@material-ui/core';

const List = ({onEdit, onDelete, form, headers}) => {

    return(
        <Container>
            <Box display={formOn ? "flex" : "none"}>
                {form}
            </Box>

            <TableContainer>
                <TextField value={search}  variant='outlined' placeholder='Szukaj' margin='normal' onChange={e => searching(e)}/>
                
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
                        {flattenedData[0] !== undefined && flattenedData.map( (element, index) => (
                            <TableRow key={"cell" + index}>
                                {Object.values(element).map( (content, index) => {
                                    if(content !== element.id)
                                        return(
                                            <TableCell key={content}>{content}</TableCell>
                                )})}
                                <TableCell key={"actions" + index}>
                                    <IconButton onClick={() => openEdit(element)} size="small" color="primary"><EditIcon /></IconButton>
                                    <IconButton onClick={() => handleDelete(element.name, index)} size="small" color="secondary"><DeleteIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    )
}

export default List;