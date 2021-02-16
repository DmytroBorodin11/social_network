import friend_1 from '../assets/images/friends_page/friend_1.jpg'
import friend_2 from '../assets/images/friends_page/friend_2.jpg'
import friend_3 from '../assets/images/friends_page/friend_3.jpg'
import friend_4 from '../assets/images/friends_page/friend_4.jpg'
import friend_bg1 from '../assets/images/friends_page/friend_bg1.jpg'
import friend_bg2 from '../assets/images/friends_page/friend_bg2.jpg'
import friend_bg3 from '../assets/images/friends_page/friend_bg3.jpg'
import friend_bg4 from '../assets/images/friends_page/friend_bg4.jpg'
import {followAPI, usersAPI} from "../api/api";

let initialState = {
    componentName: 'friends',
    currentId: null,
    isFetching: false,
    friendsList:  []   /* = [
        {
            id: 1,
            friendName: 'Paul Molive',
            friendPosition: "@developer",
            friendStatus: 'Lorem Ipsum is simply dummy text of the',
            friendIcon: friend_1,
            friendBg: friend_bg1,
            followBtn: 'Follow',
        },
        {
            id: 2,
            friendName: 'Anna Sthesia',
            friendPosition: "@designer",
            friendStatus: 'Lorem Ipsum is simply dummy text of the',
            friendIcon: friend_2,
            friendBg: friend_bg2,
            followBtn: 'Unfollow',
        },
        {
            id: 3,
            friendName: 'Bob Frapples',
            friendPosition: "@developer",
            friendStatus: 'Lorem Ipsum is simply dummy text of the',
            friendIcon: friend_3,
            friendBg: friend_bg3,
            followBtn: 'Unfollow',
        },
        {
            id: 4,
            friendName: 'Paige Turner',
            friendPosition: "@tester",
            friendStatus: 'Lorem Ipsum is simply dummy text of the',
            friendIcon: friend_4,
            friendBg: friend_bg4,
            followBtn: 'Unfollow',
        },
    ]*/
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friendsList: state.friendsList.map(item => {
                    if (item.id === action.id) {
                        item.followed = false;
                    }
                    return item;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                friendsList: state.friendsList.map(item => {
                    if (item.id === action.id) {
                        item.followed = true;
                    }
                    return item;
                })
            };
        case SET_USERS:
            return {
                ...state,
                friendsList: [...action.users],
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case IS_DISABLED:
            return {
                ...state,
                currentId: action.currentId,
            }
        default: return state;
    }
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const IS_DISABLED = 'IS-DISABLED';
const IS_FETCHING = 'IS-FETCHING';

export const follow = (userId) => ({type: FOLLOW, id: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, id: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const isFetching = (isFetching) => ({type: IS_FETCHING, isFetching})
export const toggleBtnDisabling = (currentId) => ({type: IS_DISABLED, currentId});

export const uploadFriends = () => {
    return (dispatch) => {
        dispatch(isFetching(true))
        usersAPI.getUsers().then(response => {
            dispatch(setUsers(response.items));
        })
        dispatch(isFetching(false))
    }
}

export const unfollowUser = (id) => {
    return (dispatch) => {
        dispatch(toggleBtnDisabling(id));
        followAPI.unfollowUser(id).then(response => {
            if (response.resultCode === 0) {
                dispatch(follow(id));
            }
            dispatch(toggleBtnDisabling(null));
        })
    }
}

export const followUser = (id) => {
    return (dispatch) => {
        dispatch(toggleBtnDisabling(id));
        followAPI.followUser(id).then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollow(id));
            }
            dispatch(toggleBtnDisabling(null));
        })
    }
}

export default friendsReducer;