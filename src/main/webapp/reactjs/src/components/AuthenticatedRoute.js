import React, { Component } from 'react'
    import { Route, Redirect, withRouter } from 'react-router-dom'
import axios from "axios";
import {API_URL} from "../ApiUrl";




class AuthenticatedRoute extends Component {

    constructor(props) {
        super(props)



        this.state = {
            authorized: false,
            role: props.role,
            url: props.url
        }
    }

    //Sprawdzam czy jest zautoryzowany i jaką ma role
    checkAuthorizationStatus(){
        axios.get(API_URL + this.state.url)
            .then(response=>{
                if(response.data.authenticated === true && response.data.principal.authorities[0].authority=== this.state.role){
                    this.setState({authorized:true})
                }
                else{
                    throw new Error("You are unathorized 401")
                }
            })
            .catch(error=>{
                console.error(error.message)
                this.props.history.push(`/login`)
            })
    }

    componentDidMount() {
        this.checkAuthorizationStatus();
    }


    render() {
        const {authorized} = this.state
        return (
            <React.Fragment>
                {authorized ?(
                    <Route {...this.props}/>
                ):(<></>)}
            </React.Fragment>)
                }
}
export default withRouter(AuthenticatedRoute)