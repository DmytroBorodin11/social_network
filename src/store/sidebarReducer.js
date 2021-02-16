
let initialState = {
    mini: false,
    menuItems: [
        {
            id: 1,
            itemName: 'My Newsfeed',
            path: 'newsfeed',
            iconName: 'newspaper',
        },
        {
            id: 2,
            itemName: 'My Profile',
            path: 'profile',
            iconName: 'user',
        },
        {
            id: 3,
            itemName: 'My Messages',
            path: 'messages',
            iconName: 'message',
        },
        {
            id: 4,
            itemName: 'My Friends',
            path: 'friends',
            iconName: 'friends',
        },
        {
            id: 5,
            itemName: 'Friend Request',
            path: 'friend_request',
            iconName: 'contacts',
        },
    ]
};

const sidebarReducer  = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_MINI: 
            return {
                ...state,
                mini: action.isMini,
            }
        default:
            return state;
    }
}

const SET_IS_MINI = 'SET-IS-MINI'

export const setMiniSidebar = (isMini) => ({type: SET_IS_MINI, isMini});

export default sidebarReducer;