import React from 'react';

import {Grid, Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core'

const CardListItem = ({element, actionOnClick}) => {

    const name = element.name ? element.name : element.dishName;
    const image = element.image ? element.image : `data:image/jpeg;base64,${element.dishImage}`;

    return(
        <Grid item xs={6} sm={4}>
            <Card style={{height: "200px"}}>
                    <CardActionArea onClick={() => actionOnClick(element)}>
                        <CardMedia 
                            component="img"
                            alt={name}
                            style={{maxHeight: '140'}}
                            image={image}
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