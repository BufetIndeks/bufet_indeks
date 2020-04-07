import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
        }
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked = () => {
        AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                this.props.history.push(`/basicauth`)
            }).catch(() => {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        })
    }

    render() {
        return (
            <div className="row container">
                <div className=" col m12 l4 offset-l4">
                    <div className="red-text accent-2"><h1>Login</h1></div>
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    <div className="input-field">

                        <input className="validate" name="username" type="text" id="username" value={this.state.username} onChange={this.handleChange}/>


                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>

                        <input name="password" type="password" id="password" value={this.state.password} onChange={this.handleChange} />

                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />

                    </div>
                    <button className="btn blue right" onClick={this.loginClicked}>Zaloguj się</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent