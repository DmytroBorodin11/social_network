import profilePhoto from '../assets/images/profile_page/large_profile_photo.png';
import profileBgPhoto from '../assets/images/profile_page/profile_bg.jpg';
import {userProfileAPI} from "../api/api";
import {setAuthUserIcon} from "../store/authReducer";

const SET_USER_INFO = 'SET-USER-INFO';
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS';

let initialState = {
    componentName: 'profile',
    profileStatus: 'Try to find a job',
    profileInfo: {
        userId: 1,
        lookingForAJob: true,
        fullName: 'Bni Cyst',
        posts: 690,
        followers: 567,
        following: 328,
        contacts: {
            github: 'github.com',
            facebook: 'facebook.com',
            website: "www.webdol.by",
            vk: "vk.com/krozeal",
            twitter: "twitter.com",
            instagram: "instagram.com",
            youtube: "youtube.com",
            mainLink: "mainlink.com/profile",
            linkedIn: 'linkedin.com',
        },
        photos: {
            large: profilePhoto,
            small: profilePhoto,
            backgroundPhoto: profileBgPhoto,
        }
    },
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                profileInfo: action.userInfo,
            }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                profileStatus: action.profileStatus,
            }
        }
        default:
            return state;
    }
}

export const setUserInfo = (userInfo) => ({type: SET_USER_INFO, userInfo});
export const setProfileStatus = (profileStatus) => ({type: SET_PROFILE_STATUS, profileStatus});

export const uploadUserInfo = (userId) => {
    return (dispatch) => {
        userProfileAPI.getUserProfileInfo(userId).then(response => {
            dispatch(setUserInfo(response));
        })
    }
}

export const getProfileStatus = (id) => {
    return (dispatch) => {
        userProfileAPI.getUserStatus(id).then(response => {
            dispatch(setProfileStatus(response));
        })
    }
}

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        userProfileAPI.updateProfileStatus(status).then(response => {
            if (response.resultCode === 0) {
                dispatch(setProfileStatus(status));
            }
        })
    }
}

export default profileReducer;