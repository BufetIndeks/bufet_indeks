import axios from 'axios'
import {API_URL} from "../ApiUrl";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {



    executeBasicAuthenticationService(username, password) {
        return axios(`${API_URL}/basicauth`,{
            method: 'POST',
            auth:{
                username : username,
                password : password
            }
        })
    }


    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }


    logout() {
        axios.post(`${API_URL}/logout`)//, (req, res) => {
        //     res.header('Access-Control-Allow-Origin', '*');
        //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        //
        // }).then(er=>{console.log(er)})
        //     .catch(er=>{console.log(er)})
        axios.interceptors.request.use(e=>{
            e.cancelToken(0)
        })
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        axios.interceptors.request.eject(this.reqInt)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }


    setupAxiosInterceptors(token) {
        this.reqInt = axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()