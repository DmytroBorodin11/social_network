import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatus,
    updateProfileStatus,
    uploadUserInfo
} from "../../store/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileComp extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.currentUserId;
        }

        this.props.uploadUserInfo(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return (
            <Profile state={this.props.state} path={this.props.path}
                     updateProfileStatus={this.props.updateProfileStatus}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.profile,
        currentUserId: state.auth.userId
    }
}


let WithRouterProfileComp = withRouter(ProfileComp)

const ProfileContainer = connect(mapStateToProps, {
    uploadUserInfo, getProfileStatus, updateProfileStatus,
})(WithRouterProfileComp);

export default ProfileContainer;