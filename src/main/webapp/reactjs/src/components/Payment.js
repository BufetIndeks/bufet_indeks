import React from "react";

import {Grid, Box, Typography} from '@material-ui/core'

const Payment = props => {

    return(
        <Grid container>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                    <Typography variant="h2">
                        Zamówienie złożono
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Payment;