import React from "react";
import DialogBlock from "./DialogBlock";
import {addMessageAC} from "../../../store/messagesReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        state: state.messages.dialogBlock,
        profilePhoto: state.messages.messagesSidebar.mainUser.userIcon,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage(message, userIcon, time, id) {
            let action = addMessageAC(message, userIcon, time, id);
            dispatch(action);
        },
    }
}

const DialogBlockContainer = connect(mapStateToProps, mapDispatchToProps)(DialogBlock);

export default DialogBlockContainer;