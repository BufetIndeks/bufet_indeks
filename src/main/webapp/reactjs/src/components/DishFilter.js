import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Fab, Modal, Grid, TextField, FormControlLabel, Checkbox, Typography, Button, Box, Container } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles'
import FilterListIcon from '@material-ui/icons/FilterList'
import axios from 'axios'
import {API_URL} from '../ApiUrl'

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
        left: "auto",
        zIndex: 1
    }
}));

const DishFilter = props => {

    const [open, setOpen] = useState(false)
    const [pressedFilter, setPressedFilter] = useState(false)

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
    const location = useLocation()

    //Początkowe pobranie wszystkich informacji
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
        if((history.location.pathname === '/menu' && history.action === "PUSH") || history.location.state === undefined){
            props.setCards(allCategories)
        }
    },[allCategories])

    //Filtrowanie poprzez zmianę kategorii - przyciśnięcie karty w menu
    useEffect( () => {
        if(props.categoryClicked === true){
            props.setCategoryClicked(false)

            if(location.state === undefined){
                console.log("catClicked 0")
                props.setCards(allCategories)
            }
            if((!open) || location.state.cards.length === 0){
                filter()
            }
        }
    }, [props.categoryClicked])

    const filter = (button = false) => {
        let result = JSON.parse(JSON.stringify(allDishes))
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
        console.log(result, props.filters)
        if(button){
            history.push('/menu', {filters: props.filters, cards: result})
            props.setCards(result)
        }
        else{
            if(history.action !== "POP" && result.length !== 0){
                console.log("push filter", result)
                history.push('/menu', {filters: props.filters, cards: result})
            
                if((JSON.stringify(nonfiltered) === JSON.stringify(props.filters)) || props.filters.categories.length === 0){
                    props.setCards(allCategories)
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
       }
        setOpen(false)
    }

    const handleInput = (event, value, field) => {
        event.persist()
        if(field !== undefined){
            props.setFilters(prev => ({...prev, [field]: value}))
        }
        else
            props.setFilters(prev => ({...prev, [event.target.id]: event.target.value}))
    }

    const checkPattern = (value, pattern) => {
        let viableMatches = String(value).match(pattern)
        if(viableMatches !== null)
            return viableMatches.join("")
        else
            return ""
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
                                    onChange={e => handleInput(e, checkPattern(e.target.value.replace(/,/,'.'), /[0-9 , .]/gu), 'priceMin')}
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
                            <Button variant="contained" color="primary" onClick={() => filter(true)}>
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