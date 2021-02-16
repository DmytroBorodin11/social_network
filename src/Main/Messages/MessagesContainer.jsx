import Messages from "./Messages";
import {connect} from "react-redux";
import withRedirect from "../../Hocs/reddirectHoc";
import {compose} from "redux";
import {setProfileIcon} from '../../store/messagesReducer';
import {getProfilePhoto} from '../../Selectors/profileSelectors';

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.messages,
    }
}

const MessagesContainer = compose(
    connect(mapStateToProps),
    connect(mapStateToPropsForRedirect),
    withRedirect,
)(Messages);

export default MessagesContainer;