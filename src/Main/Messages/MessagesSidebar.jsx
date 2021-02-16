import React from "react";
import UserCard from "../UserCard/UserCard";
import ReduxSearchBlock from "../../SearchBlock/SearchBlock";


const MessagesSidebar = (props) => {

    let dialogsList = props.state.dialogsList.map(dialog => <UserCard userName={dialog.userName}
                                                                      key={dialog.id}
                                                                      userPosition={dialog.userPosition}
                                                                      userIcon={dialog.userIcon}
                                                                      status={dialog.status} />)
    let searchInputVal = (value) => {
        console.log(value.search)
    }

    return (
        <aside className="messages__sidebar">
            <UserCard userName={props.state.mainUser.userName}
                      userPosition={props.state.mainUser.userPosition}
                      userIcon={props.state.mainUser.userIcon}
                      status={props.state.mainUser.status}
                      className={props.state.mainUser.className}/>
            <ReduxSearchBlock state={props.state.searchBlock} onSubmit={searchInputVal}/>
            <div className="ms__wrapper">
                <h3 className="messages__sidebar__title">
                    Dialogs
                </h3>
                <div className="dialogs__list">
                    {dialogsList}
                </div>
            </div>
        </aside>
    )
}

export default MessagesSidebar;