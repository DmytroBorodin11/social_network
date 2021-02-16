import React from "react";
import '../../css/Newsfeed.css';
import {connect} from "react-redux";
import Newsfeed from "./Newsfeed";
import { getProfilePhoto, getProfileName } from './../../Selectors/profileSelectors';

const mapStateToProps = (state) => {
    return {
        state: state.newsfeed,
        profilePhoto: getProfilePhoto(state),
        userName: getProfileName(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

let NewsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(Newsfeed)

export default NewsFeedContainer;