import React from 'react';
import {connect} from "react-redux";
import EditProfile from "./EditProfileComponents/EditProfile";
import {setButtonActiveMode, showEditForm, uploadProfilePhoto, updateProfileInfo} from "../../store/editProfileReducer";
import {getProfilePhoto, getAuthUser, getProfileInfo} from "../../Selectors/profileSelectors";


const mapStateToProps = (state) => {
    return {
        state: state.editProfile,
        profilePhoto: getProfilePhoto(state),
        authUser: getAuthUser(state),
        profileInfo: getProfileInfo(state),
    }
}

const EditProfileContainer = connect(mapStateToProps, {
    showEditForm, setButtonActiveMode, uploadProfilePhoto, updateProfileInfo
})(EditProfile);

export default EditProfileContainer;
