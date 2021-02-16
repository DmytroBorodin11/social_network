import React from "react";
import logo from '../assets/images/logo.png';
import '../css/Header.css';
import userIcon from '../assets/images/user_icon.jpg';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    let togleMiniSidebar = () => {
        let mini = props.mini;
        mini ? mini = false : mini = true;
        props.setMiniSidebar(mini);
    }

    return (
        <header className={'header'}>
            <div className="header__wrapper">
                <div className="logo__block">
                    <img src={logo} className="logo__img"/>
                    <span className="logo__name">
                        SocialV
                    </span>
                    <div className="burger__btn" onClick={togleMiniSidebar}>
                        <span className="burger"></span>
                    </div>
                </div>
                <div className="search__block">

                </div>
                <div className="user__block">
                    <div className="user__info__block">
                        <div className="user__icon">
                            <img src={props.state.userIcon ? props.state.userIcon : userIcon}/>
                        </div>
                        <NavLink to={props.state.isAuth ? `${props.path}/profile/` : `${props.path}/login`} onClick={() => {props.uploadUserInfo(props.state.userId)}} className="user__name">
                            {props.state.isAuth ? props.state.login : 'Login'}
                        </NavLink>
                    </div>
                    <button className={"log__out" + ' ' + (!props.state.isAuth ? 'disabled': '')} onClick={props.logoutUser}>
                        Logout
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;