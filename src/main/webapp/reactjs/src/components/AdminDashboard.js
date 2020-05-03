import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = props => {

    return(
        <ul className="menuComponent">
            <Link to="/admin/dishes/new"><li>Dodaj</li></Link>
            <Link to={{ pathname: `/admin/dishes`, state: {view: 'admin'}}}><li>Usuń</li>></Link>
            <Link to={{ pathname: `/admin/dishes`, state: {view: 'admin'}}}><li>Edytuj</li>></Link>
            <Link to="/admin/order"><li>Zamówienia</li>></Link>
            <Link to="/admin/dailyreport"> <li>Raport dnia</li>></Link>
            <Link to="/logout"> <li>Raport dnia</li>></Link>
        </ul>
    );
};

export default AdminDashboard;