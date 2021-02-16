import React from 'react';
import {connect} from "react-redux";
import FriendRequest from "./FriendRequest";
import {
    isFetchingCheck,
    removeFriendRequest,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, uploadCurrentUsersPage, uploadUsers
} from "../../store/friendsRequestReduser";
import {usersAPI} from "../../api/api";

class FriendRequestComp extends React.Component {

    componentDidMount() {
            this.props.uploadUsers(this.props.state.currentPage, this.props.state.usersOnPageCount);
    }

/*    uploadUsers = () => {
        this.props.isFetchingCheck(true);
        usersAPI.getFriendRequests(this.props.state.currentPage, this.props.state.usersOnPageCount).then(response => {
            this.props.setUsers(response.items);
            let totalCount = response.totalCount;
            if (totalCount > 70) {
                totalCount = 70;
            }
            this.props.setUsersTotalCount(totalCount);
            this.props.isFetchingCheck(false);
        })
    }*/

/*    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.isFetchingCheck(true);
        usersAPI.getCurrentRequestsListPage(pageNumber, this.props.state.usersOnPageCount).then(response => {
            this.props.setUsers(response.items);
            this.props.isFetchingCheck(false);
        })
    }*/

    render () {
        return (
            <FriendRequest totalUsersCount={this.props.state.totalUsersCount}
                           usersOnPageCount={this.props.state.usersOnPageCount}
                           currentPage={this.props.state.currentPage}
                           usersList={this.props.state.usersList}
                           componentName={this.props.state.componentName}
                           uploadCurrentUsersPage={this.props.uploadCurrentUsersPage}
                           isFetching={this.props.state.isFetching}
                           removeFriendRequest={this.props.removeFriendRequest}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.friendsRequest,
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        setUsers(users) {
            dispatch(setUsersAC(users));
        },
        setCurrentPage(pageNumber) {
          dispatch(pageSelectorAC(pageNumber))
        },
        setUsersTotalCount (totalCount) {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        isFetchingCheck (isFetching) {
            dispatch(isFetchingAC(isFetching));
        }
    }
}*/

let FriendRequestContainer = connect(mapStateToProps,{
    removeFriendRequest, uploadUsers, uploadCurrentUsersPage
})(FriendRequestComp);

export default FriendRequestContainer;