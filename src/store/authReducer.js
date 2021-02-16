import {userProfileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getProfileStatus, uploadUserInfo} from "./profileReducer";
import {setMainUserProfileInfo} from './messagesReducer';

const SET_CURRENT_USER_INFO = 'SET-CURRENT-USER-INFO';
const SET_IS_AUTH = 'SET-IS-AUTH';
const SET_USER_ICON = 'SET-USER-ICON';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userIcon: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER_INFO: {
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
            }
        }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        case SET_USER_ICON: 
            return {
                ...state,
                userIcon: action.icon,
            }
        default:
            return state;
    }
}

export const setCurrentUserData = (userId, email, login) => ({type: SET_CURRENT_USER_INFO, userId, email, login});
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});
export const setAuthUserIcon = (icon) => ({type: SET_USER_ICON, icon});

//thunk

export const getAuthUserIcon = (id) => (dispatch) => {
    return userProfileAPI.getUserProfileInfo(id).then(response => {
        dispatch(setAuthUserIcon(response.photos.large));
        dispatch(setMainUserProfileInfo(response.fullName, 
            response.lookingForAJobDescription, response.photos.large));
    })
} 

export const uploadAuthUserData = () => {
    return (dispatch) => {
        return userProfileAPI.getAuthUserProfileInfo().then(response => {
           if (response.resultCode === 1 ) {
               dispatch(setIsAuth(false));
           }else if (response.resultCode === 0) {
               dispatch(setIsAuth(true));
               let {id, email, login} = response.data;
               dispatch(setCurrentUserData(id, email, login));
               dispatch(uploadUserInfo(id));
               dispatch(getProfileStatus(id));
               dispatch(getAuthUserIcon(id));
           }
        });
    }
}

export const loginUser = (value) => {
    return (dispatch) => {
        userProfileAPI.loginUser(value.email, value.password, value.rememberMe).then(response => {
            if (response.resultCode === 0) {
                dispatch(uploadAuthUserData());
            }
            else {
                let message = response.messages.length > 0 ? response.messages[0] : '';
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        userProfileAPI.logoutUser().then(response => {
            if (response.resultCode === 0) {
                dispatch(setCurrentUserData(null, null, null));
                dispatch(setIsAuth(false));
            }
        })
    }
}

export default authReducer;