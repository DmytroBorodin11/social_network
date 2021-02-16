import React from "react";
import '../../css/UserCard.css';

const UserCard = (props) => {
    return (
        <div className={'user__card' + ' ' + props.className}>
            <div className="user__logo__block">
                <img src={props.userIcon} className="user__img"/>
                <span className={'user__status' + ' ' + props.status}></span>
            </div>
            <div className="user__info__block">
                <p className="user__name">
                    {props.userName}
                </p>
                <p className="user__position">
                    {props.userPosition}
                </p>
            </div>
        </div>
    )
}

export default UserCard;