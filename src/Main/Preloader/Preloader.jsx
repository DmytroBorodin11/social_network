import React from "react";
import '../css/Preloader.css';

const Preloader = (props) => {
    return (
        <div className={props.isFetching === false ? 'disabled' : 'preloader'}>
            <span>

            </span>
        </div>
    )
}

export default Preloader;