import './../../../css/EditProfile.css';


const FromSelector = (props) => {

    let setActiveButton = (id, isActive) => {
        props.setButtonActiveMode(id, isActive);
        props.showEditForm(props.name);
    }

    return (
        <div className={'form__selector' + ' ' + (props.isActive === true ? 'active' : '')}
             onClick={() => setActiveButton(props.id, true)}>
            <span>
                {props.title}
            </span>
        </div>
    )
}

export default FromSelector;