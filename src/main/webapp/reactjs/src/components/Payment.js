import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {API_URL} from '../ApiUrl';
import axios from 'axios';

import {Grid, Box, Typography, Button, Select} from '@material-ui/core'
import GlobalContext from "../context/GlobalContext";

const Payment = props => {

    const context = useContext(GlobalContext);
    const history = useHistory();

    const pay = () => {
        let data = [].concat.apply([], context.order.map(el => {
            let dishes = [];
            let {quantity, ...newDish} = el
            for(let i = 0; i < el.quantity; i++)
                dishes.push(newDish);
            return dishes;
        }));

        axios.post(API_URL + '/addOrder', {orderDishesList: data, user: {login: context.login}})
            .then(res => {
                console.log(res);
                alert("Zamówienie złożone")
                history.push('/order');
            })
            .catch(err => {
                console.error(err.response);
            })
    };

    return(
        <Grid container>
            
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                    <Typography variant="h4">
                        Płatność
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                    <Select native>
                        <option>Przelew</option>
                        <option>Karta</option>
                        <option>Blik</option>
                    </Select>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                    <Button onClick={() => pay()} variant="contained" color="primary">
                        Zapłać
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Payment;