import React from 'react';
import '../../css/FriendRequest.css';
import ComponentTitleBlock from "../ComponentTitleBlock/ComponentTitleBlock";
import FriendRequestCard from "./FriendRequestCard/FriendRequestCard";
import userIcon from '../../assets/images/user_icon.jpg';
import Preloader from "../Preloader/Preloader";


const FriendRequest = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/ props.usersOnPageCount);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let pagesBtns = pages.map(p => <button className={p === props.currentPage ? 'selected__page' : ''}
                                           onClick={() => {props.uploadCurrentUsersPage(p, props.usersOnPageCount, true)}}>{p}</button>)

    let friendRequestList = props.usersList.map(user =>
            <FriendRequestCard userIcon={user.userIcon !== undefined ? user.userIcon : userIcon}
                               userName={user.name}
                               id={user.id}
                               friendsQuantity={user.friendsQuantity !== undefined ? user.friendsQuantity : '45 friends'}
                               key={user.id}
                               removeFriendRequest={props.removeFriendRequest}/>)
    return (
        <div className="main__wrap">
            <div className={'component__wrap' + ' ' + props.componentName}>
                <ComponentTitleBlock compTitle={'Friend Request'}/>
                <div className="component__body">
                    <Preloader isFetching={props.isFetching}/>
                    {friendRequestList}
                    <div className="page__select__block">
                        {pagesBtns}
                    </div>
                    <button className="show__more" onClick={() => {props.uploadCurrentUsersPage(props.currentPage + 1, props.usersOnPageCount, false)}}>
                        View More Requests
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FriendRequest