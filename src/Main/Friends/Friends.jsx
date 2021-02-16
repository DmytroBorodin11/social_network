import React from "react";
import '../../css/Friends.css'
import FriendCard from "./FriendCard/FriendCard";
import userIcon from '../../assets/images/user_icon.jpg';
import bgImg from '../../assets/images/bg_img.jpg';
import Preloader from "../Preloader/Preloader";

const Friends = (props) => {
    let friendsList = props.state.friendsList.map(friend => <FriendCard
        isDisabled={props.state.isDisabled}
        currentId={props.state.currentId}
        follow={props.follow}
        unfollow={props.unfollow}
        toggleBtnDisabling={props.toggleBtnDisabling}
        friendName={friend.name}
        friendPosition={friend.friendPosition !== undefined ? friend.friendPosition : '@junior developer'}
        friendStatus={friend.status}
        friendIcon={friend.friendIcon !== undefined ? friend.friendIcon : userIcon}
        friendBg={friend.friendBg !== undefined ? friend.friendBg : bgImg}
        followBtn={friend.followed}
        id={friend.id}
        key={friend.id}/>);


    return (
        <div className={'component__wrap' + ' ' + props.state.componentName}>
            <div className="comp__header">
                <div className="comp__title__block">
                    <h1 className="comp__title">
                        Friends Lists
                    </h1>
                </div>
            </div>
            <Preloader isFetching={props.state.isFetching}/>
            <div className="comp__wrapper">
                {friendsList}
            </div>
        </div>
    )
}


export default Friends;