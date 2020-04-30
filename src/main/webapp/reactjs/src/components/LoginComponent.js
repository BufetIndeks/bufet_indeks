import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            rememberMe: true,
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);


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
           .executeBasicAuthenticationService(this.state.username, this.state.password, this.state.rememberMe)
           .then(response=>{
             if(response.status===200){
                 this.props.history.push(`/`)
             }
               else
                 this.props.history.push(`/login`)
           })



    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
            return (
                <div className=" col s10 offset-s1 l4 offset-l4">
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
                    </div>
                    <div>
                        <label>
                            Zapamiętaj mnie na tym komputerze
                            <input
                                name="rememberMe"
                                type="checkbox"
                                checked={this.state.rememberMe}
                                onChange={this.handleInputChange} />
                            <span></span>
                        </label>
                    </div>

                    <button className="btn blue right" onClick={this.loginClicked}>Zaloguj się</button>
                </div>
        )
    }
}

export default LoginComponent