import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { API_URL } from '../ApiUrl';

import GlobalContext from '../context/GlobalContext';
import OrderInfo from './OrderInfo';

import { Grid, Box, Typography } from '@material-ui/core';

const ClientOrders = props => {

    const [orders, setOrders] = useState([]);
    const [openedOrders, setOpenedOrders] = useState([]);
    const context = useContext(GlobalContext);

    useEffect(() => {
        getOrders();
    }, [context.login])

    useEffect(() => {
        let array = []
        orders.forEach(() => array.push(false))
        setOpenedOrders(array);
    }, [orders])

    const getOrders = (logd) => {
        axios.get(API_URL + '/getOrders')
        .then(response => {
            let login = context.login;
            console.log("GETTING", context)
            setOrders(response.data.filter(order => order.login === login && order.status !== "Zrealizowane"))
        })
        .catch(error => {
            console.error(error.response.data.message);
        })
    }

    const openCloseOrder = orderIndex => {
        let array = openedOrders.slice();
        array[orderIndex] = !array[orderIndex];
        console.log(openedOrders, array, orderIndex);
        setOpenedOrders(array);
    }

    return(
        <Grid container>

            <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                    <Typography variant="h4">
                        Złożone zamówienia
                    </Typography>
                </Box>
            </Grid>

            {orders.map((order, index) => {
                return(
                    <Grid key={order.id} item xs={12}>
                        <Box onClick={() => openCloseOrder(index)} display="flex" justifyContent="space-around" style={{width: "100%", border: "2px solid green", padding: "10px 0"}} className="marginBottom marginTop">
                            <Box className="marginLeft marginRight">
                                <Typography>
                                    Nr: {order.id}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography>
                                    Status: {order.status}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography>
                                   {order.dishList.reduce((total, curr) => ' ' + total + curr.dishName + ',', []).slice(0, 30) + '...'}
                                </Typography>
                            </Box>

                            <Box className="marginRight">
                                <Typography>
                                    Cena: {order.dishList.reduce((total, curr) => total + curr.price, 0)} PLN 
                                </Typography>
                            </Box>
                        </Box>

                        {openedOrders[index] &&
                            <OrderInfo orderId={order.id} />
                        }
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ClientOrders;