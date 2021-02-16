import {uploadAuthUserData} from "./authReducer";

let initialState = {
    isInitialized: false,
}

let appReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_INITIALIZED:
            return {
                ...state,
                isInitialized: true,
            }
        default:
            return state;
    }
}

const IS_INITIALIZED = 'IS-INITIALIZED';

export const isInitialized = () => ({type: IS_INITIALIZED});

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(uploadAuthUserData());
        Promise.all([promise]).then(() => {
                dispatch(isInitialized());
            }
        )
    }
}

export default appReducer;

