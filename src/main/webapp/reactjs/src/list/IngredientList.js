import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListTable from './ListTable';
import { API_URL } from '../ApiUrl'
import IngredientForm from './IngredientForm';

const IngredientList = props => {

    const [ingredients, setIngredients] = useState([]);
    const [allergens, setAllergens] = useState([]);
    const [preparedIngredients, setPreparedIngredients] = useState([]);
    const [adding, setAdding] = useState(false);
    const [formMode, setFormMode] = useState('add');
    const [formValue, setFormValue] = useState('');
    const [ingredientToUpdate, setIngredientToUpdate] = useState({});
    const [error, setError] = useState('')
    
    useEffect(() => {
        if(error !== ''){ 
            alert(error);
            setError('');
        }
    }, [error])

    useEffect(() => {
       getIngredients();
       getAllergens();
    }, [])

    const getAllergens = () => {
        axios.get(API_URL + "/admin/allergen")
        .then(response => {
            setAllergens(response.data);
        })
        .catch(error => {
            console.error(error.response);
        })
    }

    const getIngredients = () => {
        axios.get(API_URL + "/admin/ingredient")
        .then(response => {
            setIngredients(response.data);
            setPreparedIngredients(flattenData(response.data));
        })
        .catch(err => {
            console.error(err.response);
        })
    }

    const handleAdd = () => {
        setAdding(!adding);
        setFormMode('add');
    }

    const handleUpdate = name => {
        setAdding(true);
        setFormMode('update');
        setFormValue(name[0]);
        console.log(ingredients.filter(el => el.ingredientName === name[0]));
        setIngredientToUpdate(ingredients.filter(el => el.ingredientName === name[0])[0]);
    }

    const handleDelete = name => {
        let id = ingredients.filter(el => el.ingredientName === name[0])[0].id;
        console.log(id)
        axios.post(API_URL + "/admin/deleteIngredient", {id: id, name: name[0]})
            .then(response => {
                console.log(response);
                getIngredients();
            })
            .catch(error => {
                console.error(error.response);
                if(error.response.status === 500)
                    setError("Nie można usunąć składnika")
                else
                    setError(error.response.data.message);
            })
    }

    const flattenData = data => {
        return data.map(el => {
            let allergens = el.allergenList.map(allergen => {
                return allergen.allergenName;
            });
            return [el.ingredientName, allergens];
        });
    }

    const searching = filter => {
        let result = ingredients
            .filter(el => el.ingredientName.toLowerCase().includes(filter))
        setPreparedIngredients(result);
    }

    const closeForm = (ingredient, allergens) => {
        let url = '';
        let data = {};
        if(formMode === 'add'){
            url = '/admin/addIngredient';
            data = {ingredientName: ingredient, allergenList: allergens};
        }
        else if(formMode === 'update'){
            url = '/admin/updateIngredient';
            data = {id: ingredientToUpdate.id, ingredientName: ingredient, allergenList: allergens};
        }

        axios.post(API_URL + url, data)
            .then(response => {
                console.log(response);
                getIngredients();
            })
            .catch(error => {
                console.error(error.response);
                setError(error.response.data.message);
            })

        setAdding(false);
        setFormValue('');
    }

    return(
        <>
            <ListTable
                data={preparedIngredients} 
                headers={['Składnik', 'Alergeny']}
                onAdd={handleAdd}
                isAdding={adding}
                onEdit={handleUpdate} 
                onDelete={handleDelete}
                onSearch={searching}
            />
            {adding && <IngredientForm allergens={allergens} value={formValue} mode={formMode} submit={closeForm}/>}
        </>
    )
}

export default IngredientList;