import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import WorkerOrderItem from '../items/WorkerOrderItem';

import axios from 'axios';
import { API_URL } from '../ApiUrl';

const WorkerDashboard = props => {

    const [orders, setOrders] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [displayedOrders, setDisplayedOrders] = useState([]);
    const [tab, setTab] = useState('');

    useEffect(() => {
        getStatuses();
        getOrders();
        const interval = setInterval(getOrders, 5000);
        return () => {
            clearInterval(interval);
        }
    }, [])

    useEffect(() => {
        if(tab === '' && orders.length !== 0)
            changeTab("Oczekujące");
    }, [orders])

    const getStatuses = () => {
        axios.get(API_URL + "/worker/getStatuses")
            .then(response => {
                console.log(response.data)
                setStatuses(response.data);
            })
            .catch(error => {
                console.error(error.response);
            })
    }

    const getOrders = () => {
        axios.get(API_URL + "/getOrders")
            .then(response => {
                setOrders(response.data)
            })
            .catch(error => {
                console.error(error.response);
            })
    }

    const changeTab = status => {
        let data = orders.filter(order => {
            if(order.status === status)
                return order
        })
        setDisplayedOrders(data)
        setTab(status);
        console.log('TAB', orders)
    }

    const changeOrderStatusBack = (orderId, status) => {
        let newStatus = {};
        for(let i = 0; i < statuses.length; i++){
            if(statuses[i].status === status)
                newStatus = statuses[i-1];
        }
        if(newStatus === {})
            return;

        axios.post(API_URL + `/worker/changeStatus/${orderId}`, newStatus)
            .then(response => {

            })
            .catch(error => {
                console.error(error.response);
            })
    }

    const changeOrderStatusForward = (orderId, status) => {
        let newStatus = {};
        for(let i = 0; i < statuses.length; i++){
            if(statuses[i].status === status)
                newStatus = statuses[i+1];
        }
        if(newStatus === {})
            return;

            console.log(`/worker/changeStatus/${orderId}`, newStatus)
        axios.post(API_URL + `/worker/changeStatus/${orderId}`, newStatus)
            .then(response => {
                console.log(response)
                getOrders();
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

            <Grid item xs={12}>
                <Box display="flex" justifyContent="space-around">
                    <Box>
                        <Button onClick={() => changeTab("Oczekujące")}>Oczekujące</Button>
                    </Box>
                    <Box>
                        <Button onClick={() => changeTab("Realizowane")}>Realizowane</Button>
                    </Box>
                    <Box>
                        <Button onClick={() => changeTab("Gotowe")}>Gotowe</Button>
                    </Box>
                    <Box>
                        <Button onClick={() => changeTab("Zakończone")}>Zakończone</Button>
                    </Box>
                </Box>
                <hr />
            </Grid>

            {displayedOrders.map(order => {
                return(
                    <WorkerOrderItem key={order.id} order={order} goLeft={changeOrderStatusBack} goRight={changeOrderStatusForward}/>
                )
            })}
        </Grid>
    )
}

export default WorkerDashboard;