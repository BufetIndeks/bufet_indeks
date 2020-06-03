import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close'
import { API_URL } from '../ApiUrl';
import { useHistory } from 'react-router-dom'

import {Box, TextField, FormControlLabel, Checkbox, Card, Button, CardMedia, Container, Grid, IconButton, Typography} from '@material-ui/core'

const DishEditTemplate = props => {

    const [id, setId] = useState(null)
    const [image, setImage] = useState(null)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [categories, setCategories] = useState([])
    const [dishDay, setDishDay] = useState(false)

    const [allCategories, setAllCategories] = useState([])
    const [allIngredients, setAllIngredients] = useState([])

    const [error, setError] = useState('');

    const history = useHistory();
    const pattern = /[\p{L} \s , .]/gu;

    let editMode = false;
    let deleteMode = false;
    if(props.location !== undefined && props.location.state !== undefined){
        deleteMode = props.location.state.deleteMode;
        editMode = props.location.state.editMode;
    }

    useEffect( () => {
        let dish = {}
        if(props.location !== undefined && props.location.state !== undefined) {
            dish = props.location.state.dish;
            setId(dish.id)
            setImage(dish.dishImage)
            setName(dish.dishName)
            setDescription(dish.description)
            setPrice(dish.price)
            setIngredients(dish.ingredientsList)
            setCategories(dish.dishCategoryList)
            setDishDay(dish.dishDay)
        }

        if(deleteMode === true){
             let inputs = document.getElementsByTagName("input");
             for(let el of inputs)
                 el.disabled = true
        }

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
    }, [])

    const handleEdit = () => {
        const data = {
            "id": id,
            "dishName": name,
            //"file": image,
            "price": price,
            "description": description,
            "dishDay": dishDay,
            "dishImage": image,
            "ingredientsList": ingredients,
            "dishCategoryList": categories,
            "active": false
        }
        axios.post(API_URL + '/admin/updateDish', data)
        .then(response => {
            console.log(response)
            history.goBack()
        })
        .catch(error => {
            console.error(error.response)
        })
    }

    const handleDelete = () => {
        const data = {
            "id": 1,
            "active": true
        }
        console.log(data)
        axios.post(API_URL + '/admin/setActiveDish', data)
        .then(response => {
            console.log(response)
            history.goBack()
        })
        .catch(error => {
            console.log(error.response)
        })
    }

    const handleAdd = () => {
        const data =  {
            "dishName": name,
            "price": price,
            "description": description,
            "dishDay": dishDay,
            "ingredientsList": ingredients,
            "dishCategoryList": categories,
            "active": false,
            "dishImage": image
        }

        axios.post(API_URL + '/admin/addDish', data, {headers: {
            Accept: 'application/json'
          }})
        .then(response => {
            console.log(response)
            history.goBack();
        })
        .catch(error => {
            if(error.response)
                setError(error.response.data.message)
        })

    }

    const checkPattern = (setter, value, pattern) => {
        let viableMatches = String(value).match(pattern)
        if(viableMatches !== null)
            setter(viableMatches.join(""))
        else
            setter("")
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(editMode)
            handleEdit();
        else if(deleteMode)
            handleEdit();
        else
            handleAdd();
    }

    return(
        <Container maxWidth="md" style={{marginTop: "20px"}}>
            <form onSubmit={e => handleSubmit(e)}>
                <Grid container justify="center" alignItems="stretch">   
                    <Grid item xs={12}>       
                        <Box display="flex" justifyContent="center">
                            <Card >
                                <CardMedia style={{maxWidth: "300px", height: "160px"}}
                                    component="img"
                                    alt=""
                                    image={(image === null || image.length === 0) ? null : 'data:image/jpeg;base64,' + image}
                                />
                            </Card>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box className="marginTop" display="flex" justifyContent="flex-end" >
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                onChange={e => {
                                    var reader = new FileReader();
                                    reader.onloadend = function() {
                                        setImage(reader.result.substring(reader.result.indexOf(',') + 1))
                                    }
                                    reader.readAsDataURL(e.target.files[0])
                                    }}
                                type="file"
                            />
                            {image !== null && 
                                <IconButton color="secondary" className="marginRight" size="small" onClick={e => {
                                    const file = document.getElementById('raised-button-file');
                                    file.value = '';
                                    setImage(null)}}>
                                    <CloseIcon />
                                </IconButton>}
                            <label htmlFor="raised-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    Zdjęcie
                                </Button>
                            </label> 
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                            id="name"
                            fullWidth
                            value={name}
                            inputProps={{
                                maxLength: 128
                            }}
                            onChange={e => checkPattern(setName, e.target.value, pattern)}
                            margin="dense"
                            label="Nazwa dania"
                            helperText={`${name.length}/128`}
                            variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                            id="description"
                            fullWidth
                            value={description}
                            inputProps={{
                                maxLength: 512
                            }}
                            onChange={e => checkPattern(setDescription, e.target.value, pattern)}
                            margin="dense"
                            label="Opis dania"
                            helperText={`${description.length}/512`}
                            variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                                id="price"
                                fullWidth
                                value={price}
                                onChange={e => checkPattern(setPrice, e.target.value.replace(/,/g, '.'), /[0-9 , .]+/)}
                                inputProps={{
                                    maxLength: 10
                                }}
                                helperText={`Tylko cyfry i przecinek`}
                                margin="dense"
                                label="Cena dania"
                                variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <Autocomplete
                            multiple
                            id="allIngredients"
                            value={ingredients}
                            options={allIngredients}
                            getOptionLabel={(option) => option.ingredientName}
                            onChange={(e,v) => setIngredients(v)}
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
                            id="category"
                            value={categories}
                            options={allCategories}
                            getOptionLabel={(option) => option.name}
                            onChange={(e, value) => setCategories(value)}
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
                                    value={dishDay}
                                    onChange={(e,checked) => setDishDay(checked)} 
                                    name="Danie dania" />
                        }/>
                    </Grid>
                    {error && <Grid item xs={12}>
                            <Typography style={{color: "red"}}>{error}</Typography>
                        </Grid>}
                    
                    <Grid item xs={12}>
                        <Box className="marginBottom" display="flex" justifyContent="flex-end">
                            {editMode && 
                                <Button type="submit" variant="contained" color="primary" margin="normal">Modyfikuj</Button>}
                            {deleteMode && 
                                <Button type="submit" variant="contained" color="secondary" margin="normal">Usuń</Button>}
                            {props.location.state === undefined && 
                                <Button type="submit" variant="contained" color="primary" margin="normal">Dodaj</Button>}
                        </Box>
                    </Grid>
                </Grid>
            </form>

        </Container>
    )
}

export default DishEditTemplate;