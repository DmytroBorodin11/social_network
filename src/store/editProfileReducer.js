import { editUserProfieAPI } from "../api/api"
import { uploadUserInfo } from "./profileReducer"

const initialState = {
    componentName: 'edit_profile',
    buttons: [
        {
            title: 'Personal Info',
            id: 1,
            isActive: true,
        },
        {
            title: 'Contact Info',
            id: 2,
            isActive: false,
        }
    ],
    forms: [
        {
            isActive: true,
            id: 1,
        },
        {
            isActive: false,
            id: 2,
        },
    ]
}

const editProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_FORM:
            return {
                ...state,
                subComponentName: action.subComponentName,
            }
        case ACTIVE_MODE:

            return {
                ...state,
                buttons: state.buttons.map(button => {
                    button.isActive = false
                    if(action.id === button.id) {
                        button.isActive = action.isActive;
                    }
                    return button;
                }),
                forms: state.forms.map(form => {
                    form.isActive = false;
                    if (action.id === form.id) {
                        form.isActive = action.isActive;
                    }
                    return form;
                })
            }
        default:
            return state;
    }
}

let EDIT_FORM = 'EDIT-FORM'
let ACTIVE_MODE = 'ACTIVE-MODE';

export const showEditForm = (subComponentName) => ({type: EDIT_FORM, subComponentName});

export const setButtonActiveMode = (id, isActive) => ({type: ACTIVE_MODE, id, isActive});

export const uploadProfilePhoto = (file, id) => (dispatch) => {
    editUserProfieAPI.uploadPhoto(file).then(response => {
        if (response.resultCode === 0) {
            dispatch(uploadUserInfo(id));
        }
    })
}

export const updateProfileInfo = (profileInfo) => (dispatch) => {
    editUserProfieAPI.updateProfileInfo(profileInfo);
}

export default editProfileReducer;