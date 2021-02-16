import React from "react";
import '../../../css/EditProfile.css';
import FromSelector from "./FormSelector";
import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm";
import ContactInfoForm from "./ContactInfoForm/ContactInfoForm";

const EditProfile = (props) => {
    let formSelectors = props.state.buttons.map(selector => <FromSelector key={selector.id}
                                                                          id={selector.id}
                                                                title={selector.title}
                                                                isActive={selector.isActive}
                                                                setButtonActiveMode={props.setButtonActiveMode}
                                                                showEditForm={props.showEditForm}/>)

    return (
        <div className="main__wrap">
            <div className={'component__wrap' + ' ' + props.state.componentName}>
                <div className="buttons__block">
                    {formSelectors}
                </div>
                <div className="form__wrap">
                    <PersonalInfoForm isActive={props.state.forms[0].isActive} 
                    uploadProfilePhoto={props.uploadProfilePhoto}
                    updateProfileInfo={props.updateProfileInfo}
                    authUser={props.authUser}
                    profilePhoto={props.profilePhoto}/>
                    <ContactInfoForm profileInfo={props.profileInfo}
                    updateProfileInfo={props.updateProfileInfo}
                     isActive={props.state.forms[1].isActive}/>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;