import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {
    followUser,
    unfollowUser,
    uploadFriends
} from "../../store/friendsReducer";


class FriendsContainerComp extends React.Component {

    componentDidMount() {
        if (this.props.state.friendsList.length === 0) {
            this.props.uploadFriends();
        }
    }

    render() {
       return (
           <Friends state={this.props.state}
           follow={this.props.followUser}
           unfollow={this.props.unfollowUser}
           toggleBtnDisabling={this.props.toggleBtnDisabling}/>
       )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.friends
    }
}


const FriendsContainer = connect (mapStateToProps, {
    uploadFriends, unfollowUser, followUser
})(FriendsContainerComp);

export default FriendsContainer;