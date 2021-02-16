import React from "react";
import ComponentTitleBlock from "../../../ComponentTitleBlock/ComponentTitleBlock";
import facebook from '../../../../assets/images/profile_page/social_icons/facebook.svg';
import twitter from '../../../../assets/images/profile_page/social_icons/twitter.svg';
import instagram from '../../../../assets/images/profile_page/social_icons/instagram.svg';
import youtube from '../../../../assets/images/profile_page/social_icons/youtube.svg';
import github from '../../../../assets/images/profile_page/social_icons/github-logo-silhouette-in-a-square.svg';
import linkedIn from '../../../../assets/images/profile_page/social_icons/linkedin.svg';
import { CustomInputBlock } from "../../../../Fields/Fields";
import {Field, reduxForm} from "redux-form";


const Form = (props) => {

    let {handleSubmit} = props;

    return (
        <form className="edit__prof__info" onSubmit={handleSubmit}>
            <div className="input__row">
                <Field component={CustomInputBlock} name={'email'} 
                placeholder={'Enter your email'}
                type='text' inputName={'Email'} />
                <Field component={CustomInputBlock} name={'website'} 
                placeholder={'Enter your website'}
                type='text' inputName={'Personal website'} />
           </div>
           <div className="input__row">
                <Field component={CustomInputBlock} name={'facebook'} 
                placeholder={'http://...'}
                type='text' icon={facebook} inputName={'Facebook'} />
                <Field component={CustomInputBlock} name={'twitter'} 
                placeholder={'http://...'}
                type='text' icon={twitter} inputName={'Twitter'} />
           </div>
           <div className="input__row">
                <Field component={CustomInputBlock} name={'instagram'} 
                placeholder={'http://...'}
                type='text' icon={instagram} inputName={'Instagram'} />
                <Field component={CustomInputBlock} name={'youtube'} 
                placeholder={'http://...'}
                type='text' icon={youtube} inputName={'Youtube'} />
           </div>
           <div className="input__row">
                <Field component={CustomInputBlock} name={'github'} 
                placeholder={'http://...'}
                type='text' icon={github} inputName={'Github'} />
                <Field component={CustomInputBlock} name={'linkedIn'} 
                placeholder={'http://...'}
                type='text' icon={linkedIn} inputName={'LinkedIn'} />
           </div>
           <button className="submit__btn">Submit</button>
        </form>
    )
}

const SuperForm = reduxForm({
    form: 'contactInfo'
})(Form)

const ContactInfoForm = (props) => {

    let onSubmit = (value) => {
        let profileInfo = {
            aboutMe: "я круто чувак 1001%",
            contacts: {
                facebook: value.facebook,
                github: value.github,
                instagram: value.instagra,
                mainLink: value.linkedIn,
                twitter: value.twitter,
                vk: null,
                website: value.website,
                youtube: value.youtube,
            },
            lookingForAJob: props.profileInfo.lookingForAJob,
            lookingForAJobDescription: props.profileInfo.lookingForAJobDescription,
            fullName: props.profileInfo.fullName,
        }
        props.updateProfileInfo(profileInfo)
    }

    return (
        <div className={'profile__form' + ' ' + (props.isActive ? 'active' : '')}>
            <ComponentTitleBlock compTitle={'Contact Info'} />
            <div className="form__body">
                <SuperForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default ContactInfoForm;