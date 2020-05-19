import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../ApiUrl'
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import { Link, useLocation, useHistory } from 'react-router-dom'
import DishFilter from './DishFilter'

const CardList = props => {

    const nonfiltered = {
        priceMin: '',
        priceMax: '',
        ingredients: [],
        allergens: [],
        categories: [],
        dishDay: false
    }

    const [cards, setCards] = useState([])
    const [filters, setFilters] = useState(nonfiltered)
    const [noFilter, setNoFilter] = useState(false)

    const history = useHistory()
    const location = useLocation()

    useEffect( () => {
        setFilters({
            priceMin: '',
            priceMax: '',
            ingredients: [],
            allergens: [],
            categories: [],
            dishDay: false
        })
    }, [])

    useEffect( () => {
        console.log(location, history.location)
        if(location.state !== undefined && location.state.filters !== undefined){
            console.log("AAAAAA", location.state)
            setFilters(location.state.filters)
            setCards(location.state.cards)
        }
    }, [location.state])

    const handleMove = (value) => {
        if(value.active !== undefined)
            history.push(location.pathname + '/' + value.id)
        else{
            setFilters(prev => ({...prev, categories: [value]}))
        }
    }

    return(
        <Container maxWidth="md">
            {history.action === "POP" && cards.length === 9 && history.push('/')}
            <DishFilter noFilter={noFilter} setCards={setCards} cards={cards} setFilters={setFilters} filters={filters}/>
            <Grid container spacing={4}>
                {cards.map( (el, index) => {
                    if(el.name === undefined){
                        el.name = el.dishName
                    }
                    return(
                        <Grid key={index} item xs={6} sm={4}>
                            <Card style={{height: "100%"}}>
                                    <CardActionArea onClick={() => handleMove(el)}>
                                        <CardMedia 
                                            component="img"
                                            alt={el.name}
                                            height="140"
                                            image={el.image}
                                            title={el.name}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" component="h3" align="center">
                                                {el.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                            </Card>
                        </Grid>
                    )}
                )}
                    
            </Grid>
        </Container>
    )
}

export default CardList