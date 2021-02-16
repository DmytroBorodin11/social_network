import React from "react";
import user__logo from '../../../assets/images/user.jpg';
import '../../../css/Post.css';


const Post = (props) => {
    return (
        <div className={'post__block'}>
            <div className="post__header">
                <div className="user__block__p">
                    <div className="user__icon">
                        <img alt={'user'} className="user__logo" src={props.userIcon}/>
                    </div>
                    <div className="user__info__p">
                        <p className="user__name">
                            {props.userName}
                        </p>
                        <p className="add__post__time">
                            {props.postedTime}
                        </p>
                    </div>
                </div>
                <btn className="post__settings__btn">
                    Post settings
                </btn>
            </div>
            <div className="post__body">
                <p className="post__text">
                    {props.postText}
                </p>
            </div>
        </div>
    )
}

export default Post;