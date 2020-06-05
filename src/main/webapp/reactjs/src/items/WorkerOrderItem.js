import React, { useState } from 'react';
import { Grid, Box, Typography, IconButton } from '@material-ui/core';

import OrderInfo from '../components/OrderInfo';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const WorkerOrderItem = ({order, goLeft, goRight}) => {

    const [open, setOpen] = useState(false);

    return(
        <Grid item xs={12}>
            <Box onClick={() => setOpen(!open)} display="flex" alignItems="center" justifyContent="space-around" style={{width: "100%", border: "2px solid green", padding: "10px 0"}} className="marginBottom marginTop">

                <Box className="marginLeft marginRight">
                    <Typography>
                        Nr: {order.id}
                    </Typography>
                </Box>

                <Box flexGrow={1}>
                    <Typography>
                        Klient: {order.login}
                    </Typography>
                </Box>

                <Box className="marginLeft marginRight">
                    <Typography>
                        Cena: {order.dishList.reduce((total, curr) => total + curr.price, 0).toFixed(2)} PLN
                    </Typography>
                </Box>

                <Box>
                    <IconButton onClick={() => goLeft(order.id, order.status)} disabled={order.status === "Oczekujące"}>
                        <ArrowBackIcon />
                    </IconButton>
                </Box>

                <Box>
                    <IconButton onClick={() => goRight(order.id, order.status)} disabled={order.status === "Zakończone"}>
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>

            </Box>

            {open &&
                <OrderInfo orderId={order.id} />
            }


        </Grid>
    )

}

export default WorkerOrderItem;