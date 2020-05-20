import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Fab, Modal, Grid, TextField, FormControlLabel, Checkbox, Typography, Button, Box, Container } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles'
import FilterListIcon from '@material-ui/icons/FilterList'
import axios from 'axios'
import {API_URL} from '../ApiUrl'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    return {
        top: `${50}%`,
        left: `${50}%`,
        transform: `translate(-${50}%, -${50}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: '80%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    fab: {
        background: "darkblue", 
        color: "white", 
        position: "fixed", 
        margin: 0, 
        top: 'auto', 
        right: 20,
        bottom: 20, 
        left: "auto"
    }
}));

const DishFilter = props => {

    const [open, setOpen] = useState(false)
    const [redirect, setRedirect] = useState(false)

    // const [priceMin, setPriceMin] = useState('')
    // const [priceMax, setPriceMax] = useState('')
    // const [categories, setCategories] = useState([])
    // const [ingredients, setIngredients] = useState([])
    // const [allergens, setAllergens] = useState([])
    // const [dishDay, setDishDay] = useState(false)

    const nonfiltered = {
        priceMin: '',
        priceMax: '',
        ingredients: [],
        allergens: [],
        categories: [],
        dishDay: false
    }

    const [allCategories, setAllCategories] = useState([])
    const [allIngredients, setAllIngredients] = useState([])
    const [allAllergens, setAllAllergens] = useState([])
    const [allDishes, setAllDishes] = useState([])

    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles()
    const history = useHistory()

    useEffect( () => {

        axios.get(API_URL + '/category')
            .then(response => {
                setAllCategories(response.data)
            })
            .catch(error => {
                console.log(error)
            })

        axios.get(API_URL + '/admin/ingredient')
            .then(response => {
                setAllIngredients(response.data)
            })
            .catch(error => {
                console.error(error)
            })
        axios.get(API_URL + '/menu')
            .then(response => {
                setAllDishes(response.data)  
            })
            .catch(error => {
                console.error(error)
            })
        axios.get(API_URL + '/admin/allergen')
            .then(response => {
                setAllAllergens(response.data)
            })
            .catch(error => {
                console.error(error.response)
            })
    }, [])

    useEffect( () => {
        if(history.location.pathname === '/menu' && history.action === "PUSH"){
            props.setCards(allCategories)
            console.log('axios')
        }
    },[allCategories])

    useEffect( () => {
        if(!open && allDishes.length !== 0)
            filter()
    }, [props.filters.categories])

    const filter = () => {
        let result = JSON.parse(JSON.stringify(allDishes))
        console.log(result, props.filters)
        if(props.filters.priceMin !== ''){
            result = result.filter(el => el.price >= props.filters.priceMin)
        }
        if(props.filters.priceMax !== ''){
            result = result.filter(el => el.price <= props.filters.priceMax)
        }
        if(props.filters.ingredients.length > 0){
            result = result.map(dish => {
                let counter = props.filters.ingredients.length
                for(let i of dish.ingredientsList){
                  for(let el of props.filters.ingredients){
                    if(Object.values(i).includes(el.ingredientName)){
                      counter--
                      if(counter == 0)
                        return dish
                    }
                  }
                }
                return null
              })
              .filter(el => el !== null)
        }
        if(props.filters.categories.length > 0){
            result = result.map(dish => {
                let counter = props.filters.categories.length
                for(let i of dish.dishCategoryList){
                  for(let el of props.filters.categories){
                    if(Object.values(i).includes(el.name)){
                      counter--
                      if(counter == 0)
                        return dish
                    }
                  }
                }
                return null
            })
                .filter(el => el !== null)
        }

        if(history.action !== "POP"){
            console.log("filtry")
            if(JSON.stringify(nonfiltered) === JSON.stringify(props.filters)){
                props.setCards(allCategories)
            }
            else if(result.length === allDishes.length){
                props.setCards(allCategories)
                console.log("")
            }
            else{
                console.log("FILTRY")
                props.setCards(result)
            }
        }
        else{
            if(history.location.state !== undefined){
                console.log("z historii")
                props.setCards(history.location.state.cards)
                history.action = ''
            }
        }
        setOpen(false)
    }

    useEffect(() => {
        if(history.location.state === undefined){
            props.setCards(allCategories)
            console.log('allcategories')
        }
    }, [allCategories])

    useEffect( () => {
        if(history.action !== "POP"){
            console.log("push")
            if(history.location.state === undefined || JSON.stringify(history.location.state.cards) !== JSON.stringify(props.cards))
                history.push('/menu', {cards: props.cards, filters: props.filters})
        }
    }, [props.cards])

    const handleInput = (event, value, field) => {
        event.persist()
        if(field !== undefined){
            props.setFilters(prev => ({...prev, [field]: value}))
        }
        else
            props.setFilters(prev => ({...prev, [event.target.id]: event.target.value}))
    }

    const modal = (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Container maxWidth="xs" >
                <Grid style={modalStyle} className={classes.paper} container>
                    
                    <Grid item xs={12}>
                        <Typography>
                            Filtr dań
                        </Typography>
                    </Grid>

                    <Grid item xs= {12}>
                    <Box display="flex" justifyContent="space-between">
                        <Grid item xs={5}>
                            <TextField 
                                    id="priceMin"
                                    fullWidth
                                    value={props.filters.priceMin}
                                    onChange={e => handleInput(e)}
                                    inputProps={{
                                        maxLength: 10
                                    }}
                                    helperText={`Tylko cyfry i przecinek`}
                                    margin="normal"
                                    label="Cena minimalna"
                                    variant="outlined" />
                        </Grid>

                        <Grid item xs={5}>
                            <TextField 
                                    id="priceMax"
                                    fullWidth
                                    value={props.filters.priceMax}
                                    onChange={e => handleInput(e)}
                                    inputProps={{
                                        maxLength: 10
                                    }}
                                    helperText={`Tylko cyfry i przecinek`}
                                    margin="normal"
                                    label="Cena maksymalna"
                                    variant="outlined" />
                        </Grid>
                    </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Autocomplete
                            multiple
                            id="ingredients"
                            value={props.filters.ingredients}
                            options={allIngredients}
                            limitTags={1}
                            getOptionLabel={(option) => option.ingredientName}
                            onChange={(e,v) => handleInput(e,v,'ingredients')}
                            filterSelectedOptions
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Składniki"
                                variant="outlined"
                                margin="normal"
                            />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Autocomplete
                            multiple
                            id="allergens"
                            value={props.filters.allergens}
                            options={allAllergens}
                            limitTags={1}
                            getOptionLabel={(option) => option.allergenName}
                            onChange={(e,v) => handleInput(e,v,'allergens')}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Alergeny"
                                variant="outlined"
                                margin="normal"
                            />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Autocomplete
                            multiple
                            id="categories"
                            value={props.filters.categories}
                            options={allCategories}
                            limitTags={1}
                            getOptionLabel={(option) => option.name}
                            onChange={(e,v) => handleInput(e,v,'categories')}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Kategorie"
                                variant="outlined"
                                margin="normal"
                            />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel label = "Danie dnia" margin="normal" 
                            control = {
                                <Checkbox 
                                    id="dishDay"
                                    color="primary"
                                    value={props.filters.dishDay}
                                    onChange={e => handleInput(e)}
                                    name="Danie dania" />
                        }/>
                    </Grid>

                    <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={() => filter()}>
                                Filtruj
                            </Button>
                    </Grid>

                </Grid>
            </Container>
        </Modal>
    )

    return(
        <>
            <Fab color="primary" className={classes.fab} onClick={() => setOpen(!open)}><FilterListIcon /></Fab>
            {open && modal}
        </>
    )
}

export default DishFilter