import React from "react";
import '../css/LoginPage.css';
import {Redirect, useRouteMatch} from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {loginUser} from "../store/authReducer";

const LoginPage = (props) => {

    let { path, url } = useRouteMatch();

    let submit = (value) => {
        props.loginUser(value);
    }

    if(props.isAuth) {
        return <Redirect to={`${props.path}/profile/`}/>
    }

    return (
        <div className={'login__page__wrap'}>
            <div className="wrap">
                <div className="left__side"></div>
                <div className="right__side">
                    <div className="login__block">
                        <h1 className="login__title">
                            Sign in
                        </h1>
                        <p className="login__text">
                            Enter your email address and password to access admin panel.
                        </p>
                        <LoginForm path={path} onSubmit={submit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const LoginPageContainer = connect(mapStateToProps, {loginUser})(LoginPage);

export default LoginPageContainer;