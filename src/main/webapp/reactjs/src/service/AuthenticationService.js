import axios from 'axios'
import {API_URL} from "../ApiUrl";


class AuthenticationService {



    executeBasicAuthenticationService(username, password, rememberme) {
        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("remember-me", rememberme);
        return axios.post(`${API_URL}/login`,formData)
    }

}

export default new AuthenticationService()