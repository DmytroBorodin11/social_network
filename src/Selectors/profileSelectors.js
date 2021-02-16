export const getProfilePhoto = (state) => {
    return state.auth.userIcon;
}

export const getProfileName = (state) => {
    return state.auth.login;
}

export const getAuthUser = (state) => {
    return state.auth.userId;
}

export const getProfileInfo = (state) => {
    return state.profile.profileInfo;
}