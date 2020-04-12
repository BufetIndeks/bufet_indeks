import React, { Component } from 'react'
import axios from 'axios';
import {API_URL} from "../ApiUrl";

class LogoutComponent extends Component {
    constructor(props) {
        super(props)


    }

    componentDidMount() {
        axios.get(`${API_URL}/logout`)
        this.props.history.push(``)
    }

    render() {
        return (
            <>

            </>
        )
    }
}
export default LogoutComponent