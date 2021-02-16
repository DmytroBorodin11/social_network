import React from "react";
import CreatePost from "./CreatePost";
import {addPostAC, postTextChangeAC} from "../../../store/newsfeedReducer";
import {connect} from "react-redux";
import {getProfilePhoto, getProfileName} from '../../../Selectors/profileSelectors';


const mapStateToProps = (state) => {
    return {
        state: state.newsfeed.createPost,
        profilePhoto: getProfilePhoto(state),
        userName: getProfileName(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost(post) {
            let action = addPostAC(post);
            dispatch(action);
        }
    }
}

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost);

export default CreatePostContainer;