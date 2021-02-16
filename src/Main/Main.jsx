import React from "react";
import {Route, useRouteMatch} from "react-router-dom";
import '../css/Main.css';
import NewsfeedContainer from "./Newsfeed/NewsfeedContainer";
import FriendsContainer from "./Friends/FriendsContainer";
import FriendRequestContainer from "./FriendsRequest/FriendRequestContaier";
import ProfileContainer from "./Profile/ProfContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import EditProfileContainer from "./EditProfile/EditProfileContainer";


const Main = (props) => {
    let { path, url } = useRouteMatch();
    return (
        <main className="main">
            <Route path={`${path}/newsfeed`} render={() => <NewsfeedContainer state={props.state.newsfeed}/>}/>
            <Route path={`${path}/profile/:userId?`} render={() => <ProfileContainer path={path}/>}/>
            <Route path={`${path}/messages`} render={() => <MessagesContainer path={path} />}/>
            <Route path={`${path}/friends`} render={() => <FriendsContainer />}/>
            <Route path={`${path}/friend_request`} render={() => <FriendRequestContainer/>}/>
            <Route path={`${path}/edit_profile`} render={() => <EditProfileContainer />}/>
        </main>
    )
}

export default Main;