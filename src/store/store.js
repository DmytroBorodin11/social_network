import userLogo from '../assets/images/user.jpg';
import user1 from '../assets/images/users/user1.jpg';
import user2 from '../assets/images/users/user2.jpg';
import user3 from '../assets/images/users/user3.jpg';
import user4 from '../assets/images/users/user4.jpg';
import user5 from '../assets/images/users/user5.jpg';
import sidebarReducer from "./sidebarReducer";
import newsfeedReducer from "./newsfeedReducer";
import messagesReducer from "./messagesReducer";


let store = {
    _state: {
        sidebar: {
            menuItems: [
                {
                    id: 1,
                    itemName: 'My Newsfeed',
                    path: 'newsfeed',
                    iconName: 'newspaper',
                },
                {
                    id: 1,
                    itemName: 'My Profile',
                    path: 'profile',
                    iconName: 'user',
                },
                {
                    id: 1,
                    itemName: 'My Messages',
                    path: 'messages',
                    iconName: 'message',
                },
                {
                    id: 1,
                    itemName: 'My Friends',
                    path: 'friends',
                    iconName: 'friends',
                }
            ]
        },
        newsfeed: {
            componentName: 'newsfeed',
            createPost: {
                postBtns: [],
                newPostText: '',
                userIcon: userLogo,
            },
            posts: [
                {
                    id: 1,
                    postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
                    postedTime: 'Just now',
                    userName: 'John Doe',
                    userIcon: userLogo,
                },
                {
                    id: 2,
                    postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
                    postedTime: 'Just now',
                    userName: 'John Doe',
                    userIcon: userLogo,
                },
                {
                    id: 3,
                    postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
                    postedTime: 'Just now',
                    userName: 'John Doe',
                    userIcon: userLogo,
                },
                {
                    id: 4,
                    postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
                    postedTime: 'Just now',
                    userName: 'John Doe',
                    userIcon: userLogo,
                }
            ]
        },
        messages: {
            componentName: 'messages',
            messagesSidebar: {
                mainUser: {
                    className: 'main__user',
                    userName: "John Doe",
                    userPosition: 'Forntend Developer',
                    userIcon: userLogo,
                    status: 'none'
                },
                searchBlock: {
                    className: 'dialogs',
                    placeholder: 'Search',
                },
                dialogsList: [
                    {
                        userName: "Bni Jordan",
                        userPosition: 'Web Designer',
                        userIcon: user1,
                        status: 'online'
                    },
                    {
                        userName: "Katrina Karnagein",
                        userPosition: 'Project Manager',
                        userIcon: user2,
                        status: 'offline'
                    },
                    {
                        userName: "Calvin Klein",
                        userPosition: 'Backend Developer',
                        userIcon: user3,
                        status: 'online'
                    },
                    {
                        userName: "Jessie Monagan",
                        userPosition: 'DevOPS',
                        userIcon: user4,
                        status: 'offline'
                    },
                    {
                        userName: "Keri Job",
                        userPosition: 'Team Lead',
                        userIcon: user5,
                        status: 'online'
                    },
                ]
            },
            dialogBlock: {
                newMessageText: '',
                messagesList: [
                    {
                        id: 1,
                        userIcon: user1,
                        sendTime: '14:01',
                        messageText: 'Hello! I need your help',
                        className: '',
                    },
                    {
                        id: 2,
                        userIcon: userLogo,
                        sendTime: '14:01',
                        messageText: 'Hello! How can I help you?',
                        className: 'main__user',
                    },
                    {
                        id: 3,
                        userIcon: user1,
                        sendTime: '14:01',
                        messageText: 'I cant find the design for my social network project.',
                        className: '',
                    },
                    {
                        id: 4,
                        userIcon: userLogo,
                        sendTime: '14:01',
                        messageText: 'Ok, let me think',
                        className: 'main__user',
                    },
                ],
                typeMessageBlock: {
                    searchBlock: {
                        className: 'type__message',
                        placeholder: 'Type your message',
                    },
                }
            }
        },
    },

    _subscriber () {

    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {
       this._state.sidebar = sidebarReducer(this._state.sidebar, action);
       this._state.newsfeed = newsfeedReducer(this._state.newsfeed, action);
       this._state.messages = messagesReducer(this._state.messages, action);

       this._subscriber();
    },
}


export default store;