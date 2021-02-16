import React from "react";
import '../../../css/Profile.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusText: this.props.status,
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode (value) {
        this.setState({
            editMode: false
        });
        this.props.updateProfileStatus(value);
    }
    changeStatusText(value) {
        this.setState({
            statusText: value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                statusText: this.props.status,
            })
        }
    }

    render() {
        return (
            <div className="profile__status__block">
                <span className="bold">Status:</span>
                {
                    this.state.editMode === false ? <p onClick={() => this.activateEditMode()} className="status__text">{this.state.statusText}</p>
                        : <input onBlur={(e) => this.deactivateEditMode(e.target.value)}
                                 onChange={(e => this.changeStatusText(e.target.value))}
                                 autoFocus={true}
                                 className="status__edit__input"  value={this.state.statusText}/>
                }
            </div>
        )
    }
}

export default ProfileStatus;