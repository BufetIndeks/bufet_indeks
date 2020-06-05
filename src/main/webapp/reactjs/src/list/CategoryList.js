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
        setFormValue([null, '']);
    }

    const handleUpdate = value => {
        setAdding(true);
        setFormMode('update');
        if(value[0].props.src.includes('https'))
            value[0] = null;
        setFormValue([value[0], value[1]]);
        console.log(categories.filter(el => el.name === value[1]));
        setCategoryToUpdate(categories.filter(el => el.name === value[1])[0]);
    }

    const handleDelete = name => {
        let id = categories.filter(el => el.name === name[1])[0].id;
        console.log(id)
        axios.post(API_URL + "/admin/deleteCategory", {id: id, name: name[1]})
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
            let src = el.categoryImage ? `data:image/jpeg;base64,${el.categoryImage}` : `https://dummyimage.com/400x200/ffffff/32750e&text=${el.name}`;
            return [<img height="70px" width="100px" src={src} />, el.name]
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
        console.log(value)
        if(formMode === 'add'){
            url = '/admin/addCategory';
            data = {name: value[0], categoryImage: value[1]};
        }
        else if(formMode === 'update'){
            url = '/admin/updateCategory';
            data = {id: categoryToUpdate.id, name: value[0], categoryImage: value[1]};
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
        setFormValue([null, '']);
    }

    return(
        <>
            <ListTable
                data={preparedData} 
                headers={["Obrazek", 'Nazwa']}
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