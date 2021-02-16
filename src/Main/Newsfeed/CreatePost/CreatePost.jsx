import React from "react";
import '../../../css/CreatePost.css';
import ComponentTitleBlock from "../../ComponentTitleBlock/ComponentTitleBlock";
import {Field, reduxForm, stopSubmit} from "redux-form";

const PostInputForm = (props) => {
    let { handleSubmit } = props;
    return (
        <form className={'post__input__form'} onSubmit={handleSubmit}>
            <div className="creat__post__body">
                <div className="user__icon">
                    <img alt={'user'} className={'user__post__img'} src={props.profilePhoto}/>
                </div>
                <Field className="post__input" component={'textarea'}
                name={'post'} placeholder={'Write something...'}/>
            </div>
            <div className="create__post__footer">
                <button className="create__post__btn">
                    Create Post
                </button>
            </div>
        </form>
    )
}

const ReduxPostInputForm = reduxForm({
    form: 'postInput'
})(PostInputForm);

const CreatePost = (props) => {

    let onCreatePost = (value) => {
        value.post ? props.createPost(value.post) : stopSubmit('postInput', {});
    }

    return (
        <div className={'createPost__wrapper'}>
            <ComponentTitleBlock compTitle={'Create Post'}/>
            <ReduxPostInputForm profilePhoto={props.profilePhoto} state={props.state} onSubmit={onCreatePost}/>
        </div>
    )
}

export default CreatePost;