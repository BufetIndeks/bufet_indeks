import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import { API_URL } from '../ApiUrl';

import {Box, TextField, FormControlLabel, Checkbox, Card, Button, CardMedia, Container, Grid, CardActionArea} from '@material-ui/core'

const DishEditTemplate = props => {

    const [id, setId] = useState(null)
    const [image, setImage] = useState(null)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(null)
    const [ingredients, setIngredients] = useState([])
    const [categories, setCategories] = useState([])
    const [dishDay, setDishDay] = useState(false)

    const [allCategories, setAllCategories] = useState([])
    const [allIngredients, setAllIngredients] = useState([])

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

    const handleSubmit = () => {
        if(deleteMode){
            const data = {
                "id": 1,
                "active": false
            }
            console.log(data)
            axios.post(API_URL + '/admin/setActiveDish', data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            })
        }
        else if (editMode){
            console.log("edit")
        }
        else{
            const data =  {
                "dishName": name,
                "dishImage": image,
                "price": price,
                "description": description,
                "dishDay": dishDay,
                "ingredientsList": ingredients,
                "dishCategoryList": categories,
                "active": true
            }
            axios.post(API_URL + '/admin/addDish', data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error(error.response)
            })
        }
    }

    return(
        <Container maxWidth="md" style={{marginTop: "20px"}}>
            <Grid container justify="center" alignItems="stretch">   

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
                    <TextField 
                        id="dishImage"
                        fullWidth
                        onChange={e => setImage(e.target.value)}
                        margin="normal"
                        label="Zdjęcie dania"
                        type="image"
                        variant="outlined" />
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                        id="name"
                        fullWidth
                        value={name}
                        inputProps={{
                            maxLength: 128
                        }}
                        onChange={e => setName(e.target.value)}
                        margin="normal"
                        label="Nazwa dania"
                        helperText={`/128`}
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
                        onChange={e => setDescription(e.target.value)}
                        margin="normal"
                        label="Opis dania"
                        helperText={`/512`}
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
                        />
                        )}
                    />
                </Grid>
                            
                <Grid item xs={12}>
                <TextField 
                        id="price"
                        fullWidth
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        margin="normal"
                        label="Cena dania"
                        variant="outlined" />
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

                <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end">
                        {editMode && 
                            <Button type="submit" variant="contained" color="primary" margin="normal" onClick={console.log("Nie zrobione")}>Modyfikuj</Button>}
                        {deleteMode && 
                            <Button type="submit" variant="contained" color="secondary" margin="normal" onClick={handleSubmit}>Usuń</Button>}
                        {props.location.state == undefined && 
                            <Button type="submit" variant="contained" color="primary" margin="normal"onClick={handleSubmit}>Dodaj</Button>}
                    </Box>
                </Grid>

            </Grid>
        </Container>
    )
}

export default DishEditTemplate;