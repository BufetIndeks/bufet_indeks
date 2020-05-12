import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Container, Grid, Card, CardMedia, Typography, Button, Box } from '@material-ui/core';

const DishShowTemplate = props => {
        
    let dish = {};

    if(props.location !== undefined && props.location.state !== undefined) {
        if(props.location.state.dish !== undefined){
            Object.assign(dish, props.location.state.dish);
            console.log(dish)
        }
        else{
            Object.assign(dish, props.location.state);
            console.log(dish)
        }
    }
    else{
        return(
            <>Błąd - brak dania</>
        )
    }

    const handleSubmit = () => {
        console.log("SUBMIT")
    }

    return(
        <Container maxWidth="sm">
            <Grid container>

                <Grid item xs={12}>       
                    <Box display="flex" justifyContent="center">
                        <Card style={{maxWidth: "300px", height: "150px"}}>
                            <CardMedia
                                component="img"
                                image="https://images.freeimages.com/images/premium/previews/2871/28718848-spaghetti-with-pesto.jpg"
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
                        {dish.ingredientsList.map(el => el.ingredientName + ' ')}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                <hr/>
                    <Typography>
                        {dish.price + ' złotych'}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                <hr/>
                    <Typography>
                        {dish.dishCategoryList.map(el => el.name + ' ')}
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
                        <Button variant="contained" color="primary" onClick={() => handleSubmit()}>
                            Zamów
                        </Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    )
}

export default DishShowTemplate;