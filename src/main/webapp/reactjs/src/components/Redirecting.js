import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import HomeComponent from './HomeComponent';
import LoginComponent from './LoginComponent';
import WorkerDashboard from './WorkerDashboard';
import AdminDashboard from './AdminDashboard';

const Redirecting = props => {

    const context = useContext(GlobalContext);
    const [component, setComponent] = useState((<></>));

    let link = (<></>);

    useEffect(() => {
        choose();
    }, [context.login, context.role])

    const choose = () => {
        console.log("SWITCH", context)
        switch(context.role){
            case "ROLE_TABLE":
                setComponent(<HomeComponent />); break;
            case "ROLE_WORKER":
                setComponent(<WorkerDashboard />); break;
            case "ROLE_ADMIN":
                setComponent(<AdminDashboard />); break;
            default:
                setComponent(<LoginComponent />);
        }
    }

    return component;

}

export default Redirecting;