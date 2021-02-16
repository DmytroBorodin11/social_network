import React from 'react';
import {Redirect} from "react-router-dom";

const withRedirect = (Component) => {
    let  RedirectComponent = (props) => {
        if (props.isAuth === false) {
            return (
                <Redirect to={`${props.path}/login`}/>
            )
        }
        return <Component {...props}/>
    }
    return RedirectComponent;
}

export default withRedirect;