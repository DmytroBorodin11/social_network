import React from "react";
import '../../css/Profile.css';
import profileBg from '../../assets/images/profile_page/profile_bg.jpg';
import facebook from '../../assets/images/profile_page/social_icons/facebook.svg';
import twitter from '../../assets/images/profile_page/social_icons/twitter.svg';
import instagram from '../../assets/images/profile_page/social_icons/instagram.svg';
import googlePlus from '../../assets/images/profile_page/social_icons/google-plus.svg';
import youtube from '../../assets/images/profile_page/social_icons/youtube.svg';
import github from '../../assets/images/profile_page/social_icons/github-logo-silhouette-in-a-square.svg';
import linkedIn from '../../assets/images/profile_page/social_icons/linkedin.svg';
import {ExternalLink} from "react-external-link";
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusWithHook";
import {NavLink, Route, useRouteMatch} from "react-router-dom";

const Profile = (props) => {

    let { path, url } = useRouteMatch();

    return (
        <div className={'main__wrap'}>
            <div className={'component__wrap' + ' ' + props.state.componentName}>
                <div className="profile__header">
                    <div className="header" style={{backgroundImage: `url(${
                        props.state.profileInfo.photos.backgroundPhoto === undefined ||
                        props.state.profileInfo.photos.backgroundPhoto === null ||
                        props.state.profileInfo.photos.backgroundPhoto === '' ? profileBg : 
                            props.state.profileInfo.photos.backgroundPhoto
                    })`}}>
                        <div className="header__btns__block">
                            <NavLink to={`${props.path}/edit_profile`} className="header__btn">
                                <span className="icon-edit"></span>
                            </NavLink>
                            <NavLink to={`${props.path}/profile_settings`} className="header__btn">
                                <span className="icon-settings"></span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="body">
                        <div className="contacts__block">
                            <ExternalLink href={`${props.state.profileInfo.contacts.facebook}`} className={props.state.profileInfo.contacts.facebook === undefined ||
                            props.state.profileInfo.contacts.facebook === null ||
                            props.state.profileInfo.contacts.facebook === '' ? 'disabled' : 'social__link'}>
                                <img src={facebook}/>
                            </ExternalLink>
                            <ExternalLink href={`${props.state.profileInfo.contacts.twitter}`} className={props.state.profileInfo.contacts.twitter === undefined ||
                            props.state.profileInfo.contacts.twitter === null ||
                            props.state.profileInfo.contacts.twitter === '' ? 'disabled' : 'social__link twitter'}>
                                <img src={twitter}/>
                            </ExternalLink>
                            <ExternalLink href={`${props.state.profileInfo.contacts.instagram}`} className={props.state.profileInfo.contacts.instagram === undefined ||
                            props.state.profileInfo.contacts.instagram === null ||
                            props.state.profileInfo.contacts.instagram === '' ? 'disabled' : 'social__link'}>
                                <img src={instagram}/>
                            </ExternalLink>
                            <ExternalLink href={`${props.state.profileInfo.contacts.googlePlus}`} className={props.state.profileInfo.contacts.googlePlus === undefined ||
                            props.state.profileInfo.contacts.googlePlus === null ||
                            props.state.profileInfo.contacts.googlePlus === '' ? 'disabled' : 'social__link'}>
                                <img src={googlePlus}/>
                            </ExternalLink>
                            <ExternalLink href={`${props.state.profileInfo.contacts.youtube}`} className={props.state.profileInfo.contacts.youtube === undefined ||
                            props.state.profileInfo.contacts.youtube === null ||
                            props.state.profileInfo.contacts.youtube === '' ? 'disabled' : 'social__link'}>
                                <img src={youtube}/>
                            </ExternalLink>
                            <ExternalLink href={`${props.state.profileInfo.contacts.github}`} className={props.state.profileInfo.contacts.github === undefined ||
                            props.state.profileInfo.contacts.github === null ||
                            props.state.profileInfo.contacts.github === '' ? 'disabled' : 'social__link'}>
                                <img src={github}/>
                            </ExternalLink>
                            <ExternalLink href={`${props.state.profileInfo.contacts.mainLink}`} className={props.state.profileInfo.contacts.mainLink === undefined ||
                            props.state.profileInfo.contacts.mainLink === null ||
                            props.state.profileInfo.contacts.mainLink === '' ? 'disabled' : 'social__link'}>
                                <img src={linkedIn}/>
                            </ExternalLink>
                        </div>
                        <div className="user__info">
                            <div className="profile__img">
                                <img src={props.state.profileInfo.photos.large}/>
                            </div>
                            <p className="profile__name">
                                {props.state.profileInfo.fullName}
                            </p>
                            <p className="position">@{props.state.profileInfo.lookingForAJobDescription}</p>
                        </div>
                        <div className="profile__info">
                            <div className="profile__info__block">
                                <p className="block__title">
                                    Followers
                                </p>
                                <p className="block__val">
                                    {props.state.profileInfo.followers === undefined ||
                                    props.state.profileInfo.followers === null ||
                                    props.state.profileInfo.followers === '' ? 754 : props.state.profileInfo.followers}
                                </p>
                            </div>
                            <div className="profile__info__block">
                                <p className="block__title">
                                    Following
                                </p>
                                <p className="block__val">
                                    {props.state.profileInfo.following === undefined ||
                                    props.state.profileInfo.following === null ||
                                    props.state.profileInfo.following === '' ? 254 : props.state.profileInfo.following}
                                </p>
                            </div>
                            <div className="profile__info__block">
                                <p className="block__title">
                                    Posts
                                </p>
                                <p className="block__val">
                                    {props.state.profileInfo.posts === undefined ||
                                    props.state.profileInfo.posts === null ||
                                    props.state.profileInfo.posts === '' ? 154 : props.state.profileInfo.posts}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ProfileStatusWithHook status={props.state.profileStatus}
                               updateProfileStatus={props.updateProfileStatus}/>
            </div>
        </div>
    )
}

export default Profile;