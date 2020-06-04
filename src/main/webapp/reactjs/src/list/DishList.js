import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListTable from './ListTable';
import { useHistory } from 'react-router-dom';
import { API_URL } from '../ApiUrl'

const DishList = props => {

    const [dishes, setDishes] = useState([]);
    const [preparedData, setPreparedData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(API_URL + "/admin/menu")
            .then(response => {
                setDishes(response.data);
                setPreparedData(flattenData(response.data));
            })
            .catch(err => {
                console.error(err.response);
            })
    }, [])

    const handleAdd = () => {
        history.push('/admin/dishes/new');
    }

    const handleUpdate = dishObject => {
        let dish = dishes.find(el => {
            return el.dishName === dishObject[1]
        });

        history.push(`/admin/dishes/${dish.dishId}`, {dish: dish, editMode: true});
    }

    const handleDelete = dishName => {
        let dish = dishes.find(el => {
            return el.dishName === dishName[1]
        });
        history.push(`/admin/dishes/${dish.dishId}`, {dish: dish, deleteMode: true});
    }

    const flattenData = data => {
        return data.map(el => {
            let active = '';
            if(el.active)
                active = 'Nie'
            let src = el.dishImage === null ? `data:image/jpeg;base64,${el.dishImage}` : `https://dummyimage.com/400x200/ffffff/32750e&text=${el.dishName}`;
            return [<img height="70px" width="100px" src={src} />, 
                el.dishName, 
                active]
        });
    }

    const searching = filter => {
        let result = flattenData(dishes)
            .filter(el => el[1].toLowerCase().includes(filter))
        setPreparedData(result);
    }

    return(
        <>
            <ListTable
                data={preparedData} 
                headers={['Podgląd','Danie', 'Aktywne']}
                onAdd={handleAdd}
                onEdit={handleUpdate} 
                onDelete={handleDelete}
                onSearch={searching}
            />
        </>
    )
}

export default DishList;