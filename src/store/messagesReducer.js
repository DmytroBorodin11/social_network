import userLogo from "../assets/images/user.jpg";
import user1 from "../assets/images/users/user1.jpg";
import user2 from "../assets/images/users/user2.jpg";
import user3 from "../assets/images/users/user3.jpg";
import user4 from "../assets/images/users/user4.jpg";
import user5 from "../assets/images/users/user5.jpg";
const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_TEXT_CHANGE = 'MESSAGE-TEXT-CHANGE';


let initialState = {
    componentName: 'messages',
    messagesSidebar: {
        mainUser: {
            className: 'main__user',
            userName: "John Doe",
            userPosition: 'Forntend Developer',
            userIcon: null,
            status: 'online'
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
                status: 'online',
                id: 1
            },
            {
                userName: "Katrina Karnagein",
                userPosition: 'Project Manager',
                userIcon: user2,
                status: 'offline',
                id: 2,
            },
            {
                userName: "Calvin Klein",
                userPosition: 'Backend Developer',
                userIcon: user3,
                status: 'online',
                id: 3
            },
            {
                userName: "Jessie Monagan",
                userPosition: 'DevOPS',
                userIcon: user4,
                status: 'offline',
                id: 4
            },
            {
                userName: "Keri Job",
                userPosition: 'Team Lead',
                userIcon: user5,
                status: 'online',
                id: 5
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
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: action.id,
                userIcon: action.userIcon,
                sendTime: action.time,
                messageText: action.message,
                className: 'main__user',
            }
            /*let stateCopy = {...state};
            stateCopy.dialogBlock = {...state.dialogBlock};
            stateCopy.dialogBlock.messagesList = [...state.dialogBlock.messagesList];
            stateCopy.dialogBlock.messagesList.push(newMessage);
            stateCopy.dialogBlock.newMessageText = '';*/
            return {
                ...state,
                dialogBlock: {
                    ...state.dialogBlock,
                    messagesList: [...state.dialogBlock.messagesList, newMessage],
                    newMessageText: '',
                },
            };
        case SET_PROFILE_INFO: 
            return {
                ...state,
                messagesSidebar: {
                    ...state.messagesSidebar,
                    mainUser: {
                        ...state.messagesSidebar.mainUser,
                        userName: action.userName,
                        userPosition: action.userPosition,
                        userIcon: action.userIcon,
                    }
                }

            }
        default:
            return state;
    }
}

const SET_PROFILE_INFO = 'SET-PROFILE-INFO'

export const addMessageAC = (message, userIcon, time, id) => ({type: ADD_MESSAGE, message, userIcon, time, id});
export const setMainUserProfileInfo = (userName, userPosition, userIcon) => ({type: SET_PROFILE_INFO, userName, userPosition, userIcon});

export default messagesReducer;