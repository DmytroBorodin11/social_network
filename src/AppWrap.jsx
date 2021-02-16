import React from "react";
import HeaderContainer from "./Header/HeaderContainer";
import SidebarContainer from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import RightSidebar from "./RightSidebar/RightSidebar";
import {Route, useRouteMatch} from "react-router-dom";
import LoginPageContainer from "./LoginPage/LoginPage";


const AppWrap = (props) => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Route path={`${path}/login`} render={() => <LoginPageContainer path={path}/>}/>
            <div className="App">
                <HeaderContainer path={path}/>
                <div className="app__wapper">
                    <SidebarContainer />
                    <Main state={props.state} />
                    <RightSidebar/>
                </div>
            </div>
        </div>
    )
}

export default AppWrap;