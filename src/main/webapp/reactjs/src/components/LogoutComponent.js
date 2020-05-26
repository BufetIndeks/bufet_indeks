import React, { useEffect } from 'react'
import axios from 'axios';
import {API_URL} from "../ApiUrl";
import { useHistory } from 'react-router-dom'

const LogoutComponent = props => { 

    const history = useHistory()

    useEffect(() => {
        props.setRole('ROLE_GUEST')
        axios.get(`${API_URL}/logout`)
        history.push(`/`)
    }, [])
    
    return(<></>)
}

export default LogoutComponent