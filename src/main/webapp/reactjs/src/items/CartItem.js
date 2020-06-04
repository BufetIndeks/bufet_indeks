import React from 'react';

import {Grid, Box, Card, IconButton, Typography} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import CloseIcon from '@material-ui/icons/Close'

const CartItem = ({dish, addItem, removeItem}) => {
    return(
        <Grid item xs={12}>
            <Box className="marginTop" style={{border: "1px solid green"}} display="flex" justifyContent="space-around" alignItems="center">
                <Card className="marginRight">
                    <img height={"75px"} width={"75px"} src={dish.dishImage ? 'data:image/jpeg;base64,' + dish.dishImage : `https://dummyimage.com/300x150/ffffff/32750e&text=${dish.dishName}`} />
                </Card>
                
                <Box flexGrow={2}><h2>{dish.dishName}</h2></Box>
                
                <Box flexGrow={1} className="marginLeft marginRight">
                    <Typography variant="h6">{`${dish.price * dish.quantity} PLN`}</Typography>
                </Box>

                <Box>
                    <IconButton onClick={() => addItem(dish)} size="small" style={{background: "green", color: "white"}}><AddIcon /></IconButton>
                </Box>
                
                <Box className="marginLeft marginRight"><Typography variant="h5">{dish.quantity}</Typography></Box>
                
                <Box className="marginRight">
                    <IconButton onClick={() => removeItem(dish.id)} size="small" style={{background: "red", color: "white"}}>
                        {dish.quantity > 1 ? <RemoveIcon /> : <CloseIcon /> }
                    </IconButton>
                </Box>

            </Box>
        </Grid>
    )
}

export default CartItem;