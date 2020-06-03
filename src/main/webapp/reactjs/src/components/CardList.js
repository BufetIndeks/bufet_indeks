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
    const [categoryClicked, setCategoryClicked] = useState(false)

    const history = useHistory()
    const location = useLocation()

    //Zerowanie filtrów
    useEffect( () => {
        setFilters({
            priceMin: '',
            priceMax: '',
            ingredients: [],
            allergens: [],
            categories: [],
            dishDay: false
        })
        console.log("CARDLIST RENDER")
    }, [])

    useEffect( () => {
        if(location.state === undefined){
            console.log("COS")
            setFilters(nonfiltered)
            setCategoryClicked(true)
        }
        else if(history.action == 'POP' && location.state !== undefined && location.state.filters !== undefined){
            console.log("CARDSLIST FILTRY Z LOKACJI")
            setFilters(location.state.filters)
            setCards(location.state.cards)
        }
    }, [location.state])

    const handleMove = (value) => {
        console.log("PUSH if defined", value.active)
        if(value.active !== undefined)
            history.push(location.pathname + '/' + value.id)
        else{
            history.action = "PUSH"
            setCategoryClicked(true)
            setFilters(prev => ({...prev, categories: [value]}))
        }
    }

    return(
        <Container maxWidth="md">
            <DishFilter categoryClicked={categoryClicked} setCategoryClicked={setCategoryClicked} setCards={setCards} cards={cards} setFilters={setFilters} filters={filters}/>
            <Grid container spacing={4}>
                {cards !== undefined && cards.map( (el, index) => {
                    if(!el.image){
                        if(!el.dishImage)
                            el.image = 'https://dummyimage.com/300x150/ffffff/32750e&text=placeholder'
                    }
                   
                    return(
                        <Grid key={index} item xs={6} sm={4}>
                            <Card style={{height: "200px"}}>
                                    <CardActionArea onClick={() => handleMove(el)}>
                                        <CardMedia 
                                            component="img"
                                            alt={el.name ? el.name : el.dishName}
                                            style={{maxHeight: '140'}}
                                            image={el.image ? el.image : `data:image/jpeg;base64,${el.dishImage}`}
                                            title={el.name ? el.name : el.dishName}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" component="h3" align="center">
                                                {el.name === undefined ? el.dishName : el.name}
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