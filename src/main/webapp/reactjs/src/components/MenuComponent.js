import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';

class MenuComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (

            <header>
                <nav className="green lighten-1">
                    <ul>
                        <li><Link className="nav-link" to="/list">Lista dań</Link></li>
                    </ul>
                    <ul>
                        {isUserLoggedIn && <li><Link className="nav-link" to="/admin/register">Rejestracja</Link></li>}
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Zaloguj</Link></li>}
                        <li><Link className="nav-link" to="/ingredients">Składniki</Link></li>
                        {isUserLoggedIn && <li><Link className="nav-link" to="/" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(MenuComponent)