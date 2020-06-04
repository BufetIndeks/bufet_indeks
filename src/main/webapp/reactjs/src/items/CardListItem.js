import React from 'react';

import {Grid, Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core'

const CardListItem = ({element, actionOnClick}) => {

    const name = element.name ? element.name : element.dishName;
    const image = element.dishImage  ? `data:image/jpeg;base64,${element.dishImage}` : `https://dummyimage.com/400x200/ffffff/32750e&text=${name}`;
    console.log(element.dishImage)
    return(
        <Grid item xs={6} sm={4}>
            <Card style={{height: "250px"}}>
                <CardActionArea onClick={() => actionOnClick(element)}>
                    <img
                        alt={name}
                        height='130px'
                        width="100%"
                        src={image}
                        title={name}
                    />
                    <CardContent>
                        <Typography variant="h6" component="h3" align="center">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default CardListItem;