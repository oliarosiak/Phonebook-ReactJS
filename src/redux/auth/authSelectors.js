const selectIsLogin = state=> state.auth.isLogin;

const selectUserName = state => state.auth.user.name;

const selectIsCurrentUser = state => state.auth.user.isCurrentUser;

const authSelectors = {
    selectIsLogin,
    selectUserName,
    selectIsCurrentUser,
};

export default authSelectors; 