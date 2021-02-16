import userIcon from '../assets/images/user_icon.jpg';
import {usersAPI} from "../api/api";

const SET_USERS = 'SET-USERS';
const PAGE_SELECTOR = 'PAGE-SELECTOR';
const TOTAL_COUNT = 'TOTAL-COUNT';
const IS_FETCHING = 'IS-FETCHING';
const REMOVE_REQUEST = 'REMOVE-REQUEST';
const ADD_USERS = 'ADD-USERS';

let initialState = {
    componentName: 'friend__request',
    usersOnPageCount: 8,
    currentPage: 1,
    isFetching: false,
    usersList: [
        /*{
            name: "Jaques Amole",
            userIcon: userIcon,
            friendsQuantity: '45 friends',
            id: '1',
        },
        {
            name: "Jaques Amole",
            userIcon: userIcon,
            friendsQuantity: '45 friends',
            id: '1',
        },{
            name: "Jaques Amole",
            userIcon: userIcon,
            friendsQuantity: '45 friends',
            id: '1',
        },*/
    ],
    totalUsersCount: 39,
}

let friendRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                usersList: [...action.users],
            }
        case ADD_USERS:
            return {
                ...state,
                usersList: [...state.usersList, ...action.users],
            }
        case PAGE_SELECTOR:
            return {
                ...state,
                currentPage: action.pageNumber,
            }
        case TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount:action.totalCount,
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case REMOVE_REQUEST: {
          /*  let requestsArr = [];
            for (let i = 0; i < state.usersList.length; i++) {
                if (state.usersList[i].id !== action.userId) {
                    requestsArr.push(state.usersList[i]);
                }
            }*/
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== action.userId),
            }
        }
        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users});
export const addUsers = (users) => ({type: ADD_USERS, users})
export const setCurrentPage = (pageNumber) => ({type: PAGE_SELECTOR, pageNumber});
export const setUsersTotalCount = (totalCount) => ({type: TOTAL_COUNT, totalCount});
export const isFetchingCheck = (isFetching) => ({type: IS_FETCHING, isFetching});
export const removeFriendRequest = (userId) => ({type: REMOVE_REQUEST, userId});

export const uploadUsers = (currentPage, usersOnPageCount) => {
    return (dispatch) => {
        dispatch(isFetchingCheck(true));
        usersAPI.getFriendRequests(currentPage, usersOnPageCount).then(response => {
            dispatch(setUsers(response.items));
            let totalCount = response.totalCount;
            if (totalCount > 70) {
                totalCount = 70;
            }
            dispatch(setUsersTotalCount(totalCount));
            dispatch(isFetchingCheck(false));
        })
    }
}

export const uploadCurrentUsersPage = (pageNumber, usersOnPageCount, changePage) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(isFetchingCheck(true));
        usersAPI.getCurrentRequestsListPage(pageNumber, usersOnPageCount).then(response => {
            changePage ? dispatch(setUsers(response.items)) : dispatch(addUsers(response.items));
            dispatch(isFetchingCheck(false));
        })
    }
}

export default friendRequestReducer;