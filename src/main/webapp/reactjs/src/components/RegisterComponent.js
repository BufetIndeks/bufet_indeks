import React, { Component } from 'react'
import axios from 'axios';
import M from "materialize-css";

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            role: '',
            hasCreationFailed: false,
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

    submitClicked = () => {
        axios.post('/user', {
            login: this.state.username,
            password: this.state.password,
            role: this.state.role
          })
          .then((response) =>{
              this.setState({
                    showSuccessMessage: true,
                    hasCreationFailed: false
              })
          })
          .catch( (error) => {
                this.setState({
                    showSuccessMessage: false,
                    hasCreationFailed: true
                })
          })
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
                            <option selected value='ROLE_WORKER'>Pracownik</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <input className="validate" type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                        <label for="username">Username</label>
                    </div>
                    <div className="input-field">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    
                    <button className="btn blue col l12 waves-effect waves-light" onClick={this.submitClicked}>Zarejestruj użytkownika</button>
                    {this.state.showSuccessMessage && <div className="green-text">Rejestracja zakończona powodzeniem</div>}
                    {this.state.hasCreationFailed && <div className="red-text">Rejestracja nie powiodła się</div>}
                </div>
            </div>
        )
    }
}

export default LoginComponent