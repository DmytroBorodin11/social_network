import React from "react";
import '../../../css/FriendRequestCard.css';
import {NavLink} from "react-router-dom";


const FriendRequestCard = (props) => {
    return (
        <div className={'friend__request__card'}>
            <NavLink to={'profile/' + props.id}>
                <div className="user__info__block">
                    <div className="user__icon__block">
                        <img src={props.userIcon}/>
                    </div>
                    <div className="user__info">
                        <p className="user__name">
                            {props.userName}
                        </p>
                        <p className="friends__quantity">
                            {props.friendsQuantity}
                        </p>
                    </div>
                </div>
            </NavLink>
            <div className="btns__block">
                <button className="confirm__btn" onClick={() => {props.removeFriendRequest(props.id)}}>
                    Confirm
                </button>
                <button className="delete__request__btn" onClick={() => {props.removeFriendRequest(props.id)}}>
                    Delete Request
                </button>
            </div>
        </div>
    )
}

export default FriendRequestCard;