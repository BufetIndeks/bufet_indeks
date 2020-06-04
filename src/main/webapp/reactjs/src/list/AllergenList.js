import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListTable from './ListTable';
import { API_URL } from '../ApiUrl'
import AllergenForm from './AllergenForm';

const AllergenList = props => {

    const [allergens, setAllergens] = useState([]);
    const [preparedData, setPreparedData] = useState([]);
    const [adding, setAdding] = useState(false);
    const [formMode, setFormMode] = useState('add');
    const [formValue, setFormValue] = useState('');
    const [allergenToUpdate, setAllergenToUpdate] = useState({});

    useEffect(() => {
       getAllergens();
    }, [])

    const getAllergens = () => {
        axios.get(API_URL + "/admin/allergen")
        .then(response => {
            setAllergens(response.data);
            setPreparedData(flattenData(response.data));
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
        console.log(allergens.filter(el => el.allergenName === name[0]));
        setAllergenToUpdate(allergens.filter(el => el.allergenName === name[0])[0]);
    }

    const handleDelete = name => {
        let id = allergens.filter(el => el.allergenName === name[0])[0].id;
        console.log(id)
        axios.post(API_URL + "/admin/deleteAllergen", {id: id, allergenName: name[0]})
            .then(response => {
                console.log(response);
                getAllergens();
            })
            .catch(error => {
                console.error(error.response);
            })
    }

    const flattenData = data => {
        return data.map(el => {
            return [el.allergenName]
        });
    }

    const searching = filter => {
        let result = allergens
            .filter(el => el.allergenName.toLowerCase().includes(filter))
        setPreparedData(result);
    }

    const closeForm = value => {
        console.log(value)
        let url = '';
        let data = {};
        if(formMode === 'add'){
            url = '/admin/addAllergen';
            data = {allergenName: value};
        }
        else if(formMode === 'update'){
            url = '/admin/updateAllergen';
            data = {id: allergenToUpdate.id, allergenName: value};
        }

        axios.post(API_URL + url, data)
            .then(response => {
                console.log(response);
                getAllergens();
            })
            .catch(error => {
                console.error(error.response);
            })

        setAdding(false);
        setFormValue('');
    }

    return(
        <>
            <ListTable
                data={preparedData} 
                headers={['Nazwa']}
                onAdd={handleAdd}
                isAdding={adding}
                onEdit={handleUpdate} 
                onDelete={handleDelete}
                onSearch={searching}
            />
            {adding && <AllergenForm value={formValue} mode={formMode} submit={closeForm}/>}
        </>
    )
}

export default AllergenList;