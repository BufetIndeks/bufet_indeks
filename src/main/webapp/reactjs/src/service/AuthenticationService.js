import axios from 'axios'
import {API_URL} from "../ApiUrl";
import {Cookies } from 'react-cookie';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {



    executeBasicAuthenticationService(username, password, rememberme) {
        console.log(rememberme);
        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("remember-me", rememberme);
        return axios.post(`${API_URL}/login`,formData)
    }

}

export default new AuthenticationService()