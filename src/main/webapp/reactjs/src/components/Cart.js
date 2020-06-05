import React, {useState, useContext} from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';

import CartItem from '../items/CartItem'
import GlobalContext from '../context/GlobalContext';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import { API_URL } from '../ApiUrl';

const Cart = props => {

    const [items, setItems] = useState([])
    const context = useContext(GlobalContext)
    const history = useHistory()

    const goTo = url => {
        history.push(url)
    }

    const payment = () => {
        history.push('/cart/pay');
    }

    return(
        <Grid container>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                    <Typography variant="h3">
                        Zamówienie
                    </Typography>
                </Box>
            </Grid>

                <Box display="flex" justifyContent="flex-end">
                    <Typography variant="h5">
                        {context.order.length > 0 && `Łączna kwota: ${context.order.reduce((total, current) => total + current.price * current.quantity, 0).toFixed(2)} PLN`}
                    </Typography>
                </Box>

            <Grid item xs={12}>
                <Box display="flex" justifyContent="space-between">
                    <Button onClick={() => goTo('/menu')} variant="contained" color="primary">
                        Wróć do menu
                    </Button>   

                    <Button onClick={() => payment()} variant="contained" color="primary" disabled={context.order.length > 0 ? false : true}>
                        Zapłać
                    </Button>
                </Box>
            </Grid>

            {context.order.map(el => 
                <CartItem dish={el} addItem={context.addDishToOrder} removeItem={context.removeDishFromOrder} key={el.dishName} />
            )}
        </Grid>
    )
}

export default Cart