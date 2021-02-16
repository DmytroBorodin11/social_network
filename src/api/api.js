import * as axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "cde8b9fb-4f27-40d0-9fa3-a99abe79e865",
    }
})


export const userProfileAPI = {
    getAuthUserProfileInfo() {
        return axiosInstance.get('auth/me').then(response => response.data);
    },
    getUserProfileInfo(id) {
        return axiosInstance.get('profile/' + id).then(response => response.data);
    },
    getUserStatus(id) {
        return axiosInstance.get('profile/status/' + id).then(response => response.data);
    },
    updateProfileStatus(status) {
        return axiosInstance.put('profile/status', {status: status}).then(response => response.data);
    },
    loginUser(email, password, rememberMe) {
        return axiosInstance.post('auth/login', {email, password, rememberMe,}).then(response => response.data);
    },
    logoutUser() {
        return axiosInstance.delete('auth/login').then(response => response.data);
    },

}

export const usersAPI = {
    getUsers() {
        return axiosInstance.get('users').then(response => response.data);
    },
    getFriendRequests(currentPage, usersOnPageCount) {
        return axiosInstance.get(`users?page=${currentPage}&count=${usersOnPageCount}`).then(response => response.data);
    },
    getCurrentRequestsListPage(pageNumber, usersOnPageCount) {
        return axiosInstance.get(`users?page=${pageNumber}&count=${usersOnPageCount}`).then(response => response.data);
    }
}


export const followAPI = {
    unfollowUser(id) {
        return axiosInstance.delete('follow/' +  id,).then(response => response.data);
    },
    followUser(id) {
        return axiosInstance.post('follow/' +  id,).then(response => response.data);
    }
}

export const editUserProfieAPI = {
    uploadPhoto(file) {
        return axiosInstance.put('profile/photo', file).then(response => response.data);
    },
    updateProfileInfo(profileInfo) {
        return axiosInstance.put('profile/', profileInfo).then(response => response);
    }
}
