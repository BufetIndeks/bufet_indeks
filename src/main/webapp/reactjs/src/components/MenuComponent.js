import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';

class MenuComponent extends Component {

    render() {
        const path = this.props.location.pathname.slice(1);
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (

            <header>
                <nav>
                    <ul>
                        <li><Link className="nav-link" to="/list">Lista dań</Link></li>
                    </ul>
                    <div>
                        <h1>{path}</h1>
                    </div>
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