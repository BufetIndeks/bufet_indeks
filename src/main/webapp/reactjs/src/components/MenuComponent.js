import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';

class MenuComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav>
                    <ul>
                        <li><Link className="nav-link" to="/list">Lista dań</Link></li>
                    </ul>
                    <ul>
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">ZALOGUJ</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(MenuComponent)