import React from "react";
import {useRef, useEffect} from 'react';
import MessageCard from "../MessageCard";
import {Field, reduxForm, stopSubmit} from "redux-form";

const MessageInput = (props) => {

    let {handleSubmit} = props;

    return (
        <form className={'search__block' + ' ' +  'send' + ' ' + props.state.typeMessageBlock.searchBlock.className} onSubmit={handleSubmit}>
            <Field className="search__input" component={'input'} name={'message'}
                   placeholder={props.state.typeMessageBlock.searchBlock.placeholder}/>
            <div className="send__block">
                <button className="send__btn">
                        <span className="icon-send">

                        </span>
                    <span className="btn__title">
                            Send
                        </span>
                </button>
            </div>
        </form>
    )
}

const ReduxMessageInput = reduxForm({
    form: 'messageInput'
})(MessageInput)

const DialogBlock = (props) => {
    let messagesList = props.state.messagesList.map(message => <MessageCard id={message.id}
                                                                            key={message.id}
                                                                      userIcon={message.userIcon}
                                                                      sendTime={message.sendTime}
                                                                      messageText={message.messageText}
                                                                      className={message.className}/>);


    let onAddMessage = (value) => {
        let date = new Date();
        let maxId = props.state.messagesList[messagesList.length-1].id;
        let time = date.getHours() + ':' + date.getMinutes();
        value.message ? props.addMessage(value.message, props.profilePhoto, time, maxId+1)
         : stopSubmit('messageInput', {});
    }

    let scrollRef = useRef(null);

    const scrollToBottom = () => {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [props.state.messagesList]);
    
    return (
        <div className={'dialog__block'}>
            <div className="messages__block">
                {messagesList}
                <div ref={scrollRef}></div>
            </div>
            <div className="type__message__block">
                <div className="ic__btns__block">
                    <button>
                        <span className="icon-smile">

                        </span>
                    </button>
                    <button>
                        <span className="icon-paper-clip"><span className="path1">

                        </span><span
                            className="path2">

                        </span></span>
                    </button>
                </div>
                <ReduxMessageInput onSubmit={onAddMessage} state={props.state}/>
            </div>
        </div>
    )
}

export default DialogBlock;