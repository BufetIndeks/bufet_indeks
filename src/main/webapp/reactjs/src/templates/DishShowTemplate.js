import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Container, Grid, Card, CardMedia, Typography, Button, Box } from '@material-ui/core';
import { API_URL } from '../ApiUrl';

import GlobalContext from '../context/GlobalContext';

const DishShowTemplate = props => {
        
    const [dish, setDish] = useState({})
    const location = useLocation()
    const history = useHistory()
    const context = useContext(GlobalContext)

    useEffect( () => {
        axios.get(API_URL + `/menu/danie=${location.pathname.slice(location.pathname.lastIndexOf('/') + 1)}`)
            .then(response => {
                setDish(response.data)
            })
            .catch(err => {
                console.error(err.response)
                history.push('/error')
            })
    }, [])
    
    useEffect( () => {
        // if(history.action === "POP")
        //     history.goBack()
    },[history.action])

    const handleOrder = () => {
        context.addDishToOrder(dish);
        history.push('/cart')
    }

    return(
        <Container maxWidth="sm">
            <Grid container>

                <Grid item xs={12}>       
                    <Box display="flex" justifyContent="center">
                        <Card style={{height: "150px"}}>
                            <CardMedia
                                style={{maxHeight: "150px"}}
                                component="img"
                                image={dish.dishImage ? `data:image/jpeg;base64, ${dish.dishImage}` : 'https://dummyimage.com/300x150/ffffff/32750e&text=placeholder'}
                                title="Contemplative Reptile"
                            />
                        </Card>
                    </Box>
                </Grid>
                
                <Grid item xs={12}>
                    <hr/>
                    <Typography variant="h3">
                        {dish.dishName}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <hr/>
                    <Typography>
                        {dish.description}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                <hr/>
                    <Typography>
                        {Object.keys(dish).length !== 0 && dish.ingredientsList.map(el => el.ingredientName + ' ')}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                <hr/>
                    <Typography>
                        {Object.keys(dish).length !== 0 && dish.ingredientsList.map(el => el.allergenList.map(allergen => allergen.allergenName + ' '))}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                <hr/>
                    <Typography>
                        {dish.price + ' PLN'}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                <hr/>
                    <Typography>
                        {Object.keys(dish).length !== 0 && dish.dishCategoryList.map(el => el.name + ' ')}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                <hr/>
                    <Typography>
                        {dish.dishDay}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" color="primary" onClick={() => handleOrder()}>
                            Zamów
                        </Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    )
}

export default DishShowTemplate;