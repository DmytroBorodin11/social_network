import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import newsfeedReducer from "./newsfeedReducer";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";
import friendRequestReducer from "./friendsRequestReduser";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";
import editProfileReducer from "./editProfileReducer";


let reducers = combineReducers(
    {
        sidebar: sidebarReducer,
        newsfeed: newsfeedReducer,
        messages: messagesReducer,
        friends: friendsReducer,
        friendsRequest: friendRequestReducer,
        profile: profileReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer,
        editProfile: editProfileReducer,
    }
)

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;