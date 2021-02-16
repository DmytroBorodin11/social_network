import React, {useEffect, useState} from "react";
import '../../../css/Profile.css';

const ProfileStatusWithHook = (props) => {

        const [status, setStatus] = useState(props.status);
        const [editMode, setEditMode] = useState(false);

        useEffect( () => {
            setStatus(props.status)
        }, [props.status]);

        let activateEditMode = () => {
            setEditMode(true);
        }

        let deactivateEditMode = () => {
            setEditMode(false);
            props.updateProfileStatus(status);
        }

        let onStatusChange = (e) => {
            setStatus(e.target.value);
        }
        return (
            <div className="profile__status__block">
                <span className="bold">Status:</span>
                {
                    !editMode && <p onClick={activateEditMode} className="status__text">{props.status}</p>
                }
                {
                    editMode && <input onBlur={deactivateEditMode}
                                       value={status}
                                       onChange={onStatusChange}
                                       autoFocus={true}
                                       className="status__edit__input" />
                }
            </div>
        )
}

export default ProfileStatusWithHook;