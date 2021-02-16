import React from "react";
import '../../css/CompTitleBlock.css';

const ComponentTitleBlock = (props) => {
    return (
        <div className={'component__title__block'}>
            <h2 className="component__title">
                {props.compTitle}
            </h2>
        </div>
    )
}

export default ComponentTitleBlock;