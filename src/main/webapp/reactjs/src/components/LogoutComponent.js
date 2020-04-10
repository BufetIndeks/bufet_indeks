import React, { Component } from 'react'
import axios from 'axios';
import {API_URL} from "../ApiUrl";
import AuthenticationService from '../service/AuthenticationService';

class LogoutComponent extends Component {
    constructor(props) {
        super(props)


    }

    componentDidMount() {
        axios.post(API_URL + "/logout")
            .then((response) => {
                console.log("ok");
            })
            .catch((error) => {
                console.log("error")
            })
        AuthenticationService.logout()
        this.props.history.push("")
    }

    render() {
        return (
            <>

            </>
        )
    }
}
export default LogoutComponent