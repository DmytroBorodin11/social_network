import React from "react";
import ComponentTitleBlock from "../../../ComponentTitleBlock/ComponentTitleBlock";
import {Field, reduxForm} from "redux-form";
import { CustomInputBlock } from "../../../../Fields/Fields";
import {connect} from 'react-redux';


const Form = (props) => {
    let {handleSubmit} = props;

    return (
        <form className="edit__prof__info" onSubmit={handleSubmit}>
            <div className="input__row">
                <Field name={'firstName'} component={CustomInputBlock} 
                type='text' inputName={'First Name'}
                placeholder={'Enter your first name'} inputId={'first__name'}/>
                <Field name={'lastName'} component={CustomInputBlock} 
                type='text' inputName={'Last Name'}
                placeholder={'Enter your last name'} inputId={'last__name'}/>
            </div>
            <div className="input__row">
                <Field name={'userName'} component={CustomInputBlock} type='text' 
                defaultValue={props.initialValues.userName}
                placeholder='Enter your login' inputName={'User Name'} inputId={'user__name'}/>
                <Field name={'userCity'} component={CustomInputBlock} type='text' 
                placeholder='Enter your city' inputName={'City'} inputId={'city'}/>
            </div> 
            <div className="input__row">
                <Field name={'position'} component={CustomInputBlock} type='text' 
                defaultValue={props.initialValues.position}
                placeholder='Search for position...' inputName={'Search for position'} inputId={'position'}/>
                <Field name={'dateOfBirth'} component={CustomInputBlock} type='text' 
                placeholder='yyyy/mm/dd' inputName={'Date of birth'} inputId={'date__of__birth'}/>
            </div> 
            <div className="input__row__mini">
                <p className="input__row__title">
                    Gender
                </p>
                <div className="input__row">
                    <label htmlFor="male">
                        <Field name={'gender'} id={'male'} component={'input'} type={'radio'}/>
                        Male
                    </label>
                    <label htmlFor="female">
                        <Field name={'gender'} id={'female'} component={'input'} type={'radio'}/>
                        Female
                    </label>
                </div>
            </div>
            <button className="submit__btn">Submit</button>
        </form>
    )
}

const SuperForm = reduxForm({
    form: 'personalInfoForm',
    enableReinitialize: true
})(Form); 

const mapStateToProps = (state) => {
    return{
        initialValues: {
            userName: state.profile.profileInfo.fullName,
            position: state.profile.profileInfo.lookingForAJobDescription,
        }
    }
}

const ConnectedForm = connect(mapStateToProps)(SuperForm)

const PersonalInfoForm = (props) => {

    let newForm = React.createRef();

    const setDataFromForm = (value) => {
       let img = value.target.files[0];
       console.log(img);
       const formData = new FormData();
       debugger; 
     
      // Update the formData object 
      formData.append(
          'photo',
          img
      ); 

       props.uploadProfilePhoto(formData, props.authUser);
    }

    let onSubmit = (value) => {
        let profileInfo = {
            aboutMe: "я круто чувак 1001%",
            contacts: {
                facebook: "facebook.com",
                github: "github.com",
                instagram: "instagra.com/sds",
                mainLink: null,
                twitter: "https://twitter.com/@sdf",
                vk: "vk.com/dimych",
                website: null,
                youtube: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: value.position,
            fullName: value.userName,
        }
        console.log(profileInfo);
        props.updateProfileInfo(profileInfo);
    }

    return (
        <div className={'profile__form' + ' ' + (props.isActive ? 'active' : '')}>
            <ComponentTitleBlock compTitle={'Personal Info'} />
            <div className="form__body">
                <form ref={newForm} className="img__block">
                    <img src={props.profilePhoto === null ? null : props.profilePhoto}/>
                    <div className="upload__file">
                        <label htmlFor={'up__photo'}>
                            <span className="icon-edit"></span>
                        </label>
                        <input className={'upload__photo'} onChange={(e) => setDataFromForm(e)}
                            id={'up__photo'} type={'file'}/>
                    </div>
                </form>
                <ConnectedForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default PersonalInfoForm;