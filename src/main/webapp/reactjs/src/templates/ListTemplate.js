import React, {useState, useEffect} from 'react';
import {Table, TableContainer, TableCell, TableRow, TableHead, TableBody, Container, IconButton, Box, Fab, TextField, Typography, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios'
import {API_URL} from '../ApiUrl'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
    fabNew: {
        background: "green", 
        color: "white", 
        position: "fixed", 
        margin: 0, 
        top: 'auto', 
        right: 20,
        bottom: 20, 
        left: "auto"
    },
    fabAdd: {
        background: "green", 
        color: "white", 
        position: "fixed", 
        margin: 0, 
        top: 'auto', 
        right: 20,
        bottom: 100, 
        left: "auto"
    },
    newEntry: {
        position: "fixed",
        width: "70%",
        margin: 0, 
        top: 'auto', 
        left: 20,
        bottom: 20, 
        right: "auto"
    }
})

const ListTemplate = props => {

    const [flattenedData, setFlattenedData] = useState([])
    const [data, setData] = useState([]);
    const [addItem, setAddItem] = useState(false)
    const [newEntry, setNewEntry] = useState(['',''])
    const [up,update] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const classes = useStyles();

    const url = props.url
    const headers = props.headers

    useEffect( () => {
        axios.get(API_URL + url)
            .then(response => {
                setData(response.data)
                setFlattenedData(flattenData(response.data))
            })
            .catch(error => {
                console.error(error)
            })
    }, [up])

    const flattenData = (data) => {
        return data.map(obj => {
            let newObj = {}
            for(let key in obj){
              if(Array.isArray(obj[key])){
                let str = ''
                for(let el of obj[key]){
                  str += el.allergenName + ','
                }
                str = str.slice(0, -1)
                newObj[key] = str
              }
              else if(key == 'id'){
                  newObj[key] = obj[key]
              }
              else{
                newObj[key] = obj[key]
              }
            }
            return newObj
          })
    }

    const handleInput = (event, index) => {
        let temp = [...newEntry];
        temp[index] = event.target.value;
        setNewEntry(temp);
    }

    const openEdit = (element) => {
        let temp = [];
        if(element.ingredientName !== undefined)
            temp = [element.ingredientName, element.allergenList, element.id]
        else
            temp = [element.name, element.id]
        setNewEntry(temp)
        setEditMode(true)
        setAddItem(true)
    }

    const closeEdit = () => {
        setNewEntry(['', ''])
        setEditMode(false)
        setAddItem(false)
    }

    const addAllergens = (allergens) => {
        return new Promise((res, rej) => {
            let counter = 0
            for(let el of allergens){
                axios.post(API_URL + '/admin/addAllergen',{
                    allergenName: el
                })
                    .then(res => {
                        console.log(res.data)
                        counter++
                    })
                    .catch(err => {
                        console.error(err.response)
                        counter++
                    })
                    .finally( () => {
                        if(counter === allergens.length)
                            res()
                    })
            }
        })
    }

    const handleUpdate = () => {
        if(url === '/category'){
            axios.post(API_URL + '/admin/updateCategory', {
                id: newEntry[1],
                name: newEntry[0]
            })
                .then(res => {
                    console.log(res.data)
                    update(!up)
                    closeEdit()
                })
                .catch(err => {
                    console.error(err)
                })
        }
        else if(url === '/admin/ingredient'){
            let allergens = []
            let newEntryAllergens = newEntry[1].replace(/\s/g,'').split(',')
            addAllergens(newEntryAllergens)
            .then( () => {
                axios.get(API_URL + '/admin/allergen')
                    .then(response => {
                        allergens = response.data;
                        allergens = allergens.filter(el => {
                            for(let nEA of newEntryAllergens){
                                if(nEA === el.allergenName){
                                    const index = newEntryAllergens.indexOf(nEA)
                                    if(index > -1)
                                        newEntryAllergens.splice(index, 1)
                                    return true
                                }
                            }
                            return false
                        })

                        const post = {
                            id: newEntry[2],
                            ingredientName: newEntry[0],
                            allergenList: allergens
                        }

                        axios.post(API_URL + '/admin/updateIngredient', post)
                            .then(response => {
                                console.log(response)
                                closeEdit()
                                update(!up)
                            })
                            .catch(err => {
                                console.error(err.response)
                            })
                        
                    })
                    .catch(err => {
                        console.error(err)
                    })
            })
        }
        else
            throw new Error("Nieprawidłowy adres URL do serwera")
    }

    const handleAdd = () => {
        if(editMode === true){
            handleUpdate()
            return;
        }

        if(url == '/category'){
            axios.post(API_URL + "/admin/addCategory", {
                name: newEntry[0]
            })
                .then(response => {
                    console.log(response)
                    setAddItem(false)
                    update(!up)
                })
                .catch(error => {
                    console.error(error.response)
                })
        }
        else if(url === '/admin/ingredient'){
            let allergenList = 
            axios.post(API_URL + "/admin/addIngredient", {
                ingredientName: newEntry[0],
                allergenList: newEntry[1].replace(/\s+/g, '').split(",").map(el => {return {allergenName: el}})
            })
                .then(response => {
                    console.log(response)
                    setAddItem(false)
                    update(!up)
                })
                .catch(error => {
                    console.error(error.response)
                })
        }
        else
            throw new Error("Nieprawidłowy adres URL do serwera")
    }

    const handleDelete = (entryName, entryId) => {
        if(editMode) closeEdit()

        if(url == '/category'){
            console.log(data)
            axios.post(API_URL + "/admin/deleteCategory", {
                id: data[entryId].id,
                name: entryName
            })
                .then(response => {
                    console.log(response.data)
                    update(!up)
                })
                .catch(error => {
                    console.error(error.response)
                })
        }
        else if(url == '/admin/ingredient'){
            axios.post(API_URL + "/admin/deleteIngredient", {
                id: data[entryId].id,
                name: entryName
            })
                .then(response => {
                    console.log(response.data)
                    update(!up)
                })
                .catch(error => {
                    console.error(error.response)
                })
        }
        else
            throw new Error("Nieprawidłowy adres URL do serwera")
    }

    return(
        <Container style={{paddingLeft: "10px", paddingRight: "10px"}}>
            
            <Fab onClick={() => {
                setAddItem(!addItem)
                if(editMode === true) {
                    closeEdit()
                }
            }} 
            className={classes.fabNew} style={{background: addItem ? "red" : "green"}}>
                {addItem ? <CloseIcon /> : <AddIcon />}
            </Fab>

            <Box display={addItem ? "block" : "none"} className={classes.newEntry} justifyContent="flex-start">
                <Fab variant="round" className={classes.fabAdd} style={{background: editMode ? "blue" : "green"}} onClick={() => handleAdd()}>
                    <DoneIcon />
                </Fab>
                {headers.map( (el, index) => (
                    <Box flex-grow={2} key={el} display="flex" alignContent="" mx="2vw" mt="20px">
                        <TextField placeholder={el} fullWidth value={newEntry[index]} variant="outlined" size="medium" onChange={ e => handleInput(e, index) }/>
                    </Box>
                ))}
            </Box>

            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            {headers !== undefined && 
                            headers.map( head => (
                                <TableCell style={{fontWeight: "bold"}} key={head}>{head}</TableCell>
                            ))}
                            <TableCell style={{fontWeight: "bold"}} key={"ACTIONS"}>Operacje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {flattenedData[0] !== undefined && flattenedData.map( (element, index) => (
                            <TableRow key={"cell" + index}>
                                {Object.values(element).map( (content, index) => {
                                    if(content !== element.id)
                                        return(
                                            <TableCell key={content}>{content}</TableCell>
                                )})}
                                <TableCell key={"actions" + index}>
                                    <IconButton onClick={() => openEdit(element)} size="small" color="primary"><EditIcon /></IconButton>
                                    <IconButton onClick={() => handleDelete(element.name, index)} size="small" color="secondary"><DeleteIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )

}

export default ListTemplate;