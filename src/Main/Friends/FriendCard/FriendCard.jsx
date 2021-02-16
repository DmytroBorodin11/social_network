import React from "react";
import '../../../css/FriendCard.css';
import {NavLink} from "react-router-dom";


const FriendCard = (props) => {

    let buttonVal = "Follow";

    if (props.followBtn === false) {
        buttonVal = 'Follow'
    }else if (props.followBtn === true) {
        buttonVal = 'Unfollow'
    }


    let changeUserStatus = () => {
        if (props.followBtn === true) {
            props.unfollow(props.id)
            /*props.toggleBtnDisabling(props.id);
            followAPI.unfollowUser(props.id).then(response => {
                if (response.resultCode === 0) {
                    props.follow(props.id);
                }
                props.toggleBtnDisabling(null);
            })*/
        }else if (props.followBtn === false) {
            props.follow(props.id);
            /*props.toggleBtnDisabling(props.id);
            followAPI.followUser(props.id).then(response => {
                if (response.resultCode === 0) {
                    props.unfollow(props.id);
                }
                props.toggleBtnDisabling(null);
            })*/
        }
    }

    return (
        <div className={'friend__card__wrap'}>
            <div className="friend__card__header" style={{backgroundImage: `url(${props.friendBg})`}}>

            </div>
            <div className="friend__card__body">
                <div className="friend__icon__block">
                    <img src={props.friendIcon} className="friend__icon"/>
                    <button className="follow__status_btn"  disabled={props.currentId === props.id ? true : false} onClick={changeUserStatus}>
                        {buttonVal}
                    </button>
                </div>
                <div className="friend__info__block">
                    <NavLink to={`profile/${props.id}`}>
                        <h3 className="friend__name">
                            {props.friendName}
                        </h3>
                    </NavLink>
                    <p className="friend__position">
                        {props.friendPosition}
                    </p>
                    <p className="friend__status">
                        {props.friendStatus}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FriendCard;