import React from 'react';
import Header from "./Header";
import {logoutUser, setAuthUserIcon} from "../store/authReducer";
import {connect} from "react-redux";
import {uploadUserInfo} from '../store/profileReducer';
import { setMiniSidebar } from './../store/sidebarReducer';

class HeaderComp extends React.Component {

    render() {
        return (
            <Header path={this.props.path} uploadUserInfo={this.props.uploadUserInfo}
            setMiniSidebar={this.props.setMiniSidebar} mini={this.props.mini}
            logoutUser={this.props.logoutUser} state={this.props.state}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.auth,
        mini: state.sidebar.mini,
    }
}

const HeaderContainer = connect(mapStateToProps, {
    logoutUser, setAuthUserIcon, uploadUserInfo, setMiniSidebar
})(HeaderComp);

export default HeaderContainer;