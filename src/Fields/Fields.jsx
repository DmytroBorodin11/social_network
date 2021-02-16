import React from 'react';
import '../css/Fields.css';

export const Input = (props) => {
    return (
        <div className="field__block">
            <input {...props.input} placeholder={props.placeholder}
                   className={props.className + ' ' + (props.meta.touched && !props.meta.valid &&'error__field')}/>
            {
                props.meta.touched && !props.meta.valid &&
                <p className="error__text">
                    {props.meta.error}
                </p>
            }
        </div>
    )
}


export const CustomInputBlock = (props) => {

    return (
        <div className="input__block">
            <label htmlFor={props.inputId}>
                {props.icon ? <img src={props.icon}/> : ''}
                {props.inputName}
            </label> 
            <input {...props.input} placeholder={props.placeholder} id={props.inputId} type={props.type}/>
        </div>
    )
}
