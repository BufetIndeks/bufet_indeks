import React, {Component} from 'react'
import axios from 'axios';
import M from "materialize-css";
import {API_URL} from "../ApiUrl";
import AuthenticationService from '../service/AuthenticationService';

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
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    submitClicked = () => {
        console.log({login: this.state.username,
            password: this.state.password,
            roles: [{"role":this.state.role}]})
        axios.post(API_URL + '/admin/register', {
            login: this.state.username,
            password: this.state.password,
            roles: [{"role":this.state.role}]
        },)
            .then((response) => {
                this.setState({
                        showSuccessMessage: true,
                        hasCreationFailed: false
                    }
                )
                console.log(response)
            })
            .catch((error) => {
                this.setState({
                    showSuccessMessage: false,
                    hasCreationFailed: true
                })
                console.log(error)
            })

    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {return (
            <div className="row container">
                <div className="col s10 offset-s1 l4 offset-l4">
                    <div className="purple-text accent-2"><h5>Create New Account</h5></div>
                    <div className="input-field">
                        <select value={this.state.role} onChange={this.handleChange} name="role">
                            <option value='ROLE_ADMIN'>Administrator</option>
                            <option value='ROLE_TABLE'>Klient</option>
                            <option value='ROLE_WORKER'>Pracownik</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <input className="validate" type="text" id="username" name="username"
                               value={this.state.username} onChange={this.handleChange}/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={this.state.password}
                               onChange={this.handleChange}/>
                    </div>

                    <button className="btn blue col l12 waves-effect waves-light"
                            onClick={this.submitClicked}>Zarejestruj użytkownika
                    </button>
                    {this.state.showSuccessMessage &&
                    <div className="green-text">Rejestracja zakończona powodzeniem</div>}
                    {this.state.hasCreationFailed && <div className="red-text">Rejestracja nie powiodła się</div>}
                </div>
            </div>
        )
    }
}

export default RegisterComponent