import axios from 'axios'
import {API_URL} from "../ApiUrl";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    constructor()
    {
        this.reload();
    }

    persist(username, password)
    {
        localStorage.setItem("auth-token", this.createBasicAuthToken(username, password))
        localStorage.setItem("jsession", document.cookie)
    }

    reload()
    {
        console.log("reload")
        if(this.isUserLoggedIn())
        {
            this.setupAxiosInterceptors(localStorage.getItem("auth-token"))
            document.cookie = localStorage.getItem("jsession")
            console.log("session reloaded")
        }
    }

    executeBasicAuthenticationService(username, password) {
     /*   return axios(`${API_URL}/login`,{
            method: 'POST',
            auth:{
                username : username,
                password : password
            }
        }).then(respones=>{
            console.log(respones.headers)
            console.log(respones.data)
            console.log(respones.config)
        })*/
    }


    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
        this.persist(username, password)
    }


    logout() {
        axios.post(`${API_URL}/logout`);
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        axios.interceptors.request.eject(this.reqInt)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }


    setupAxiosInterceptors(token) {
        console.log("FASFSAFSAFASFSAF")
        console.log(token)
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