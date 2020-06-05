import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Grid, Box, Typography } from '@material-ui/core';
import { API_URL } from '../ApiUrl';

const OrderInfo = ({orderId}) => {

    const [order, setOrder] = useState({dishList: []});

    useEffect(() => {
        axios.get(API_URL + `/getOrder/${orderId}`)
            .then(response => {
                setOrder(response.data);
                console.log("RESPONSE", response)
            })
            .catch(error => {
                console.error(error.response);
            })
    }, [])

    return(
        <Grid container>

            {order.dishList.map((dish, index) => {
                return(
                    <Grid key={dish.dishName + index} item xs={12}>
                        <Box display="flex" alignItems="center" justifyContent="space-around" style={{width: "100%", border: "2px solid green", padding: "10px 0"}} className="marginBottom marginTop">
                            <Box className="marginLeft marginRight" style={{width: "100px"}}>
                                <img height="50px" src={dish.dishImage  ? `data:image/jpeg;base64,${dish.dishImage}` : `https://dummyimage.com/400x200/ffffff/32750e&text=${dish.dishName}`} />
                            </Box>

                            <Box flexGrow={1}>
                                <Typography>
                                    {dish.dishName}
                                </Typography>
                            </Box>

                            <Box className="marginRight">
                                <Typography>
                                    {dish.price} PLN
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                )
            })}


        </Grid>
    )
}

export default OrderInfo;