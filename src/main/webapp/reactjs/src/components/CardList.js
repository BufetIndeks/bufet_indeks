import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../ApiUrl'
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'

const CardList = props => {

    const [cards, setCards] = useState([])
    let path = ''
    let mode = {}
    let location = useLocation()

    useEffect(() => {
        console.log(location)
        axios.get(API_URL + props.getUrl)
        .then(response => {
            if(props.getUrl === '/category')
                setCards(response.data)
            else if(props.getUrl === '/menu'){
                let edit = response.data.map( dish => {
                    console.log("A", dish)
                    for(let el of dish.dishCategoryList){
                        console.log("B",el)
                        if(el.name === location.state.name)
                            return dish
                    }
                })
                .filter(el => el !== undefined)
                setCards(edit)
            }
        })
        .catch(error => {
            console.error(error)
        })
    }, [props])

    return(
        <Container maxWidth="md">
            <Grid container spacing={4}>
                {console.log(cards)}
                {cards.map( (el, index) => {
                    if(el.name === undefined){
                        el.name = el.dishName
                    }
                    return(
                        <Grid key={index} item xs={6} sm={4}>
                            <Card>
                                <Link to={{ pathname: props.itemUrl + el.id, state: {name: el.name, ...el} }}>
                                    <CardActionArea>
                                        <CardMedia 
                                            component="img"
                                            alt={el.name}
                                            height="140"
                                            image={el.image}
                                            title={el.name}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" component="h6" align="center">
                                                {el.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>
                    )}
                )}
                    
            </Grid>
        </Container>
    )
}

export default CardList