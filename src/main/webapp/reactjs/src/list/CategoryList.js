import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListTable from './ListTable';
import { API_URL } from '../ApiUrl'
import CategoryForm from './CategoryForm';

const CategoryList = props => {

    const [categories, setCategories] = useState([]);
    const [preparedData, setPreparedData] = useState([]);
    const [adding, setAdding] = useState(false);
    const [formMode, setFormMode] = useState('add');
    const [formValue, setFormValue] = useState('');
    const [categoryToUpdate, setCategoryToUpdate] = useState({});
    const [error, setError] = useState('')
    
    useEffect(() => {
        if(error !== ''){ 
            alert(error);
            setError('');
        }
    }, [error])

    useEffect(() => {
       getCategories();
    }, [])

    const getCategories = () => {
        axios.get(API_URL + "/category")
        .then(response => {
            setCategories(response.data);
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
        console.log(categories.filter(el => el.name === name[0]));
        setCategoryToUpdate(categories.filter(el => el.name === name[0])[0]);
    }

    const handleDelete = name => {
        let id = categories.filter(el => el.name === name[0])[0].id;
        console.log(id)
        axios.post(API_URL + "/admin/deleteCategory", {id: id, name: name[0]})
            .then(response => {
                console.log(response);
                getCategories();
            })
            .catch(error => {
                console.error(error.response);
                if(error.response.status === 500)
                    setError("Nie można usunąć kategorii")
                else
                    setError(error.response.data.message);
            })
    }

    const flattenData = data => {
        return data.map(el => {
            return [el.name]
        });
    }

    const searching = filter => {
        let result = categories
            .filter(el => el.name.toLowerCase().includes(filter))
        setPreparedData(result);
    }

    const closeForm = value => {
        let url = '';
        let data = {};
        if(formMode === 'add'){
            url = '/admin/addCategory';
            data = {name: value};
        }
        else if(formMode === 'update'){
            url = '/admin/updateCategory';
            data = {id: categoryToUpdate.id, name: value};
        }

        axios.post(API_URL + url, data)
            .then(response => {
                console.log(response);
                getCategories();
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
                data={preparedData} 
                headers={['Nazwa']}
                onAdd={handleAdd}
                isAdding={adding}
                onEdit={handleUpdate} 
                onDelete={handleDelete}
                onSearch={searching}
            />
            {adding && <CategoryForm value={formValue} mode={formMode} submit={closeForm}/>}
        </>
    )
}

export default CategoryList;