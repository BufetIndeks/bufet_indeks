import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'

class HomeComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row">
                <img className="col s12 l4 offset-l4 marginTop" src={require("../logo.svg")} width="300px"/>
                <Link className="nav-link" to="/login">
                    <button className="btn blue col s10 offset-s1 l2 offset-l5 marginTop">
                        Zaloguj się
                    </button>
                </Link>
            </div>
        )
    }
}

export default HomeComponent;