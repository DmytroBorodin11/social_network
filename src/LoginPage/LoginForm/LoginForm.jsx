import {NavLink} from "react-router-dom";
import React from "react";
import '../../css/LoginPage.css';
import '../../css/Fields.css';
import {Field, reduxForm} from "redux-form";
import { invalidEmail, } from "../../validators/validators";
import {Input} from "../../Fields/Fields.jsx";

const LoginForm = (props) => {
    console.log(props.error);
    const { handleSubmit } = props
    return (
        <form className="login__form" onSubmit={handleSubmit}>
            <div className="form__group">
                <label htmlFor={'email'}>
                    Email address
                </label>
                <Field id={'email'} className={'login__input'}
                       component={Input} type={'text'}
                       validate={[invalidEmail]}
                       placeholder={'Enter email'} name={'email'}/>
            </div>
            <div className="form__group">
                <label htmlFor={'pass'}>
                    Password
                </label>
                <Field id={'pass'} className={'login__input'} component={'input'} type={'password'} name={'password'} placeholder={'Enter password'}/>
                <NavLink to={`${props.path}/forgot_pass`} className="pass__recovery">
                    Forgot password?
                </NavLink>
            </div>
            {props.error &&
            <div className="form__error__block">
                <p className="form__error__text">
                    {props.error}
                </p>
            </div>
            }
            <div className="btns__block">
                <div className="remember__me">
                    <label htmlFor={'checkbox'}>
                        <Field className="checkbox" className={'check__input'} component={'input'} name={'checkbox'} type={'checkbox'} id={'checkbox'}/>
                        Remember me
                    </label>
                </div>
                <button type={'submit'} className="sing__in__btn">
                    Sing in
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(LoginForm)