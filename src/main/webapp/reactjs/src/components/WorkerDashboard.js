import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import axios from 'axios';
import { API_URL } from '../ApiUrl';

const WorkerDashboard = props => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setInterval(checkOrders, 5000);
    }, [])

    const checkOrders = () => {
        axios.get(API_URL + "/getOrders")
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error(error.response);
            })
    }

    return(
        <Grid container>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                    <Typography variant="h4">
                        Zamówienia
                    </Typography>
                </Box>
            </Grid>

            {orders.map(order => {
                return(
                    <Grid item xs={12}>
                        <Typography>{JSON.stringify(order)}</Typography>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default WorkerDashboard;