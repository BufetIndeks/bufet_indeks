import React, { Component } from 'react'
import axios from 'axios';
import M from "materialize-css";

class RegisterComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            role: 'ROLE_ADMIN',
            hasCreationFailed: false,
            showSuccessMessage: false,
        }

       // this.handleChange = this.handleChange.bind(this)
       // this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    submitClicked = () => {
        axios.post('http://localhost:8080/admin/register',{

                login: this.state.username,
                password: this.state.password,
                role: this.state.role
          },)
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
        return (
            <div className="row container">
                <div className=" col l4 offset-l4">
                    <div className="purple-text accent-2"><h5>Create New Account</h5></div>
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    <div className="input-field">
                        <select value={this.state.role} onChange={this.handleChange} name="role">
                            <option value='ROLE_ADMIN'>Administrator</option>
                            <option value='ROLE_TABLE'>Klient</option>
                            <option value='ROLE_WORKER'>Pracownik</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <input className="validate" type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    
                    <button className="btn blue col l12" onClick={this.submitClicked}>Zarejestruj użytkownika</button>
                </div>
            </div>
        )
    }
}

export default RegisterComponent