import React from 'react'
import axios from 'axios';
import {API_URL} from "../ApiUrl";

const LogoutComponent = props => {

    
    axios.get(`${API_URL}/logout`)
    this.props.history.push(``)
    

    return(<></>)
}

export default LogoutComponent