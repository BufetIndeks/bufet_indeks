import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticatedRoute from "./AuthenticatedRoute";

const MenuComponent = props => {

    const role = props.role;
    const isLoggedIn = props.isLoggedIn;

    return (

        <header>
            <nav className="green lighten-1">
                <ul>
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    <li><Link className="nav-link" to="/login">Zaloguj</Link></li>
                    <li><Link className="nav-link" to="/admin/register">Rejestracja</Link></li>
                    <li><Link className="nav-link" to="/logout" >Logout</Link></li>
                    <li><Link className="nav-link" to={{pathname: "/list", state: { view: 'client'}}}>Lista dań</Link></li>
                    <li><Link className="nav-link" to="/admin/dashboard">Dashboard</Link></li>
                    <li><Link className="nav-link" to="/allergens">Składniki</Link></li>
                </ul>
            </nav>
        </header>
    )
    
}

export default withRouter(MenuComponent)