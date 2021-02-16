import React from "react";
import '../css/SearchBlock.css';
import {Field, reduxForm} from "redux-form";


const SearchBlock = (props) => {

    let {handleSubmit} = props;

    return (
        <form className={'search__block' + ' ' + props.state.className} onSubmit={handleSubmit}>
            <Field name={'search'} component={'input'} className="search__input" placeholder={props.state.placeholder}/>
            <button className="icon-search"></button>
        </form>
    )
}

const ReduxSearchBlock = reduxForm({
    form: 'search',
})(SearchBlock)

export default ReduxSearchBlock;