import React from "react";
import '../../css/Messages.css';
import MessagesSidebar from "./MessagesSidebar";
import DialogBlockContainer from "./DialogsBlock/DialogsBlockContainer";


const Messages = (props) => {

    return (
        <div className="main__wrap">
            <div className={'component__wrap' + ' ' + props.state.componentName}>
                <div className="wrapper">
                    <MessagesSidebar state={props.state.messagesSidebar}/>
                    <DialogBlockContainer/>
                </div>
            </div>
        </div>
    )
}

export default Messages;