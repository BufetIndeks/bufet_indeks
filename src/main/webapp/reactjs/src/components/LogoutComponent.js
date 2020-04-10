import React, { Component } from 'react'
import axios from 'axios';
import {API_URL} from "../ApiUrl";
import AuthenticationService from '../service/AuthenticationService';

class LogoutComponent extends Component {
    constructor(props) {
        super(props)


    }

    componentDidMount() {
        axios.get(API_URL + "/logoutt")
            .then((response) => {
                console.log("ok");
            })
            .catch((error) => {
                console.log("error")
            })
        AuthenticationService.logout()
    }

    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    No i elo
                </div>
            </>
        )
    }
}
export default LogoutComponent