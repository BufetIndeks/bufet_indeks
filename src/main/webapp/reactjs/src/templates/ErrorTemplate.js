import React from 'react';

const ErrorTemplate = props => {

    let error = ''
    if(props.error === undefined)
        error = 404

    return(
        <div className="col s12 center-align">
            <h1 className="black-text">{error}</h1>
        </div>
    )
}

export default ErrorTemplate;