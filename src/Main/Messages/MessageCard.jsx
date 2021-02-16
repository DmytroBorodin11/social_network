import React from "react";
import '../../css/MessageCard.css';

const MessageCard = (props) => {
    return (
        <div className={'message__card' + ' ' + props.className}>
            <div className="message__wrap">
                <div className="card__info">
                    <img alt={'user'} src={props.userIcon} className="user__icon"/>
                    <p className="send__time">
                        {props.sendTime}
                    </p>
                </div>
                <p className="message__text">
                    {props.messageText}
                </p>
            </div>
        </div>
    )
}

export default MessageCard;