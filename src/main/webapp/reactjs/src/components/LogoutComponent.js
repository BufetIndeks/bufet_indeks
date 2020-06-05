import React, { useEffect, useContext } from 'react'
import axios from 'axios';
import {API_URL} from "../ApiUrl";
import { useHistory } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext';

const LogoutComponent = props => { 

    const history = useHistory();
    const context = useContext(GlobalContext);

    useEffect(() => {
        context.setLogin('');
        context.setRole("ROLE_GUEST");
        axios.get(`${API_URL}/logout`);
        history.push(`/`)
    }, [])
    
    return(<></>)
}

export default LogoutComponent